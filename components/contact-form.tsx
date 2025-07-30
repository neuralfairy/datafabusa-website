"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center">
        <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          We've received your message and will get back to you within 24 hours. In the meantime, feel free to explore
          our resources or give us a call.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Free Trial</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              required
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Business Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="company">Company Name *</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="interest">I'm interested in *</Label>
          <Select onValueChange={(value) => handleInputChange("interest", value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select your interest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="free-trial">Starting a free trial</SelectItem>
              <SelectItem value="demo">Scheduling a demo</SelectItem>
              <SelectItem value="pricing">Getting pricing information</SelectItem>
              <SelectItem value="integration">Custom integration</SelectItem>
              <SelectItem value="enterprise">Enterprise solution</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder="Tell us about your lead generation goals..."
            className="mt-1"
            rows={4}
          />
        </div>

        <div className="text-sm text-gray-600">
          <p>
            By submitting this form, you agree to our{" "}
            <a href="/privacy" className="text-emerald-600 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-emerald-600 hover:underline">
              Terms of Service
            </a>
            .
          </p>
        </div>

        <Button type="submit" className="btn-primary w-full text-lg py-3">
          Get Started Now
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>✓ No credit card required • ✓ 14-day free trial • ✓ Setup in 5 minutes</p>
      </div>
    </div>
  )
}
