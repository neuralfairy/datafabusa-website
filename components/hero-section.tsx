import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, TrendingUp, Users, Target } from "lucide-react"

export function HeroSection() {
  return (
    <section className="gradient-bg section-padding min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                #1 Lead Generation Platform
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Generate High-Quality
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600">
                {" "}
                B2B Leads
              </span>{" "}
              That Convert
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Accelerate your sales growth with our advanced lead generation tools. Target the right prospects, at the
              right time, with the right message.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button className="btn-primary text-lg px-8 py-4" asChild>
                <Link href="/contact">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 bg-transparent" asChild>
                <Link href="/features">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">500%</div>
                <div className="text-sm text-gray-600">ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">10K+</div>
                <div className="text-sm text-gray-600">Leads Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Lead Generation Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-8 w-8 text-emerald-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Conversion Rate</div>
                        <div className="text-sm text-gray-600">This month</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-emerald-600">24.5%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Users className="h-8 w-8 text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">New Leads</div>
                        <div className="text-sm text-gray-600">Today</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">147</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Target className="h-8 w-8 text-purple-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Qualified Leads</div>
                        <div className="text-sm text-gray-600">This week</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">89</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-3 rounded-full shadow-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg">
                <Users className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
