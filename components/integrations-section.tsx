export function IntegrationsSection() {
  const integrations = [
    { name: "Salesforce", logo: "/placeholder.svg?height=40&width=120" },
    { name: "HubSpot", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Pipedrive", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Mailchimp", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Slack", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Zapier", logo: "/placeholder.svg?height=40&width=120" },
    { name: "LinkedIn", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Microsoft", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with your existing tools and workflows. Our platform integrates with 50+ popular CRM, marketing, and
            sales tools.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img
                src={integration.logo || "/placeholder.svg"}
                alt={`${integration.name} integration`}
                className="max-h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Don't see your tool? We likely support it.</p>
          <a href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium">
            Contact us about custom integrations →
          </a>
        </div>
      </div>
    </section>
  )
}
