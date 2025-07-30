"use client"

import { useState } from "react"
import { Calculator, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ROICalculator() {
  const [leads, setLeads] = useState(100)
  const [conversionRate, setConversionRate] = useState(5)
  const [dealValue, setDealValue] = useState(5000)

  const monthlyLeads = leads
  const conversions = (monthlyLeads * conversionRate) / 100
  const monthlyRevenue = conversions * dealValue
  const annualRevenue = monthlyRevenue * 12
  const roi = ((annualRevenue - 12000) / 12000) * 100 // Assuming $1000/month cost

  return (
    <section className="section-padding gradient-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Calculator className="h-8 w-8 text-emerald-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ROI Calculator</h2>
            </div>

            <p className="text-xl text-gray-600 mb-8">
              See how much revenue you could generate with our lead generation platform. Adjust the parameters below to
              match your business.
            </p>

            <div className="space-y-6">
              <div>
                <Label htmlFor="leads" className="text-base font-medium text-gray-700">
                  Monthly Leads Target
                </Label>
                <Input
                  id="leads"
                  type="number"
                  value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="mt-2 text-lg"
                />
              </div>

              <div>
                <Label htmlFor="conversion" className="text-base font-medium text-gray-700">
                  Conversion Rate (%)
                </Label>
                <Input
                  id="conversion"
                  type="number"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="mt-2 text-lg"
                />
              </div>

              <div>
                <Label htmlFor="deal-value" className="text-base font-medium text-gray-700">
                  Average Deal Value ($)
                </Label>
                <Input
                  id="deal-value"
                  type="number"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="mt-2 text-lg"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border">
            <div className="text-center mb-8">
              <TrendingUp className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Potential Results</h3>
              <p className="text-gray-600">Based on your inputs</p>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
                <span className="text-gray-700 font-medium">Monthly Conversions</span>
                <span className="text-2xl font-bold text-emerald-600">{conversions.toFixed(0)}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                <span className="text-gray-700 font-medium">Monthly Revenue</span>
                <span className="text-2xl font-bold text-blue-600">${monthlyRevenue.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                <span className="text-gray-700 font-medium">Annual Revenue</span>
                <span className="text-2xl font-bold text-purple-600">${annualRevenue.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
                <span className="text-gray-700 font-medium">ROI</span>
                <span className="text-3xl font-bold text-green-600">{roi.toFixed(0)}%</span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button className="btn-primary w-full text-lg py-3">Get Started Today</Button>
              <p className="text-sm text-gray-500 mt-2">Start your free trial and see real results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
