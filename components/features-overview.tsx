import { Target, Zap, BarChart3, Users, Mail, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeaturesOverview() {
  const features = [
    {
      icon: Target,
      title: "Precision Targeting",
      description:
        "Advanced filters to identify your ideal prospects based on industry, company size, role, and behavior.",
      color: "text-emerald-600 bg-emerald-100",
    },
    {
      icon: Zap,
      title: "Automated Outreach",
      description: "Multi-channel campaigns that engage prospects across email, LinkedIn, and phone automatically.",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track campaign performance, conversion rates, and ROI with comprehensive reporting dashboards.",
      color: "text-purple-600 bg-purple-100",
    },
    {
      icon: Users,
      title: "Lead Scoring",
      description: "AI-powered scoring system that prioritizes your hottest prospects for maximum conversion.",
      color: "text-orange-600 bg-orange-100",
    },
    {
      icon: Mail,
      title: "Email Sequences",
      description: "Personalized email campaigns that nurture leads through your sales funnel automatically.",
      color: "text-red-600 bg-red-100",
    },
    {
      icon: Settings,
      title: "CRM Integration",
      description: "Seamlessly sync with Salesforce, HubSpot, Pipedrive, and 50+ other CRM platforms.",
      color: "text-gray-600 bg-gray-100",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Generate Quality Leads
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines advanced targeting, automation, and analytics to help you identify,
            engage, and convert your ideal prospects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-primary text-lg px-8 py-4" asChild>
            <Link href="/features">Explore All Features</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
