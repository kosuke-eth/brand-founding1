"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Copy, Check, DollarSign, Wallet, User, ExternalLink } from "lucide-react"
import Link from "next/link"

interface PaymentFormProps {
  projectName: string
  minAmount: number
  maxAmount: number
  slug?: string
}

export default function PaymentForm({ projectName, minAmount, maxAmount, slug }: PaymentFormProps) {
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [amount, setAmount] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [referralCode, setReferralCode] = useState("")
  const [copied, setCopied] = useState(false)
  const [termsAgreed, setTermsAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const receivingAddress = "0xAb5CB0A638A676B5102a10685DC07e0748965846"

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(receivingAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmitPayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/submit-investment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName, amount, name, email, phone, referralCode, slug }),
      })
      const data = await res.json()
      if (!res.ok || !data?.success) {
        alert("Failed to submit investment details. Please try again.")
        return
      }
      alert("Investment details submitted successfully! You will receive confirmation within 24 hours.")
      setAmount("")
      setName("")
      setEmail("")
      setPhone("")
      setReferralCode("")
      setTermsAgreed(false)
      setShowPaymentForm(false)
    } catch (err) {
      console.error(err)
      alert("An error occurred while submitting your investment details. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!showPaymentForm) {
    return (
      <Button onClick={() => setShowPaymentForm(true)} className="w-full bg-black hover:bg-gray-800 text-white" size="lg">
        <DollarSign className="w-5 h-5 mr-2" />
        Invest Now
      </Button>
    )
  }

  return (
    <Card className="border-2 border-black">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg text-black flex items-center">
          <Wallet className="w-5 h-5 mr-2" />
          Investment Payment
        </CardTitle>
        <Badge className="w-fit bg-gray-100 text-black">USDT Payment Required (Polygon)</Badge>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmitPayment} className="space-y-6">
          {/* Investment Amount */}
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-sm font-medium text-black">
              Investment Amount (USDT - Polygon)
            </Label>
            <Input
              id="amount"
              type="number"
              placeholder={`Min: $${minAmount.toLocaleString()}`}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min={minAmount}
              max={maxAmount}
              required
              className="border-gray-300 focus:border-black"
            />
            <p className="text-xs text-gray-500">Minimum: ${minAmount.toLocaleString()} • Maximum: ${maxAmount.toLocaleString()}</p>
          </div>

          {/* Receiving Address */}
          {/* <div className="space-y-2">
            <Label className="text-sm font-medium text-black">USDT Receiving Address (Polygon Network)</Label>
            <div className="flex items-center space-x-2">
              <Input value={receivingAddress} readOnly className="bg-gray-50 border-gray-300 text-sm font-mono" />
              <Button type="button" variant="outline" size="sm" onClick={handleCopyAddress} className="flex-shrink-0 bg-transparent">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            <p className="text-xs text-gray-500">Send USDT to this address using Polygon network (Matic)</p>
          </div> */}

          {/* Investor Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-black">Full Name</Label>
            <Input id="name" type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} required className="border-gray-300 focus:border-black" />
            <p className="text-xs text-gray-500">Name for investment documentation and correspondence</p>
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-black">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required className="border-gray-300 focus:border-black" />
            <p className="text-xs text-gray-500">Email for investment updates and communication</p>
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-black">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required className="border-gray-300 focus:border-black" />
            <p className="text-xs text-gray-500">Phone number for urgent investment matters</p>
          </div>

          {/* Referral Code */}
          <div className="space-y-2">
            <Label htmlFor="referralCode" className="text-sm font-medium text-black">Referral Code (Optional)</Label>
            <Input id="referralCode" type="text" placeholder="Enter referral code if you have one" value={referralCode} onChange={(e) => setReferralCode(e.target.value)} className="border-gray-300 focus:border-black" />
            <p className="text-xs text-gray-500">Optional referral code for special benefits or discounts</p>
          </div>

          {/* Important Notice */}
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-medium text-black mb-2">Important Instructions:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Send exactly the amount specified above</li>
              <li>• Use USDT on Polygon network (Matic) only</li>
              <li>• Keep transaction hash for your records</li>
              <li>• Investment confirmation will be sent within 24 hours</li>
              <li>• By proceeding, you agree to our crypto asset consumption loan contract</li>
            </ul>
          </div>

          {/* Terms Agreement Checkbox */}
          <div className="flex items-start space-x-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <Checkbox id="terms" checked={termsAgreed} onCheckedChange={(checked) => setTermsAgreed(checked as boolean)} className="mt-1" />
            <div className="space-y-1">
              <Label htmlFor="terms" className="text-sm font-medium text-black cursor-pointer">I agree to the Terms of Service for Crypto Asset Loan for Consumption</Label>
              <p className="text-xs text-gray-600">
                <Link href="/terms" className="text-blue-600 hover:underline inline-flex items-center">
                  Read full terms and conditions
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="space-y-3">
            <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white" size="lg" disabled={!termsAgreed || isSubmitting}>
              <User className="w-5 h-5 mr-2" />
              {isSubmitting ? 'Submitting...' : 'Submit Investment Details'}
            </Button>
            <Button type="button" variant="outline" onClick={() => setShowPaymentForm(false)} className="w-full">
              Back to Project Details
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
