import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog - Lead Generation Insights & Best Practices | Datafabusa Solutions",
  description:
    "Expert insights on B2B lead generation, sales acceleration, and growth strategies. Learn from industry leaders and improve your sales performance.",
  keywords: "lead generation blog, B2B sales tips, sales acceleration insights, lead generation best practices",
}

export default function BlogPage() {
  const featuredPost = {
    title: "The Complete Guide to B2B Lead Generation in 2024",
    excerpt:
      "Discover the latest strategies, tools, and techniques that top-performing sales teams use to generate high-quality leads and accelerate growth.",
    image: "/placeholder.svg?height=400&width=800",
    author: "Sarah Mitchell",
    date: "2024-01-15",
    readTime: "12 min read",
    category: "Strategy",
  }

  const blogPosts = [
    {
      title: "How AI is Revolutionizing Lead Scoring and Qualification",
      excerpt:
        "Learn how artificial intelligence is transforming the way businesses identify and prioritize their most valuable prospects.",
      image: "/placeholder.svg?height=200&width=400",
      author: "David Chen",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Technology",
    },
    {
      title: "10 Email Sequences That Convert Prospects into Customers",
      excerpt:
        "Proven email templates and sequences that nurture leads through your sales funnel and drive conversions.",
      image: "/placeholder.svg?height=200&width=400",
      author: "Maria Rodriguez",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Email Marketing",
    },
    {
      title: "Multi-Channel Outreach: The Key to Modern Lead Generation",
      excerpt:
        "Why single-channel approaches fail and how to create integrated campaigns across email, LinkedIn, and phone.",
      image: "/placeholder.svg?height=200&width=400",
      author: "James Wilson",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Strategy",
    },
    {
      title: "ROI Measurement: Proving the Value of Your Lead Generation",
      excerpt: "Essential metrics and KPIs every sales leader should track to demonstrate lead generation ROI.",
      image: "/placeholder.svg?height=200&width=400",
      author: "Sarah Mitchell",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Analytics",
    },
    {
      title: "GDPR and Lead Generation: Staying Compliant in 2024",
      excerpt: "Navigate data privacy regulations while maintaining effective lead generation practices.",
      image: "/placeholder.svg?height=200&width=400",
      author: "David Chen",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Compliance",
    },
    {
      title: "Building High-Converting Landing Pages for Lead Capture",
      excerpt: "Design principles and optimization techniques that turn visitors into qualified leads.",
      image: "/placeholder.svg?height=200&width=400",
      author: "Maria Rodriguez",
      date: "2023-12-25",
      readTime: "11 min read",
      category: "Conversion",
    },
  ]

  const categories = ["All", "Strategy", "Technology", "Email Marketing", "Analytics", "Compliance", "Conversion"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Lead Generation
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600">
              {" "}
              Insights
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Expert strategies, proven tactics, and industry insights to help you generate more qualified leads and
            accelerate your business growth.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="btn-primary w-fit" asChild>
                    <Link href={`/blog/${featuredPost.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Latest Articles</h2>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-emerald-500 text-white"
                      : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <Link
                      href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center space-x-1"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with Lead Generation Insights</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest strategies, tips, and industry insights delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3">Subscribe</Button>
          </div>
          <p className="text-sm opacity-75 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
