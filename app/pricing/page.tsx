import type { Metadata } from "next"
import { Check, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing - Transparent Lead Generation Plans | Datafabusa Solutions",
  description:
    "Choose the perfect lead generation plan for your business. Transparent pricing with no hidden fees. Starter, Professional, and Enterprise plans available.",
  keywords: "lead generation pricing, B2B sales tools pricing, transparent pricing, lead generation plans",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: 99,
      description: "Perfect for small teams getting started with lead generation",
      features: [
        "1,000 leads per month",
        "Basic targeting filters",
        "Email sequences",
        "CRM integration (3 platforms)",
        "Basic analytics",
        "Email support",
        "Lead scoring",
        "Template library",
      ],
      notIncluded: ["Advanced AI targeting", "Multi-channel outreach", "Custom integrations", "Dedicated support"],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: 299,
      description: "Ideal for growing sales teams that need advanced features",
      features: [
        "5,000 leads per month",
        "Advanced AI targeting",
        "Multi-channel outreach",
        "CRM integration (10+ platforms)",
        "Advanced analytics & reporting",
        "Priority support",
        "A/B testing",
        "Custom sequences",
        "Lead enrichment",
        "Team collaboration",
        "API access",
      ],
      notIncluded: ["Unlimited leads", "Custom integrations", "Dedicated CSM"],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex requirements",
      features: [
        "Unlimited leads",
        "Custom AI models",
        "White-label solution",
        "Custom integrations",
        "Advanced security features",
        "Dedicated customer success manager",
        "Custom reporting",
        "SLA guarantees",
        "Training & onboarding",
        "Priority feature requests",
        "Custom workflows",
        "Advanced permissions",
      ],
      notIncluded: [],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
    },
    {
      question: "What happens if I exceed my lead limit?",
      answer:
        "We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional leads at $0.10 per lead.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll provide a full refund.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any plan. We include free onboarding and training to help you get started quickly.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600">
              {" "}
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that fits your business needs. All plans include a 14-day free trial with no credit card
            required. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 p-8 ${plan.popular ? "border-emerald-500 shadow-xl scale-105" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    {typeof plan.price === "number" ? (
                      <>
                        <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                        <span className="text-gray-600">/month</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 opacity-50">
                      <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className={`w-full text-lg py-3 ${plan.popular ? "btn-primary" : "btn-secondary"}`} asChild>
                  <Link href="/contact">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All plans include:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
              <span>✓ 14-day free trial</span>
              <span>✓ No setup fees</span>
              <span>✓ Cancel anytime</span>
              <span>✓ 30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Have questions? We have answers.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Our Sales Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies already generating quality leads with our platform.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4" asChild>
            <Link href="/contact">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
