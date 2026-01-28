import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CompliCheck - ISO 27001 Compliance Assessment',
  description: 'Know your compliance readiness in 5 minutes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Header */}
        <header className="border-b bg-white">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
              CompliCheck
            </a>
            <nav className="flex gap-6">
              <a href="/pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <a href="/login" className="text-gray-600 hover:text-gray-900">
                Sign In
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="border-t bg-gray-50 mt-24">
          <div className="container mx-auto px-4 py-8 text-center text-gray-600">
            <p>© 2026 CompliCheck. Made in Vietnam 🇻🇳</p>
          </div>
        </footer>
      </body>
    </html>
  )
}