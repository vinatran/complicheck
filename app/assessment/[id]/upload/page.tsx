'use client'

import { useState, useCallback, use } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import { supabase } from '@/lib/supabase'

interface UploadedFile {
  id: string
  name: string
  size: number
  status: 'uploading' | 'uploaded' | 'error'
}

export default function UploadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: assessmentId } = use(params)
  const router = useRouter()
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [error, setError] = useState('')

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFiles = Array.from(e.dataTransfer.files)
    await uploadFiles(droppedFiles)
  }, [assessmentId])

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      await uploadFiles(selectedFiles)
    }
  }

  async function uploadFiles(fileList: File[]) {
    const user = await getCurrentUser()
    if (!user) {
      router.push('/login')
      return
    }

    for (const file of fileList) {
      const tempId = `temp-${Date.now()}-${file.name}`

      // Add to state as uploading
      setFiles(prev => [...prev, {
        id: tempId,
        name: file.name,
        size: file.size,
        status: 'uploading',
      }])

      try {
        // Create form data
        const formData = new FormData()
        formData.append('file', file)
        formData.append('assessmentId', assessmentId)

        // Upload via API
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        if (!response.ok) {
          throw new Error('Upload failed')
        }

        const result = await response.json()

        // Update state to uploaded
        setFiles(prev => prev.map(f =>
          f.id === tempId
            ? { ...f, id: result.documentId, status: 'uploaded' as const }
            : f
        ))
      } catch (err) {
        // Update state to error
        setFiles(prev => prev.map(f =>
          f.id === tempId
            ? { ...f, status: 'error' as const }
            : f
        ))
        setError(`Failed to upload ${file.name}`)
      }
    }
  }

  async function handleAnalyze() {
    const uploadedFiles = files.filter(f => f.status === 'uploaded')
    if (uploadedFiles.length === 0) {
      setError('Please upload at least one document')
      return
    }

    setAnalyzing(true)
    setError('')

    try {
      // Update assessment status to analyzing
      await supabase
        .from('assessments')
        .update({ status: 'analyzing' })
        .eq('id', assessmentId)

      // Trigger analysis
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assessmentId }),
      })

      if (!response.ok) {
        throw new Error('Analysis failed')
      }

      // Redirect to results
      router.push(`/assessment/${assessmentId}`)
    } catch (err: any) {
      setError(err.message || 'Analysis failed')
      setAnalyzing(false)
    }
  }

  function formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  function removeFile(id: string) {
    setFiles(prev => prev.filter(f => f.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <a href="/dashboard" className="text-blue-600 hover:text-blue-700">
              ← Back to Dashboard
            </a>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Documents</h1>
          <p className="text-gray-600 mb-8">
            Upload your policy documents, procedures, and evidence files for analysis
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Drop Zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-all ${
              isDragging
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <svg
              className="w-12 h-12 mx-auto text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="text-lg text-gray-600 mb-2">
              Drag and drop your files here
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Supports PDF, DOC, DOCX, XLS, XLSX, TXT (max 10MB each)
            </p>
            <label className="inline-block px-6 py-3 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.xls,.xlsx,.txt"
                onChange={handleFileSelect}
                className="hidden"
              />
              Browse Files
            </label>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="mt-8 bg-white rounded-lg border">
              <div className="px-6 py-4 border-b">
                <h2 className="font-semibold">Uploaded Files ({files.length})</h2>
              </div>
              <div className="divide-y">
                {files.map((file) => (
                  <div key={file.id} className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">{file.name}</p>
                        <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {file.status === 'uploading' && (
                        <span className="text-sm text-blue-600">Uploading...</span>
                      )}
                      {file.status === 'uploaded' && (
                        <span className="text-sm text-green-600">✓ Ready</span>
                      )}
                      {file.status === 'error' && (
                        <span className="text-sm text-red-600">Error</span>
                      )}
                      <button
                        onClick={() => removeFile(file.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tips */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">💡 Tips for best results</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Upload your Information Security Policy document</li>
              <li>• Include access control procedures and matrices</li>
              <li>• Add training records and awareness materials</li>
              <li>• Include incident response procedures</li>
              <li>• Upload any audit reports or vulnerability scans</li>
            </ul>
          </div>

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={analyzing || files.filter(f => f.status === 'uploaded').length === 0}
            className={`w-full mt-8 py-4 rounded-lg font-semibold text-lg transition-all ${
              analyzing || files.filter(f => f.status === 'uploaded').length === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {analyzing ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Analyzing Documents...
              </span>
            ) : (
              'Start AI Analysis →'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
