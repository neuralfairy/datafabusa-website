import { Shield, Award, CheckCircle, Star } from "lucide-react"

export function TrustBadges() {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-600">Trusted by 500+ companies worldwide</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="flex flex-col items-center text-center">
            <div className="bg-emerald-100 p-3 rounded-full mb-3">
              <Shield className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="text-sm font-medium text-gray-900">SOC 2 Certified</div>
            <div className="text-xs text-gray-600">Enterprise Security</div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-sm font-medium text-gray-900">Industry Leader</div>
            <div className="text-xs text-gray-600">G2 Top Performer</div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-purple-100 p-3 rounded-full mb-3">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-sm font-medium text-gray-900">GDPR Compliant</div>
            <div className="text-xs text-gray-600">Data Protection</div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 p-3 rounded-full mb-3">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="text-sm font-medium text-gray-900">4.9/5 Rating</div>
            <div className="text-xs text-gray-600">Customer Reviews</div>
          </div>
        </div>
      </div>
    </section>
  )
}
