'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser, signOut } from '@/lib/auth'
import { supabase } from '@/lib/supabase'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [assessments, setAssessments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    const currentUser = await getCurrentUser()
    
    if (!currentUser) {
      router.push('/login')
      return
    }

    setUser(currentUser)
    loadAssessments(currentUser.id)
  }

  async function loadAssessments(userId: string) {
    const { data } = await supabase
      .from('assessments')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    setAssessments(data || [])
    setLoading(false)
  }

  async function handleSignOut() {
    await signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">{user?.email}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg"
          >
            Sign Out
          </button>
        </div>

        <div className="mb-8">
          <a
            href="/assessment/new"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            + New Assessment
          </a>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold">Your Assessments</h2>
          </div>

          {assessments.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-500">
              <p className="mb-4">No assessments yet. Create your first one!</p>
              <a
                href="/assessment/new"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Start Assessment →
              </a>
            </div>
          ) : (
            <div className="divide-y">
              {assessments.map((assessment) => (
                <div key={assessment.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-lg">
                        {assessment.framework.toUpperCase()} Assessment
                      </h3>
                      <p className="text-sm text-gray-500">
                        Created: {new Date(assessment.created_at).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        Status: <span className="capitalize">{assessment.status}</span>
                      </p>
                    </div>
                    <div className="text-right">
                      {assessment.overall_score > 0 ? (
                        <div className="text-3xl font-bold text-blue-600">
                          {assessment.overall_score}%
                        </div>
                      ) : (
                        <div className="text-sm text-gray-400">Processing...</div>
                      )}
                      <a
                        href={`/assessment/${assessment.id}`}
                        className="text-blue-600 hover:text-blue-700 text-sm font-semibold mt-2 inline-block"
                      >
                        View Results →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}