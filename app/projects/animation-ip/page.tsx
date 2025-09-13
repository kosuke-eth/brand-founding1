import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Calendar, MapPin, Palette } from "lucide-react"
import Link from "next/link"
import PaymentForm from "@/components/payment-form"

export default function AnimationIPProject() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-gray-600 hover:text-black transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Opportunities
            </Link>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/504BCA26-7471-4676-A9CC-0F2FED0B601A_4_5005_c-epQEdGpGZ1eqg4HJYk6enT05PDKqAQ.jpeg"
              alt="Brand Founding Logo"
              className="h-12 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="relative h-96 overflow-hidden rounded-lg mb-6">
                <img
                  src="https://github.com/kosuke-eth/Brand-Founding/blob/main/public/anime.jpg?raw=true"
                  alt="Animation Original Pictures"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-black text-white">Intellectual Property / Animation</Badge>
                <Badge variant="outline" className="text-black border-black">
                  Funding
                </Badge>
              </div>
              <h1 className="text-4xl font-bold text-black mb-6">Animation Original Pictures Investment</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Invest in a curated collection of original animation artwork from acclaimed Japanese anime productions.
                These rare pieces appreciate in value while generating licensing revenue from exhibitions, merchandise,
                and digital rights.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-gray-600 text-sm">Expected Return (APY)</div>
                  <div className="font-bold text-black text-2xl">12.5%</div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm">Investment Term</div>
                  <div className="font-bold text-black text-2xl">36 Months</div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Funding Progress</span>
                  <span className="font-bold text-black">$65,000 / $65,000</span>
                </div>
                <Progress value={100} className="h-3" />
                <div className="text-xs text-gray-500 mt-1">100% funded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-black mb-8">Project Overview</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Investment Opportunity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    This unique investment opportunity focuses on acquiring original animation artwork (genga) from
                    popular anime series. These hand-drawn pieces are increasingly rare and valuable, with strong
                    appreciation potential and multiple revenue streams through licensing and exhibitions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Revenue Streams</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Licensing fees for exhibitions and museums
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Digital rights licensing for NFTs and online galleries
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Merchandise licensing (prints, books, collectibles)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Appreciation in collector market value
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Collection Details</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-black mb-2">Artwork Period</h4>
                      <p className="text-sm text-gray-600">1990s-2010s Golden Age productions</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-black mb-2">Condition</h4>
                      <p className="text-sm text-gray-600">Museum-quality preservation</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-black mb-2">Provenance</h4>
                      <p className="text-sm text-gray-600">Verified studio authenticity</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-black mb-2">Storage</h4>
                      <p className="text-sm text-gray-600">Climate-controlled facility</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Risk Mitigation</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <Shield className="w-6 h-6 text-gray-700 mr-3" />
                      <div>
                        <div className="font-medium text-black">IP License-Backed</div>
                        <div className="text-sm text-gray-600">Secured by licensing agreements</div>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <Palette className="w-6 h-6 text-gray-700 mr-3" />
                      <div>
                        <div className="font-medium text-black">Asset Insurance</div>
                        <div className="text-sm text-gray-600">Full coverage for artwork value</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-2 border-gray-200 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl text-black">Investment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Minimum Investment</span>
                      <span className="font-bold text-black">$5,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Maximum Investment</span>
                      <span className="font-bold text-black">$25,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Method</span>
                      <span className="font-bold text-black">USDT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expected Returns</span>
                      <span className="font-bold text-black">12.5% APY</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      Tokyo, Japan
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      Collection Period: 1990-2010
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-6">
                      <Palette className="w-4 h-4 mr-2" />
                      120+ Original Pieces
                    </div>
                  </div>

                  <PaymentForm
                    projectName="Animation Original Pictures Investment"
                    minAmount={5000}
                    maxAmount={25000}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
