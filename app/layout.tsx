import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CompliCheck - ISO 27001 Compliance Assessment',
  description: 'AI-powered ISO 27001 compliance assessment for Vietnamese SMEs. Upload your documents and get instant compliance readiness score.',
  keywords: 'ISO 27001, compliance, security assessment, Vietnam, SME, startup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
                C
              </div>
              <span className="text-xl font-bold text-gray-900">CompliCheck</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium">
                How It Works
              </a>
              <a href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium">
                Pricing
              </a>
              <a href="/login" className="text-gray-600 hover:text-gray-900 font-medium">
                Sign In
              </a>
              <a
                href="/signup"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            </nav>
            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t bg-gray-900 text-gray-400">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold">
                    C
                  </div>
                  <span className="text-lg font-bold text-white">CompliCheck</span>
                </div>
                <p className="text-sm mb-4 max-w-sm">
                  AI-powered ISO 27001 compliance assessment platform built for Vietnamese SMEs and startups.
                </p>
                <p className="text-sm">Made with ❤️ in Vietnam 🇻🇳</p>
              </div>

              {/* Product */}
              <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/pricing" className="hover:text-white transition">Pricing</a></li>
                  <li><a href="/signup" className="hover:text-white transition">Get Started</a></li>
                  <li><a href="/login" className="hover:text-white transition">Sign In</a></li>
                </ul>
              </div>

              {/* Frameworks */}
              <div>
                <h4 className="text-white font-semibold mb-4">Frameworks</h4>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-blue-400">ISO 27001</span></li>
                  <li><span className="text-gray-500">NIST CSF (Coming Soon)</span></li>
                  <li><span className="text-gray-500">SOC 2 (Coming Soon)</span></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm">© 2026 CompliCheck. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
                <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
