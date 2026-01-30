'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import { supabase } from '@/lib/supabase'

const frameworks = [
  {
    id: 'iso27001',
    name: 'ISO 27001:2022',
    description: 'International standard for information security management systems (ISMS)',
    controls: 12,
    popular: true,
  },
  {
    id: 'nist',
    name: 'NIST CSF',
    description: 'Cybersecurity framework by the National Institute of Standards and Technology',
    controls: 23,
    popular: false,
    comingSoon: true,
  },
  {
    id: 'soc2',
    name: 'SOC 2',
    description: 'Service Organization Control 2 for trust services criteria',
    controls: 17,
    popular: false,
    comingSoon: true,
  },
]

export default function NewAssessmentPage() {
  const router = useRouter()
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleStart() {
    if (!selectedFramework) {
      setError('Please select a framework')
      return
    }

    setLoading(true)
    setError('')

    try {
      const user = await getCurrentUser()
      if (!user) {
        router.push('/login')
        return
      }

      // Create new assessment
      const { data, error: dbError } = await supabase
        .from('assessments')
        .insert({
          user_id: user.id,
          framework: selectedFramework,
          status: 'pending',
          overall_score: 0,
        })
        .select()
        .single()

      if (dbError) throw dbError

      // Redirect to upload page
      router.push(`/assessment/${data.id}/upload`)
    } catch (err: any) {
      setError(err.message || 'Failed to create assessment')
      setLoading(false)
    }
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

          <h1 className="text-3xl font-bold text-gray-900 mb-2">New Assessment</h1>
          <p className="text-gray-600 mb-8">
            Select a compliance framework to begin your assessment
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <div className="space-y-4 mb-8">
            {frameworks.map((framework) => (
              <div
                key={framework.id}
                onClick={() => !framework.comingSoon && setSelectedFramework(framework.id)}
                className={`p-6 bg-white rounded-lg border-2 transition-all ${
                  framework.comingSoon
                    ? 'opacity-50 cursor-not-allowed'
                    : 'cursor-pointer hover:border-blue-300'
                } ${
                  selectedFramework === framework.id
                    ? 'border-blue-600 ring-2 ring-blue-100'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {framework.name}
                      </h3>
                      {framework.popular && (
                        <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
                          Popular
                        </span>
                      )}
                      {framework.comingSoon && (
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mt-1">{framework.description}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      {framework.controls} controls to assess
                    </p>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedFramework === framework.id
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedFramework === framework.id && (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleStart}
            disabled={loading || !selectedFramework}
            className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
              loading || !selectedFramework
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {loading ? 'Creating Assessment...' : 'Continue to Document Upload →'}
          </button>
        </div>
      </div>
    </div>
  )
}
