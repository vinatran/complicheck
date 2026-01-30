'use client'

import { useState } from 'react'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 99,
    description: 'Perfect for small businesses getting started',
    features: [
      '1 Assessment per month',
      'ISO 27001 framework',
      'Basic gap analysis',
      'PDF export',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 299,
    description: 'For growing companies serious about compliance',
    features: [
      '5 Assessments per month',
      'ISO 27001, NIST CSF',
      'Detailed gap analysis',
      'Remediation guidance',
      'Priority support',
      'Team collaboration',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: null,
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited assessments',
      'All frameworks',
      'Custom controls',
      'API access',
      'Dedicated account manager',
      'On-premise deployment',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

const faqs = [
  {
    question: 'How does the AI analysis work?',
    answer: 'Our AI analyzes your uploaded documents against ISO 27001 controls, looking for evidence of compliance such as policies, procedures, and records. It provides a confidence score and identifies gaps.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. All documents are encrypted in transit and at rest using AES-256 encryption. We are SOC 2 Type II certified and do not retain your documents after analysis.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. There are no long-term contracts. You can cancel your subscription at any time and continue using the service until the end of your billing period.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 14-day money-back guarantee. If you\'re not satisfied with your first assessment, contact support for a full refund.',
  },
]

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const getPrice = (price: number | null) => {
    if (price === null) return null
    if (billingPeriod === 'annual') {
      return Math.round(price * 0.8) // 20% discount
    }
    return price
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your compliance needs. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={billingPeriod === 'monthly' ? 'text-gray-900 font-semibold' : 'text-gray-500'}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(p => p === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-14 h-7 bg-blue-600 rounded-full transition-colors"
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  billingPeriod === 'annual' ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={billingPeriod === 'annual' ? 'text-gray-900 font-semibold' : 'text-gray-500'}>
              Annual
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center text-sm py-2 font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mt-2">{plan.description}</p>

                <div className="mt-6">
                  {getPrice(plan.price) !== null ? (
                    <>
                      <span className="text-5xl font-bold text-gray-900">
                        ${getPrice(plan.price)}
                      </span>
                      <span className="text-gray-500 ml-2">/month</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-gray-900">
                      Custom Pricing
                    </span>
                  )}
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full mt-8 py-4 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white border-t">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between font-semibold text-gray-900"
                >
                  {faq.question}
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      expandedFaq === i ? 'rotate-180' : ''
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to check your compliance?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Start your free assessment today. No credit card required.
          </p>
          <a
            href="/signup"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
          >
            Start Free Assessment →
          </a>
        </div>
      </div>
    </div>
  )
}
