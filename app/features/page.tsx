import type { Metadata } from "next"
import { Target, Zap, BarChart3, Mail, Settings, Brain, Shield, Globe, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Features - Advanced B2B Lead Generation Tools | Datafabusa Solutions",
  description:
    "Discover our comprehensive lead generation features: precision targeting, automated outreach, real-time analytics, AI-powered scoring, and seamless CRM integrations.",
  keywords: "B2B lead generation features, automated outreach, lead scoring, CRM integration, sales acceleration tools",
}

export default function FeaturesPage() {
  const features = [
    {
      icon: Target,
      title: "Precision Targeting",
      description:
        "Advanced filters and AI-powered algorithms help you identify your ideal prospects based on industry, company size, role, technology stack, and behavioral patterns.",
      benefits: ["50+ targeting criteria", "Real-time data updates", "Custom audience building", "Lookalike modeling"],
      color: "text-emerald-600 bg-emerald-100",
    },
    {
      icon: Zap,
      title: "Automated Outreach",
      description:
        "Multi-channel campaigns that engage prospects across email, LinkedIn, phone, and direct mail with personalized messaging at scale.",
      benefits: ["Multi-channel sequences", "A/B testing", "Smart scheduling", "Response tracking"],
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Comprehensive reporting dashboards that track campaign performance, conversion rates, ROI, and provide actionable insights.",
      benefits: ["Live performance metrics", "Custom reporting", "ROI tracking", "Predictive analytics"],
      color: "text-purple-600 bg-purple-100",
    },
    {
      icon: Brain,
      title: "AI-Powered Lead Scoring",
      description:
        "Machine learning algorithms analyze prospect behavior and engagement to prioritize your hottest leads for maximum conversion.",
      benefits: ["Behavioral scoring", "Predictive modeling", "Auto-prioritization", "Intent signals"],
      color: "text-orange-600 bg-orange-100",
    },
    {
      icon: Mail,
      title: "Email Sequences",
      description:
        "Personalized email campaigns with dynamic content that nurture leads through your sales funnel automatically.",
      benefits: ["Dynamic personalization", "Drip campaigns", "Template library", "Deliverability optimization"],
      color: "text-red-600 bg-red-100",
    },
    {
      icon: Settings,
      title: "CRM Integration",
      description:
        "Seamlessly sync with Salesforce, HubSpot, Pipedrive, and 50+ other CRM platforms for unified lead management.",
      benefits: ["Two-way sync", "Custom field mapping", "Workflow automation", "Data enrichment"],
      color: "text-gray-600 bg-gray-100",
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Enterprise-grade security with SOC 2 compliance, GDPR compliance, and advanced encryption to protect your data.",
      benefits: ["SOC 2 certified", "GDPR compliant", "End-to-end encryption", "99.9% uptime SLA"],
      color: "text-green-600 bg-green-100",
    },
    {
      icon: Globe,
      title: "Global Database",
      description:
        "Access to 250M+ verified B2B contacts across 200+ countries with real-time data validation and enrichment.",
      benefits: ["250M+ contacts", "Real-time verification", "Global coverage", "Data enrichment"],
      color: "text-indigo-600 bg-indigo-100",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description:
        "Manage your campaigns, review leads, and track performance on-the-go with our native mobile applications.",
      benefits: ["iOS & Android apps", "Offline access", "Push notifications", "Mobile-optimized UI"],
      color: "text-pink-600 bg-pink-100",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600">
              {" "}
              Modern Sales Teams
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Everything you need to identify, engage, and convert your ideal prospects. Our comprehensive platform
            combines cutting-edge technology with proven sales methodologies.
          </p>
          <Button className="btn-primary text-lg px-8 py-4" asChild>
            <Link href="/contact">Start Free Trial</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`inline-flex p-4 rounded-xl ${feature.color} mb-6`}>
                  <feature.icon className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">See It in Action</h2>
          <p className="text-xl text-gray-600 mb-8">
            Watch how our platform can transform your lead generation process in just a few clicks.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="aspect-video bg-gradient-to-br from-emerald-100 to-blue-100 rounded-lg flex items-center justify-center">
              <Button size="lg" className="btn-primary">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="btn-primary" asChild>
              <Link href="/contact">Start Free Trial</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
