import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export async function analyzeDocument(
  documentText: string,
  control: {
    id: string
    name: string
    description: string
    requiredEvidence: string[]
  },
  frameworkName: string = 'ISO 27001'
): Promise<{
  status: 'met' | 'partial' | 'not_met'
  confidence: number
  evidence_summary: string
}> {
  const prompt = `You are a ${frameworkName} compliance auditor. Analyze this document for control ${control.id}: "${control.name}".

Requirement: ${control.description}
Evidence needed: ${control.requiredEvidence.join(', ')}

Document (first 3000 chars):
${documentText.slice(0, 3000)}

Respond ONLY with JSON:
{
  "status": "met" OR "partial" OR "not_met",
  "confidence": 0-100,
  "evidence_summary": "brief summary"
}`

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      response_format: { type: 'json_object' },
    })

    return JSON.parse(response.choices[0].message.content || '{}')
  } catch (error) {
    console.error('OpenAI error:', error)
    return {
      status: 'not_met',
      confidence: 0,
      evidence_summary: 'Error analyzing document',
    }
  }
}
