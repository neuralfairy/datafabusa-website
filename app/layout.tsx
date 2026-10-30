import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Datafabusa Solutions - B2B Lead Generation & Sales Acceleration",
  description:
    "Generate high-quality, targeted B2B leads using advanced tools. Accelerate your sales with our proven lead generation strategies and CRM integrations.",
  keywords: "B2B lead generation, targeted prospecting, sales acceleration, lead generation, B2B sales tools",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Datafabusa Solutions - B2B Lead Generation & Sales Acceleration",
    description: "Generate high-quality, targeted B2B leads using advanced tools.",
    url: "https://datafabusa.com",
    siteName: "Datafabusa Solutions",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Datafabusa Solutions",
              url: "https://datafabusa.com",
              logo: "https://datafabusa.com/logo.png",
              description: "B2B Lead Generation and Sales Acceleration Solutions",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Raleigh",
                addressRegion: "NC",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-919-555-0123",
                contactType: "sales",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
