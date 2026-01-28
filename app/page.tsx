export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Know Your ISO 27001 Compliance Score in 24 Hours
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Self-assessment for Vietnamese SMEs. Upload your documents, get instant compliance readiness score. No credit card required.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/signup" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
              Start Free Assessment
            </a>
            <a href="/login" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-blue-600 hover:bg-blue-50 transition">
              Sign In
            </a>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload Documents</h3>
            <p className="text-gray-600">Upload your policies, procedures, and evidence documents</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
            <p className="text-gray-600">Our AI analyzes your documents against ISO 27001 controls</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Your Score</h3>
            <p className="text-gray-600">See your compliance percentage and gap analysis</p>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-gray-500 mb-4">Trusted by Vietnamese startups and SMEs</p>
          <div className="flex justify-center gap-8 opacity-50">
            <div className="text-2xl font-bold">🏢</div>
            <div className="text-2xl font-bold">🚀</div>
            <div className="text-2xl font-bold">💼</div>
          </div>
        </div>
      </div>
    </div>
  )
}