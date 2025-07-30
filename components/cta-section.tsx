import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to 10X Your Lead Generation?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join 500+ companies already generating high-quality leads with our platform. Start your free trial today and
          see results in 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>Setup in 5 minutes</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4" asChild>
            <Link href="/contact">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-4 bg-transparent"
            asChild
          >
            <Link href="/contact">Book a Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
