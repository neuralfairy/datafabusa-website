import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales",
      company: "TechCorp Solutions",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Datafabusa transformed our lead generation process. We saw a 300% increase in qualified leads within the first month. The targeting capabilities are incredible.",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Growth Dynamics",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "The ROI has been outstanding. We've generated over $2M in pipeline value using their platform. The automation features save us 20+ hours per week.",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder & CEO",
      company: "StartupX",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "As a startup, we needed cost-effective lead generation. Datafabusa delivered quality leads that converted at 3x our previous rate. Game changer!",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See how businesses like yours are accelerating growth with our lead
            generation platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative">
              <Quote className="h-8 w-8 text-emerald-500 mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-emerald-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-6 py-3 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-700 font-medium">4.9/5 from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
