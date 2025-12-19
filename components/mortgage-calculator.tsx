"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(350000)
  const [downPayment, setDownPayment] = useState(70000)
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(6.89)
  const [propertyTax, setPropertyTax] = useState(3500)
  const [homeInsurance, setHomeInsurance] = useState(1200)
  const [pmi, setPmi] = useState(0)
  const [hoaFees, setHoaFees] = useState(0)

  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [principalAndInterest, setPrincipalAndInterest] = useState(0)
  const [totalMonthly, setTotalMonthly] = useState(0)

  useEffect(() => {
    calculateMortgage()
  }, [homePrice, downPayment, loanTerm, interestRate, propertyTax, homeInsurance, pmi, hoaFees])

  const calculateMortgage = () => {
    const loanAmount = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    // Calculate monthly P&I
    const payment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    // Calculate PMI if down payment is less than 20%
    const downPaymentPercent = (downPayment / homePrice) * 100
    const monthlyPMI = downPaymentPercent < 20 ? (loanAmount * 0.005) / 12 : 0

    setPmi(monthlyPMI)
    setPrincipalAndInterest(payment)

    // Total monthly payment including escrow and fees
    const total = payment + propertyTax / 12 + homeInsurance / 12 + monthlyPMI + hoaFees

    setMonthlyPayment(payment)
    setTotalMonthly(total)
  }

  const downPaymentPercent = ((downPayment / homePrice) * 100).toFixed(1)
  const loanAmount = homePrice - downPayment

  return (
    <Card>
      <CardHeader>
        <CardTitle>Advanced Mortgage Calculator</CardTitle>
        <CardDescription>
          Calculate your complete monthly mortgage payment including taxes, insurance, and fees
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="basic">Basic Details</TabsTrigger>
            <TabsTrigger value="advanced">Taxes & Insurance</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4 pt-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="home-price">Home Price ($)</Label>
                <Input
                  id="home-price"
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number.parseFloat(e.target.value) || 0)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="down-payment">Down Payment ($)</Label>
                <Input
                  id="down-payment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number.parseFloat(e.target.value) || 0)}
                />
                <p className="text-xs text-muted-foreground">{downPaymentPercent}% down</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mortgage-rate">Interest Rate (%)</Label>
                <Input
                  id="mortgage-rate"
                  type="number"
                  step="0.001"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number.parseFloat(e.target.value) || 0)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mortgage-term">Loan Term</Label>
                <Select value={loanTerm.toString()} onValueChange={(v) => setLoanTerm(Number.parseInt(v))}>
                  <SelectTrigger id="mortgage-term">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 years</SelectItem>
                    <SelectItem value="20">20 years</SelectItem>
                    <SelectItem value="30">30 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-4 pt-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="property-tax">Annual Property Tax ($)</Label>
                <Input
                  id="property-tax"
                  type="number"
                  value={propertyTax}
                  onChange={(e) => setPropertyTax(Number.parseFloat(e.target.value) || 0)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="home-insurance">Annual Home Insurance ($)</Label>
                <Input
                  id="home-insurance"
                  type="number"
                  value={homeInsurance}
                  onChange={(e) => setHomeInsurance(Number.parseFloat(e.target.value) || 0)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hoa-fees">Monthly HOA Fees ($)</Label>
                <Input
                  id="hoa-fees"
                  type="number"
                  value={hoaFees}
                  onChange={(e) => setHoaFees(Number.parseFloat(e.target.value) || 0)}
                />
              </div>

              <div className="space-y-2">
                <Label>Monthly PMI</Label>
                <Input value={`$${pmi.toFixed(2)}`} disabled className="bg-muted" />
                <p className="text-xs text-muted-foreground">
                  {downPayment / homePrice < 0.2 ? "Required (down payment < 20%)" : "Not required"}
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-2 border-primary">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Total Monthly Payment</p>
              <p className="mt-2 text-3xl font-bold">
                ${totalMonthly.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Principal & Interest</p>
              <p className="mt-2 text-2xl font-bold">
                ${principalAndInterest.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Property Tax</p>
              <p className="mt-2 text-2xl font-bold">
                ${(propertyTax / 12).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Insurance + PMI</p>
              <p className="mt-2 text-2xl font-bold">
                $
                {(homeInsurance / 12 + pmi).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg bg-muted p-4 space-y-2">
          <h4 className="font-semibold">Loan Summary</h4>
          <div className="grid gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Loan Amount:</span>
              <span className="font-medium">${loanAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Interest Paid:</span>
              <span className="font-medium">
                ${(monthlyPayment * loanTerm * 12 - loanAmount).toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Amount Paid:</span>
              <span className="font-medium">
                ${(monthlyPayment * loanTerm * 12).toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
