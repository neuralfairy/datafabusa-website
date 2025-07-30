import type { Metadata } from "next"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ - Lead Generation Questions Answered | Datafabusa Solutions",
  description:
    "Find answers to common questions about B2B lead generation, pricing, integrations, and our platform. Get the information you need to get started.",
  keywords: "lead generation FAQ, B2B sales questions, datafabusa solutions help, lead generation support",
}

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "How quickly can I start generating leads?",
          answer:
            "You can start generating leads within 24 hours of signing up. Our onboarding process takes just 5 minutes, and our team will help you set up your first campaign immediately.",
        },
        {
          question: "Do I need technical expertise to use the platform?",
          answer:
            "Not at all! Our platform is designed for sales professionals, not technical experts. We provide intuitive interfaces, pre-built templates, and comprehensive support to get you started quickly.",
        },
        {
          question: "What information do I need to provide during setup?",
          answer:
            "You'll need basic company information, your ideal customer profile, and access to your CRM system. Our team will guide you through the entire setup process.",
        },
      ],
    },
    {
      title: "Pricing & Plans",
      faqs: [
        {
          question: "Can I change my plan anytime?",
          answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences on your next invoice.",
        },
        {
          question: "What happens if I exceed my lead limit?",
          answer:
            "We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional leads at $0.10 per lead. We never cut off your access without warning.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, we'll provide a full refund, no questions asked.",
        },
        {
          question: "Are there any setup fees or hidden costs?",
          answer:
            "No setup fees, no hidden costs. Our pricing is completely transparent. The only additional costs might be for premium integrations or custom development work, which we'll discuss upfront.",
        },
      ],
    },
    {
      title: "Lead Quality & Data",
      faqs: [
        {
          question: "How do you ensure lead quality?",
          answer:
            "We use a combination of AI-powered filtering, real-time data verification, and human quality checks. Our leads are verified for accuracy and relevance before being delivered to you.",
        },
        {
          question: "Where does your lead data come from?",
          answer:
            "Our data comes from multiple verified sources including public databases, social media platforms, company websites, and our proprietary data collection methods. All data is GDPR and CCPA compliant.",
        },
        {
          question: "How often is your database updated?",
          answer:
            "Our database is updated in real-time. We continuously verify and refresh contact information, job titles, and company data to ensure maximum accuracy.",
        },
        {
          question: "What if I receive invalid contact information?",
          answer:
            "We guarantee 95% data accuracy. If you receive invalid contacts, we'll replace them at no charge and investigate the source to prevent future issues.",
        },
      ],
    },
    {
      title: "Integrations & Technical",
      faqs: [
        {
          question: "Which CRM systems do you integrate with?",
          answer:
            "We integrate with 50+ CRM platforms including Salesforce, HubSpot, Pipedrive, Zoho, Microsoft Dynamics, and many others. If you don't see your CRM listed, we likely support it or can build a custom integration.",
        },
        {
          question: "How does the CRM integration work?",
          answer:
            "Our integration is bi-directional, meaning data flows both ways. Leads are automatically synced to your CRM, and any updates you make in your CRM are reflected in our platform.",
        },
        {
          question: "Do you have an API?",
          answer:
            "Yes, we offer a comprehensive REST API that allows you to integrate our lead generation capabilities into your existing systems and workflows.",
        },
        {
          question: "Is my data secure?",
          answer:
            "Absolutely. We're SOC 2 certified and GDPR compliant. All data is encrypted in transit and at rest, and we follow industry best practices for data security.",
        },
      ],
    },
    {
      title: "Campaign Management",
      faqs: [
        {
          question: "Can I run multiple campaigns simultaneously?",
          answer:
            "Yes, you can run unlimited campaigns across different target audiences, industries, or geographic regions. Each campaign can have its own messaging and sequences.",
        },
        {
          question: "How do I track campaign performance?",
          answer:
            "Our dashboard provides real-time analytics including open rates, response rates, conversion rates, and ROI. You can also set up custom reports and automated alerts.",
        },
        {
          question: "Can I A/B test my campaigns?",
          answer:
            "Yes, our platform includes built-in A/B testing capabilities. You can test different subject lines, messaging, timing, and call-to-actions to optimize performance.",
        },
        {
          question: "What if my campaigns aren't performing well?",
          answer:
            "Our customer success team will work with you to analyze performance and optimize your campaigns. We also provide best practice guides and templates to improve results.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600">
              {" "}
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to common questions about our lead generation platform, pricing, and services. Can't find what
            you're looking for? Contact our team.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">{category.title}</h2>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <details key={faqIndex} className="group bg-gray-50 rounded-lg">
                    <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-100 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqCategories.flatMap((category) =>
              category.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            ),
          }),
        }}
      />

      {/* Contact CTA */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help. Get in touch and we'll provide personalized answers to your specific questions
            about lead generation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="btn-primary" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
