import { NextRequest, NextResponse } from 'next/server'
import { uploadToAzure } from '@/lib/azure-storage'
import { createClient } from '@supabase/supabase-js'

// Use service role key for server-side operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const assessmentId = formData.get('assessmentId') as string

    if (!file || !assessmentId) {
      return NextResponse.json(
        { error: 'File and assessmentId are required' },
        { status: 400 }
      )
    }

    // Check file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size exceeds 10MB limit' },
        { status: 400 }
      )
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload to Azure Blob Storage
    const blobPath = await uploadToAzure(buffer, file.name, file.type)

    // Save document metadata to Supabase
    const { data, error } = await supabase
      .from('documents')
      .insert({
        assessment_id: assessmentId,
        filename: file.name,
        file_path: blobPath,
        file_size: file.size,
        mime_type: file.type,
      })
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to save document metadata' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      documentId: data.id,
      filename: file.name,
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    )
  }
}
