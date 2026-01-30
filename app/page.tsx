export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-500/30 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 AI-Powered Compliance Assessment
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Know Your ISO 27001 Compliance Score in Minutes
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Upload your security documents and get an instant AI-powered assessment against ISO 27001 controls. Built for Vietnamese SMEs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
              >
                Start Free Assessment →
              </a>
              <a
                href="/login"
                className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/50 hover:bg-white/10 transition"
              >
                Sign In
              </a>
            </div>
            <p className="mt-6 text-blue-200 text-sm">No credit card required • Free tier available</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your compliance assessment in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Upload Documents</h3>
              <p className="text-gray-600">
                Upload your security policies, procedures, and evidence documents (PDF, Word, Excel)
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes your documents against all ISO 27001 Annex A controls
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Results</h3>
              <p className="text-gray-600">
                Receive your compliance score with detailed gap analysis and recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CompliCheck?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Results</h3>
              <p className="text-gray-600 text-sm">Get your assessment results in minutes, not weeks</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-gray-600 text-sm">GPT-4 technology for accurate document analysis</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Detailed Reports</h3>
              <p className="text-gray-600 text-sm">Control-by-control breakdown with evidence mapping</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🇻🇳</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Built for Vietnam</h3>
              <p className="text-gray-600 text-sm">Designed for Vietnamese SMEs and startups</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Check Your Compliance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your free assessment today and know exactly where you stand with ISO 27001
          </p>
          <a
            href="/signup"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
          >
            Get Started Free →
          </a>
        </div>
      </section>
    </div>
  )
}
