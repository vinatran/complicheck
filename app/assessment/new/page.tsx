'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import { supabase } from '@/lib/supabase'
import { getFrameworkList } from '@/lib/frameworks'

const frameworkList = getFrameworkList()

// Group frameworks by category
const categories = {
  security: { name: 'Security', icon: '🛡️' },
  privacy: { name: 'Privacy', icon: '🔒' },
  industry: { name: 'Industry', icon: '🏭' },
  government: { name: 'Government', icon: '🏛️' },
  ai: { name: 'AI', icon: '🤖' },
}

export default function NewAssessmentPage() {
  const router = useRouter()
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredFrameworks = frameworkList.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.shortName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || f.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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

      router.push(`/assessment/${data.id}/upload`)
    } catch (err: any) {
      setError(err.message || 'Failed to create assessment')
      setLoading(false)
    }
  }

  const getCategoryIcon = (category: string) => {
    return categories[category as keyof typeof categories]?.icon || '📋'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <a href="/dashboard" className="text-blue-600 hover:text-blue-700">
              ← Back to Dashboard
            </a>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">New Assessment</h1>
          <p className="text-gray-600 mb-6">
            Choose from {frameworkList.length} compliance frameworks
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Search and Filter */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search frameworks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  !selectedCategory
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {Object.entries(categories).map(([key, { name, icon }]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {icon} {name}
                </button>
              ))}
            </div>
          </div>

          {/* Framework Grid */}
          <div className="grid gap-4 md:grid-cols-2 mb-8">
            {filteredFrameworks.map((framework) => (
              <div
                key={framework.id}
                onClick={() => setSelectedFramework(framework.id)}
                className={`p-5 bg-white rounded-lg border-2 transition-all cursor-pointer hover:border-blue-300 hover:shadow-md ${
                  selectedFramework === framework.id
                    ? 'border-blue-600 ring-2 ring-blue-100'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{getCategoryIcon(framework.category)}</span>
                      <h3 className="text-lg font-semibold text-gray-900 truncate">
                        {framework.shortName}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-2 truncate">{framework.name}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{framework.description}</p>
                    <div className="flex items-center gap-2 mt-3 flex-wrap">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {framework.controlCount} controls
                      </span>
                      {framework.regions && framework.regions.length > 0 && (
                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {framework.regions.join(', ')}
                        </span>
                      )}
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-3 ${
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

          {filteredFrameworks.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No frameworks found matching your search.
            </div>
          )}

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
