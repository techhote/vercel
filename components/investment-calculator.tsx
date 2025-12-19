"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function InvestmentCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000)
  const [monthlyContribution, setMonthlyContribution] = useState(500)
  const [expectedReturn, setExpectedReturn] = useState(8.0)
  const [investmentYears, setInvestmentYears] = useState(20)
  const [contributionTiming, setContributionTiming] = useState("end") // beginning or end of period

  const [futureValue, setFutureValue] = useState(0)
  const [totalContributions, setTotalContributions] = useState(0)
  const [totalEarnings, setTotalEarnings] = useState(0)

  useEffect(() => {
    calculateInvestment()
  }, [initialInvestment, monthlyContribution, expectedReturn, investmentYears, contributionTiming])

  const calculateInvestment = () => {
    const r = expectedReturn / 100 / 12 // monthly rate
    const n = investmentYears * 12 // total months

    // Future value of initial investment
    const FV_initial = initialInvestment * Math.pow(1 + r, n)

    // Future value of monthly contributions (annuity)
    let FV_contributions = 0
    if (monthlyContribution > 0) {
      if (contributionTiming === "beginning") {
        // Annuity due (payment at beginning of period)
        FV_contributions = monthlyContribution * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
      } else {
        // Ordinary annuity (payment at end of period)
        FV_contributions = monthlyContribution * ((Math.pow(1 + r, n) - 1) / r)
      }
    }

    const total = FV_initial + FV_contributions
    const contributions = initialInvestment + monthlyContribution * n
    const earnings = total - contributions

    setFutureValue(total)
    setTotalContributions(contributions)
    setTotalEarnings(earnings)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Investment Growth Calculator</CardTitle>
        <CardDescription>Project your investment returns with compound growth over time</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="initial-investment">Initial Investment ($)</Label>
            <Input
              id="initial-investment"
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number.parseFloat(e.target.value) || 0)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthly-invest">Monthly Contribution ($)</Label>
            <Input
              id="monthly-invest"
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number.parseFloat(e.target.value) || 0)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="return-rate">Expected Annual Return (%)</Label>
            <Input
              id="return-rate"
              type="number"
              step="0.1"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number.parseFloat(e.target.value) || 0)}
            />
            <p className="text-xs text-muted-foreground">S&P 500 historical average: ~10%</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="investment-years">Investment Period (Years)</Label>
            <Input
              id="investment-years"
              type="number"
              value={investmentYears}
              onChange={(e) => setInvestmentYears(Number.parseFloat(e.target.value) || 0)}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="contribution-timing">Contribution Timing</Label>
            <Select value={contributionTiming} onValueChange={setContributionTiming}>
              <SelectTrigger id="contribution-timing">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="end">End of month (standard)</SelectItem>
                <SelectItem value="beginning">Beginning of month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-2 border-green-500 dark:border-green-700">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Future Value</p>
              <p className="mt-2 text-3xl font-bold text-green-600 dark:text-green-400">
                ${futureValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">after {investmentYears} years</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Total Invested</p>
              <p className="mt-2 text-2xl font-bold">
                ${totalContributions.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">your contributions</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Total Earnings</p>
              <p className="mt-2 text-2xl font-bold text-chart-2">
                ${totalEarnings.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {((totalEarnings / totalContributions) * 100).toFixed(1)}% return
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border p-4">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100">Investment Breakdown</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-blue-700 dark:text-blue-300">Your money:</span>
              <span className="font-medium">${totalContributions.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-purple-700 dark:text-purple-300">Market gains:</span>
              <span className="font-medium">
                ${totalEarnings.toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </span>
            </div>
            <div className="h-px bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800" />
            <div className="flex justify-between font-bold">
              <span className="text-blue-900 dark:text-blue-100">Portfolio value:</span>
              <span>${futureValue.toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
