import type { Metadata } from "next"
import { Users, Award, Target, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - Expert B2B Lead Generation Team | Datafabusa Solutions",
  description:
    "Learn about Datafabusa Solutions team of lead generation experts. Based in Raleigh, NC, we help businesses accelerate growth through targeted B2B lead generation.",
  keywords: "about datafabusa solutions, lead generation experts, Raleigh NC, B2B sales team, company mission",
}

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former VP of Sales at Fortune 500 company with 15+ years in B2B sales and lead generation.",
    },
    {
      name: "David Chen",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ex-Google engineer specializing in AI and machine learning for sales automation and lead scoring.",
    },
    {
      name: "Maria Rodriguez",
      role: "VP of Customer Success",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Customer success expert who has helped 500+ companies optimize their lead generation processes.",
    },
    {
      name: "James Wilson",
      role: "Head of Sales",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sales leader with proven track record of building high-performing sales teams and processes.",
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "10M+", label: "Leads Generated", icon: Target },
    { number: "300%", label: "Average ROI Increase", icon: TrendingUp },
    { number: "5", label: "Years of Excellence", icon: Award },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600">
              {" "}
              Datafabusa Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're on a mission to revolutionize B2B lead generation by combining cutting-edge technology with proven
            sales methodologies to help businesses accelerate their growth.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Datafabusa Solutions, we believe that every business deserves access to high-quality leads that drive
                real growth. Founded in 2019 in Raleigh, NC, we've helped over 500 companies transform their sales
                processes and achieve unprecedented results.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our platform combines advanced AI technology with human expertise to deliver targeted, qualified leads
                that convert. We're not just a lead generation company – we're your growth partner.
              </p>
              <Button className="btn-primary" asChild>
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Datafabusa Solutions team"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">Results that speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team combines decades of sales, technology, and customer success expertise to deliver
              exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-emerald-600 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Results-Driven</h3>
              <p className="text-gray-600">
                We measure our success by your success. Every strategy, every campaign, every lead is focused on driving
                measurable results for your business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer-Centric</h3>
              <p className="text-gray-600">
                Your success is our priority. We work as an extension of your team, providing personalized support and
                strategies tailored to your unique needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously invest in cutting-edge technology and methodologies to stay ahead of the curve and
                deliver superior results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help accelerate your business growth with our proven lead generation strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
              asChild
            >
              <Link href="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
