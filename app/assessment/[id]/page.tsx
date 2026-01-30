'use client'

import { useEffect, useState, use } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import { supabase } from '@/lib/supabase'

interface Assessment {
  id: string
  framework: string
  status: string
  overall_score: number
  created_at: string
}

interface ControlResult {
  id: string
  control_id: string
  domain: string
  status: 'met' | 'partial' | 'not_met'
  confidence_score: number
  evidence_summary: string
}

interface DomainSummary {
  domain: string
  total: number
  met: number
  partial: number
  notMet: number
  score: number
}

export default function AssessmentResultsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: assessmentId } = use(params)
  const router = useRouter()
  const [assessment, setAssessment] = useState<Assessment | null>(null)
  const [results, setResults] = useState<ControlResult[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedDomain, setExpandedDomain] = useState<string | null>(null)

  useEffect(() => {
    loadData()
  }, [assessmentId])

  async function loadData() {
    const user = await getCurrentUser()
    if (!user) {
      router.push('/login')
      return
    }

    // Load assessment
    const { data: assessmentData } = await supabase
      .from('assessments')
      .select('*')
      .eq('id', assessmentId)
      .single()

    if (!assessmentData) {
      router.push('/dashboard')
      return
    }

    setAssessment(assessmentData)

    // Load control results
    const { data: resultsData } = await supabase
      .from('control_results')
      .select('*')
      .eq('assessment_id', assessmentId)
      .order('control_id')

    setResults(resultsData || [])
    setLoading(false)
  }

  function getDomainSummaries(): DomainSummary[] {
    const domains = new Map<string, DomainSummary>()

    results.forEach((result) => {
      const existing = domains.get(result.domain) || {
        domain: result.domain,
        total: 0,
        met: 0,
        partial: 0,
        notMet: 0,
        score: 0,
      }

      existing.total++
      if (result.status === 'met') existing.met++
      else if (result.status === 'partial') existing.partial++
      else existing.notMet++

      existing.score = Math.round(
        ((existing.met * 100) + (existing.partial * 50)) / existing.total
      )

      domains.set(result.domain, existing)
    })

    return Array.from(domains.values())
  }

  function getStatusColor(status: string): string {
    switch (status) {
      case 'met': return 'text-green-600 bg-green-100'
      case 'partial': return 'text-yellow-600 bg-yellow-100'
      case 'not_met': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  function getStatusLabel(status: string): string {
    switch (status) {
      case 'met': return 'Compliant'
      case 'partial': return 'Partial'
      case 'not_met': return 'Gap'
      default: return status
    }
  }

  function getScoreColor(score: number): string {
    if (score >= 80) return 'text-green-600'
    if (score >= 50) return 'text-yellow-600'
    return 'text-red-600'
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading results...</div>
      </div>
    )
  }

  if (!assessment) {
    return null
  }

  if (assessment.status === 'analyzing') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-16 w-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Analyzing Documents...</h2>
          <p className="text-gray-600">This may take a few minutes. Please don't close this page.</p>
        </div>
      </div>
    )
  }

  const domainSummaries = getDomainSummaries()
  const gaps = results.filter(r => r.status === 'not_met')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <a href="/dashboard" className="text-blue-600 hover:text-blue-700">
              ← Back to Dashboard
            </a>
          </div>

          {/* Header */}
          <div className="bg-white rounded-lg shadow p-8 mb-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {assessment.framework.toUpperCase()} Assessment Results
                </h1>
                <p className="text-gray-500">
                  Completed on {new Date(assessment.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <div className={`text-6xl font-bold ${getScoreColor(assessment.overall_score)}`}>
                  {assessment.overall_score}%
                </div>
                <p className="text-gray-500 mt-1">Overall Compliance</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  {results.filter(r => r.status === 'met').length}
                </div>
                <p className="text-sm text-gray-500">Controls Met</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">
                  {results.filter(r => r.status === 'partial').length}
                </div>
                <p className="text-sm text-gray-500">Partial Compliance</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">
                  {gaps.length}
                </div>
                <p className="text-sm text-gray-500">Gaps Identified</p>
              </div>
            </div>
          </div>

          {/* Domain Breakdown */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="px-6 py-4 border-b">
              <h2 className="text-xl font-semibold">Compliance by Domain</h2>
            </div>
            <div className="divide-y">
              {domainSummaries.map((domain) => (
                <div key={domain.domain}>
                  <div
                    onClick={() => setExpandedDomain(
                      expandedDomain === domain.domain ? null : domain.domain
                    )}
                    className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-4">
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          expandedDomain === domain.domain ? 'rotate-90' : ''
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-gray-900">{domain.domain}</h3>
                        <p className="text-sm text-gray-500">
                          {domain.met} met · {domain.partial} partial · {domain.notMet} gaps
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${domain.score}%` }}
                        />
                      </div>
                      <span className={`font-semibold ${getScoreColor(domain.score)}`}>
                        {domain.score}%
                      </span>
                    </div>
                  </div>

                  {/* Expanded Controls */}
                  {expandedDomain === domain.domain && (
                    <div className="bg-gray-50 px-6 py-4">
                      <div className="space-y-3">
                        {results
                          .filter(r => r.domain === domain.domain)
                          .map((result) => (
                            <div
                              key={result.id}
                              className="bg-white p-4 rounded-lg border"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-mono text-sm text-gray-500">
                                      {result.control_id}
                                    </span>
                                    <span className={`px-2 py-0.5 text-xs rounded ${getStatusColor(result.status)}`}>
                                      {getStatusLabel(result.status)}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-700 mt-2">
                                    {result.evidence_summary}
                                  </p>
                                </div>
                                <div className="text-right ml-4">
                                  <div className="text-sm text-gray-500">
                                    {result.confidence_score}% confidence
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Gap Analysis */}
          {gaps.length > 0 && (
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b">
                <h2 className="text-xl font-semibold text-red-600">🚨 Gap Analysis</h2>
                <p className="text-sm text-gray-500 mt-1">
                  These controls need attention to achieve compliance
                </p>
              </div>
              <div className="divide-y">
                {gaps.map((gap) => (
                  <div key={gap.id} className="px-6 py-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        !
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-semibold">
                            {gap.control_id}
                          </span>
                          <span className="text-sm text-gray-500">
                            {gap.domain}
                          </span>
                        </div>
                        <p className="text-gray-700 mt-1">{gap.evidence_summary}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => window.print()}
              className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
            >
              Export Report
            </button>
            <a
              href="/assessment/new"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              Start New Assessment
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
