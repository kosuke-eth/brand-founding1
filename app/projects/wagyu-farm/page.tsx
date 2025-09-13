import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Calendar, MapPin, Users, Building2 } from "lucide-react"
import Link from "next/link"
import PaymentForm from "@/components/payment-form"

export default function WagyuFarmProject() {
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
                  src="https://github.com/kosuke-eth/Brand-Founding/blob/main/public/wagyu.jpg?raw=true"
                  alt="Kobe Beef Farmers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-gray-700 text-white">Business / Agriculture</Badge>
                <Badge variant="outline" className="text-black border-black">
                  Funding
                </Badge>
              </div>
              <h1 className="text-4xl font-bold text-black mb-6">Kobe Beef Farmers Investment</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Invest in premium Kobe beef production through a family-owned farm in Hyogo Prefecture. This investment
                supports sustainable farming practices while capitalizing on the growing global demand for authentic
                Japanese Wagyu beef.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-gray-600 text-sm">Expected Return (APY)</div>
                  <div className="font-bold text-black text-2xl">6.2%</div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm">Investment Term</div>
                  <div className="font-bold text-black text-2xl">48 Months</div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Funding Progress</span>
                  <span className="font-bold text-black">$300,200 / $380,000</span>
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
                    This third-generation family farm in Hyogo Prefecture specializes in raising authentic Kobe beef
                    cattle. Your investment will fund facility expansion, sustainable farming equipment, and
                    international certification processes to meet growing global demand for premium Wagyu beef.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Revenue Model</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Direct sales to premium restaurants and hotels
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Export to international luxury markets
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Premium retail distribution
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Farm tours and educational experiences
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Farm Operations</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-black mb-2">Herd Size</h4>
                      <p className="text-sm text-gray-600">200 certified Kobe cattle</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-black mb-2">Farm Size</h4>
                      <p className="text-sm text-gray-600">150 hectares of pasture land</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-black mb-2">Certifications</h4>
                      <p className="text-sm text-gray-600">Kobe Beef Marketing & Distribution</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-black mb-2">Sustainability</h4>
                      <p className="text-sm text-gray-600">Organic feed, renewable energy</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Risk Mitigation</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <Shield className="w-6 h-6 text-gray-700 mr-3" />
                      <div>
                        <div className="font-medium text-black">Property-Backed Security</div>
                        <div className="text-sm text-gray-600">Secured by farm land and assets</div>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <Building2 className="w-6 h-6 text-gray-700 mr-3" />
                      <div>
                        <div className="font-medium text-black">Asset Insurance</div>
                        <div className="text-sm text-gray-600">Full coverage for cattle herd</div>
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
                      <span className="font-bold text-black">$100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Method</span>
                      <span className="font-bold text-black">USDT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expected Returns</span>
                      <span className="font-bold text-black">6.2% APY</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      Hyogo Prefecture, Japan
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      Established 1952
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-6">
                      <Users className="w-4 h-4 mr-2" />
                      25 employees
                    </div>
                  </div>

                  <PaymentForm projectName="Kobe Beef Farmers Investment" minAmount={5000} maxAmount={100000} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
