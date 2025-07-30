import { HeroSection } from "@/components/hero-section"
import { FeaturesOverview } from "@/components/features-overview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ROICalculator } from "@/components/roi-calculator"
import { CTASection } from "@/components/cta-section"
import { TrustBadges } from "@/components/trust-badges"
import { IntegrationsSection } from "@/components/integrations-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustBadges />
      <FeaturesOverview />
      <ROICalculator />
      <TestimonialsSection />
      <IntegrationsSection />
      <CTASection />
    </div>
  )
}
