/**
 * Extract text from various document types
 */
export async function extractText(buffer: Buffer, mimeType: string, filename: string): Promise<string> {
    const extension = filename.split('.').pop()?.toLowerCase()

  // PDF files
  if (mimeType === 'application/pdf' || extension === 'pdf') {
        try {
                // Dynamic import for pdf-parse to handle ESM/CommonJS compatibility
          const pdfParse = await import('pdf-parse').then(m => m.default || m)
                const data = await pdfParse(buffer)
                return data.text
        } catch (error) {
                console.error('PDF parsing error:', error)
                // Fallback to raw text extraction
          return extractRawText(buffer)
        }
  }

  // Text files
  if (
        mimeType.includes('text') ||
        ['txt', 'md', 'csv'].includes(extension || '')
      ) {
        return buffer.toString('utf-8')
  }

  // Word documents (basic extraction - in production use mammoth)
  if (
        mimeType.includes('wordprocessing') ||
        ['doc', 'docx'].includes(extension || '')
      ) {
        // Basic text extraction from docx (XML-based)
      const text = buffer.toString('utf-8')
        // Extract text between XML tags
      const matches = text.match(/<w:t[^>]*>([^<]*)<\/w:t>/g)
        if (matches) {
                return matches
                  .map(m => m.replace(/<[^>]+>/g, ''))
                  .join(' ')
        }
        return extractRawText(buffer)
  }

  // Excel files (basic extraction)
  if (
        mimeType.includes('spreadsheet') ||
        ['xls', 'xlsx'].includes(extension || '')
      ) {
        return extractRawText(buffer)
  }

  // Default: try raw text extraction
  return extractRawText(buffer)
}

/**
 * Extract readable ASCII text from buffer
 */
function extractRawText(buffer: Buffer): string {
    const text = buffer.toString('utf-8')
    // Remove non-printable characters, keep newlines and tabs
  return text
      .replace(/[^\x20-\x7E\n\r\t]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
}

/**
 * Chunk text into smaller pieces for analysis
 */
export function chunkText(text: string, maxChars: number = 4000): string[] {
    const chunks: string[] = []
        let currentChunk = ''

  const paragraphs = text.split(/\n\n+/)

  for (const paragraph of paragraphs) {
        if (currentChunk.length + paragraph.length > maxChars) {
                if (currentChunk) {
                          chunks.push(currentChunk.trim())
                }
                currentChunk = paragraph
        } else {
                currentChunk += '\n\n' + paragraph
        }
  }

  if (currentChunk.trim()) {
        chunks.push(currentChunk.trim())
  }

  return chunks
}
