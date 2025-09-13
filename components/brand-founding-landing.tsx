"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  Search,
  HandCoins,
  TrendingUp,
  Building2,
  Lightbulb,
  Users,
  DollarSign,
  Calendar,
  Lock,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function BrandFoundingLanding() {
  const calendlyUrl = "https://calendly.com/akosuke01/1-hour-meeting"

  const [showAll, setShowAll] = useState(false)

  const allOpportunities = [
    {
      id: "sake-brewery",
      image: "https://github.com/kosuke-eth/Brand-Founding/blob/main/public/sake-brand.jpg?raw=true",
      badge: "Business / Traditional Craft",
      title: "Niigata Sake Brewery Revival Project",
      apy: "7.8%",
      term: "24 Months",
      goal: "$120,000",
      progress: 100,
      security: "Business Revenue-Backed",
      link: "/projects/sake-brewery",
    },
    {
      id: "animation-ip",
      image: "https://github.com/kosuke-eth/Brand-Founding/blob/main/public/anime.jpg?raw=true",
      badge: "Intellectual Property / Animation",
      title: "Animation Original Pictures",
      apy: "12.5%",
      term: "36 Months",
      goal: "$65,000",
      progress: 100,
      security: "IP License-Backed",
      link: "/projects/animation-ip",
    },
    {
      id: "wagyu-farm",
      image: "https://github.com/kosuke-eth/Brand-Founding/blob/main/public/wagyu.jpg?raw=true",
      badge: "Business / Japan",
      title: "Kobe beef Farmers",
      apy: "6.2%",
      term: "48 Months",
      goal: "$380,000",
      progress: 100,
      security: "Property-Backed",
      link: "/projects/wagyu-farm",
    },
    {
      id: "tech-startup",
      image: "https://github.com/kosuke-eth/Brand-Founding/blob/main/public/anime.jpg?raw=true",
      badge: "Technology / Startup",
      title: "AI Healthcare Platform",
      apy: "15.2%",
      term: "24 Months",
      goal: "$250,000",
      progress: 67,
      security: "Revenue-Backed",
      link: "/projects/tech-startup",
    },
    {
      id: "real-estate",
      image: "https://github.com/kosuke-eth/Brand-Founding/blob/main/public/sake-brand.jpg?raw=true",
      badge: "Real Estate / Commercial",
      title: "Tokyo Commercial Property",
      apy: "8.5%",
      term: "60 Months",
      goal: "$500,000",
      progress: 45,
      security: "Property-Backed",
      link: "/projects/real-estate",
    },
    {
      id: "renewable-energy",
      image: "https://github.com/kosuke-eth/Brand-Founding/blob/main/public/wagyu.jpg?raw=true",
      badge: "Energy / Renewable",
      title: "Solar Farm Development",
      apy: "9.8%",
      term: "36 Months",
      goal: "$750,000",
      progress: 23,
      security: "Asset-Backed",
      link: "/projects/renewable-energy",
    },
    {
      id: "fashion-brand",
      image: "https://github.com/kosuke-eth/Brand-Founding/blob/main/public/anime.jpg?raw=true",
      badge: "Fashion / Luxury",
      title: "Sustainable Fashion Brand",
      apy: "11.3%",
      term: "30 Months",
      goal: "$180,000",
      progress: 78,
      security: "Brand-Backed",
      link: "/projects/fashion-brand",
    },
    {
      id: "gaming-ip",
      image: "https://github.com/kosuke-eth/Brand-Founding/blob/main/public/sake-brand.jpg?raw=true",
      badge: "Gaming / IP",
      title: "Mobile Game IP Rights",
      apy: "14.7%",
      term: "42 Months",
      goal: "$320,000",
      progress: 89,
      security: "IP-Backed",
      link: "/projects/gaming-ip",
    },
  ]

  const displayedOpportunities = showAll ? allOpportunities : allOpportunities.slice(0, 6)

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/504BCA26-7471-4676-A9CC-0F2FED0B601A_4_5005_c-epQEdGpGZ1eqg4HJYk6enT05PDKqAQ.jpeg"
                alt="Brand Founding Logo"
                className="h-12 w-auto"
              />
            </div>
            {/* Navigation */}
            <div className="flex items-center space-x-8">
              <nav className="hidden lg:flex items-center space-x-8">
                <Link href="#opportunities" className="text-gray-600 hover:text-black transition-colors font-medium">
                  Opportunities
                </Link>
                <Link href="#how-it-works" className="text-gray-600 hover:text-black transition-colors font-medium">
                  How It Works
                </Link>
                <Link href="#for-investors" className="text-gray-600 hover:text-black transition-colors font-medium">
                  For IP & Businesses
                </Link>
              </nav>
              <Button asChild className="bg-black hover:bg-gray-800 text-white shadow-lg">
                <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                  Book a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://photo53.com/img/kiyomizudera21.jpg')",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Invest in the Future of
            <br />
            Business & Creativity
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The premier platform for fractional investment in innovative businesses and intellectual property.
          </p>
          <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-4 shadow-lg">
            <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              Book a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
      {/* Investment Opportunities Section */}
      <section id="opportunities" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Curated Investment Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover vetted, high-potential investments across diverse sectors and asset classes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {displayedOpportunities.map((opportunity) => (
              <Card
                key={opportunity.id}
                className="border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={opportunity.image || "/placeholder.svg"}
                    alt={opportunity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gray-800 text-white">{opportunity.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl text-black">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Expected Return (APY)</div>
                      <div className="font-bold text-black text-lg">{opportunity.apy}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Term</div>
                      <div className="font-bold text-black">{opportunity.term}</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Funding Goal</span>
                      <span className="font-bold text-black">{opportunity.goal}</span>
                    </div>
                    <Progress value={opportunity.progress} className="h-2" />
                    <div className="text-xs text-gray-500 mt-1">{opportunity.progress}% funded</div>
                  </div>
                  <div className="pt-2">
                    <div className="text-sm text-gray-600 mb-1">Security</div>
                    <div className="flex items-center text-sm font-medium text-black">
                      <Shield className="w-4 h-4 mr-1 text-gray-600" />
                      {opportunity.security}
                    </div>
                  </div>
                  <Button asChild className="w-full bg-black hover:bg-gray-800 text-white mt-6 shadow-lg">
                    <Link href={opportunity.link}>View Project Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          {allOpportunities.length > 6 && (
            <div className="text-center mt-12">
              <Button
                onClick={() => setShowAll(!showAll)}
                variant="outline"
                size="lg"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3"
              >
                {showAll ? "Show Less" : `Show More (${allOpportunities.length - 6} more)`}
                <ArrowRight className={`ml-2 w-5 h-5 transition-transform ${showAll ? "rotate-180" : ""}`} />
              </Button>
            </div>
          )}
        </div>
      </section>
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">A Simple, Secure Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three straightforward steps to start your investment journey with Brand Founding.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">1. Discover</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover and vet opportunities in innovative businesses and IP through our curated marketplace.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">2. Inquire</h3>
              <p className="text-gray-600 leading-relaxed">
                Use the inquiry button on any opportunity to schedule a direct consultation with our team.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <HandCoins className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">3. Invest</h3>
              <p className="text-gray-600 leading-relaxed">
                Following a consultation, we facilitate a secure investment process with clear terms.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Dual Audience Section */}
      <section id="for-investors" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* For Investors */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6">For Investors</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Diversify beyond traditional markets. Access unique, high-potential opportunities in growing businesses, creative IP, and select real estate. All opportunities are presented with transparent returns and professional oversight.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <DollarSign className="w-5 h-5 text-gray-700 mr-3" />
                  Competitive returns with clear terms
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-gray-700 mr-3" />
                  Vetted opportunities with security backing
                </li>
                <li className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-gray-700 mr-3" />
                  Portfolio diversification beyond traditional assets
                </li>
              </ul>
            </div>
            {/* For IP & Businesses */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6">For IP & Businesses</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Unlock the value of your assets for future growth. Secure new funding by leveraging your business revenue stream, intellectual property (IP), or real estate holdings. Gain fast access to the growth capital you need without selling equity or losing control of your valuable assets.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <Building2 className="w-5 h-5 text-gray-700 mr-3" />
                  Retain full ownership and control
                </li>
                <li className="flex items-center">
                  <Lock className="w-5 h-5 text-gray-700 mr-3" />
                  No equity dilution required
                </li>
                <li className="flex items-center">
                  <HandCoins className="w-5 h-5 text-gray-700 mr-3" />
                  Fast access to growth capital
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Invest or Unlock Your Asset's Value?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Schedule a general consultation to explore how Brand Founding can meet your financial goals.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-4 shadow-lg">
            <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              Book a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex items-center space-x-6 mb-4 md:mb-0">
              <Link href="#opportunities" className="text-gray-300 hover:text-white transition-colors">
                Opportunities
              </Link>
              <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="#for-investors" className="text-gray-300 hover:text-white transition-colors">
                For IP & Businesses
              </Link>
            </nav>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 Brand Founding. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-2">
              This is a sample website. All investment opportunities shown are for illustrative purposes only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
