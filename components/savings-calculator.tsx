"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SavingsCalculator() {
  const [initialDeposit, setInitialDeposit] = useState(10000)
  const [monthlyContribution, setMonthlyContribution] = useState(500)
  const [interestRate, setInterestRate] = useState(5.0)
  const [years, setYears] = useState(10)
  const [compoundFrequency, setCompoundFrequency] = useState("12") // Monthly
  const [futureValue, setFutureValue] = useState(0)
  const [totalContributions, setTotalContributions] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)

  useEffect(() => {
    calculateSavings()
  }, [initialDeposit, monthlyContribution, interestRate, years, compoundFrequency])

  const calculateSavings = () => {
    const P = initialDeposit
    const PMT = monthlyContribution
    const r = interestRate / 100
    const n = Number.parseFloat(compoundFrequency)
    const t = years

    // Future value of initial deposit
    const FV_initial = P * Math.pow(1 + r / n, n * t)

    // Future value of monthly contributions (annuity)
    const monthlyRate = r / 12
    const FV_contributions = PMT * ((Math.pow(1 + monthlyRate, 12 * t) - 1) / monthlyRate)

    const total = FV_initial + FV_contributions
    const contributions = P + PMT * 12 * t
    const interest = total - contributions

    setFutureValue(total)
    setTotalContributions(contributions)
    setTotalInterest(interest)
  }

  const interestPercentage = (totalInterest / futureValue) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Savings Growth Calculator</CardTitle>
        <CardDescription>Calculate how your savings will grow with compound interest</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="initial-deposit">Initial Deposit ($)</Label>
            <Input
              id="initial-deposit"
              type="number"
              value={initialDeposit}
              onChange={(e) => setInitialDeposit(Number.parseFloat(e.target.value) || 0)}
              placeholder="10000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthly-contribution">Monthly Contribution ($)</Label>
            <Input
              id="monthly-contribution"
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number.parseFloat(e.target.value) || 0)}
              placeholder="500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="savings-rate">Interest Rate (%)</Label>
            <Input
              id="savings-rate"
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number.parseFloat(e.target.value) || 0)}
              placeholder="5.0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="savings-years">Time Period (Years)</Label>
            <Input
              id="savings-years"
              type="number"
              value={years}
              onChange={(e) => setYears(Number.parseFloat(e.target.value) || 0)}
              placeholder="10"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="compound-frequency">Compound Frequency</Label>
            <Select value={compoundFrequency} onValueChange={setCompoundFrequency}>
              <SelectTrigger id="compound-frequency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Annually</SelectItem>
                <SelectItem value="4">Quarterly</SelectItem>
                <SelectItem value="12">Monthly</SelectItem>
                <SelectItem value="365">Daily</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-navy-200 bg-gradient-to-br from-navy-50 to-white dark:border-navy-800 dark:from-navy-950 dark:to-slate-900">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">Future Value</p>
              <p className="mt-2 text-3xl font-bold text-navy-700 dark:text-navy-300">
                ${futureValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">after {years} years</p>
            </CardContent>
          </Card>

          <Card className="border-gold-200 bg-gradient-to-br from-gold-50 to-white dark:border-gold-800 dark:from-gold-950 dark:to-slate-900">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Contributions</p>
              <p className="mt-2 text-3xl font-bold text-gold-700 dark:text-gold-300">
                ${totalContributions.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">your deposits</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-white dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">Interest Earned</p>
              <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                ${totalInterest.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                {interestPercentage.toFixed(1)}% of total
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg border border-green-200 bg-gradient-to-br from-green-50 to-white p-4 dark:border-green-900 dark:from-green-950 dark:to-slate-900">
          <p className="text-sm font-medium text-green-900 dark:text-green-100">Growth Summary</p>
          <p className="mt-2 text-sm text-green-700 dark:text-green-300">
            By contributing ${monthlyContribution.toLocaleString()} monthly for {years} years at {interestRate}%
            interest, you'll grow your initial ${initialDeposit.toLocaleString()} deposit to{" "}
            <span className="font-bold">
              ${futureValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            . That's a gain of $
            {totalInterest.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} from
            compound interest!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
