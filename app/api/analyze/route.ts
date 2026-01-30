import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { getFromAzure } from '@/lib/azure-storage'
import { analyzeDocument } from '@/lib/openai'
import { getAllControls } from '@/lib/iso27001-controls'
import { extractText } from '@/lib/document-parser'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const { assessmentId } = await request.json()

    if (!assessmentId) {
      return NextResponse.json(
        { error: 'assessmentId is required' },
        { status: 400 }
      )
    }

    // Get all documents for this assessment
    const { data: documents, error: docError } = await supabase
      .from('documents')
      .select('*')
      .eq('assessment_id', assessmentId)

    if (docError || !documents?.length) {
      return NextResponse.json(
        { error: 'No documents found for this assessment' },
        { status: 400 }
      )
    }

    // Update status to analyzing
    await supabase
      .from('assessments')
      .update({ status: 'analyzing' })
      .eq('id', assessmentId)

    // Combine all document texts
    let combinedText = ''
    for (const doc of documents) {
      try {
        const buffer = await getFromAzure(doc.file_path)
        const text = await extractText(buffer, doc.mime_type || 'text/plain', doc.filename)
        combinedText += `\n\n--- Document: ${doc.filename} ---\n${text}`
      } catch (err) {
        console.error(`Failed to process document ${doc.filename}:`, err)
      }
    }

    if (!combinedText.trim()) {
      return NextResponse.json(
        { error: 'Could not extract text from documents' },
        { status: 400 }
      )
    }

    // Get all ISO 27001 controls
    const controls = getAllControls()
    const results: any[] = []

    // Analyze each control
    for (const control of controls) {
      try {
        const result = await analyzeDocument(combinedText, {
          id: control.id,
          name: control.name,
          description: control.description,
          requiredEvidence: control.requiredEvidence,
        })

        results.push({
          assessment_id: assessmentId,
          control_id: control.id,
          domain: control.domain,
          status: result.status,
          confidence_score: result.confidence,
          evidence_summary: result.evidence_summary,
        })
      } catch (err) {
        console.error(`Failed to analyze control ${control.id}:`, err)
        results.push({
          assessment_id: assessmentId,
          control_id: control.id,
          domain: control.domain,
          status: 'not_met',
          confidence_score: 0,
          evidence_summary: 'Analysis failed',
        })
      }
    }

    // Save control results to database
    const { error: insertError } = await supabase
      .from('control_results')
      .insert(results)

    if (insertError) {
      console.error('Failed to save results:', insertError)
    }

    // Calculate overall score
    const metCount = results.filter(r => r.status === 'met').length
    const partialCount = results.filter(r => r.status === 'partial').length
    const totalControls = results.length

    // Score: met = 100%, partial = 50%
    const overallScore = Math.round(
      ((metCount * 100) + (partialCount * 50)) / totalControls
    )

    // Update assessment with final score
    await supabase
      .from('assessments')
      .update({
        status: 'completed',
        overall_score: overallScore,
      })
      .eq('id', assessmentId)

    return NextResponse.json({
      success: true,
      overallScore,
      controlsAnalyzed: totalControls,
      met: metCount,
      partial: partialCount,
      notMet: totalControls - metCount - partialCount,
    })
  } catch (error) {
    console.error('Analysis error:', error)
    return NextResponse.json(
      { error: 'Analysis failed' },
      { status: 500 }
    )
  }
}
