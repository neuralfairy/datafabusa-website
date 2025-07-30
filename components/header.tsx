"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DF</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Datafabusa</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/contact">Get Pricing</Link>
            </Button>
            <Button className="btn-primary" asChild>
              <Link href="/contact">Start Free Trial</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Home
              </Link>
              <Link href="/features" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Contact
              </Link>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">Get Pricing</Link>
                </Button>
                <Button className="btn-primary w-full" asChild>
                  <Link href="/contact">Start Free Trial</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
