"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

export function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(250000)
  const [interestRate, setInterestRate] = useState(4.5)
  const [loanTerm, setLoanTerm] = useState(30)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [totalPayment, setTotalPayment] = useState(0)

  useEffect(() => {
    calculateLoan()
  }, [loanAmount, interestRate, loanTerm])

  const calculateLoan = () => {
    const principal = loanAmount
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    if (monthlyRate === 0) {
      const payment = principal / numberOfPayments
      setMonthlyPayment(payment)
      setTotalPayment(principal)
      setTotalInterest(0)
      return
    }

    const payment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    const total = payment * numberOfPayments
    const interest = total - principal

    setMonthlyPayment(payment)
    setTotalPayment(total)
    setTotalInterest(interest)
  }

  const principalPercentage = (loanAmount / totalPayment) * 100
  const interestPercentage = (totalInterest / totalPayment) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Loan Payment Calculator</CardTitle>
        <CardDescription>Calculate your monthly loan payments and total interest</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="loan-amount">Loan Amount ($)</Label>
            <Input
              id="loan-amount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number.parseFloat(e.target.value) || 0)}
              placeholder="250000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest-rate">Interest Rate (%)</Label>
            <Input
              id="interest-rate"
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number.parseFloat(e.target.value) || 0)}
              placeholder="4.5"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loan-term">Loan Term (Years)</Label>
            <Input
              id="loan-term"
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number.parseFloat(e.target.value) || 0)}
              placeholder="30"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-navy-200 bg-gradient-to-br from-navy-50 to-white dark:border-navy-800 dark:from-navy-950 dark:to-slate-900">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">Monthly Payment</p>
              <p className="mt-2 text-3xl font-bold text-navy-700 dark:text-navy-300">
                ${monthlyPayment.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">per month</p>
            </CardContent>
          </Card>

          <Card className="border-gold-200 bg-gradient-to-br from-gold-50 to-white dark:border-gold-800 dark:from-gold-950 dark:to-slate-900">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Interest</p>
              <p className="mt-2 text-3xl font-bold text-gold-700 dark:text-gold-300">
                ${totalInterest.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">over {loanTerm} years</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-white dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Payment</p>
              <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                ${totalPayment.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">principal + interest</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Payment Breakdown</span>
            <span className="text-slate-900 dark:text-white">Principal vs Interest</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-24 text-sm font-medium text-slate-900 dark:text-white">Principal</div>
              <div className="flex-1">
                <Progress value={principalPercentage} className="h-3" />
              </div>
              <div className="w-16 text-right text-sm text-slate-600 dark:text-slate-400">
                {principalPercentage.toFixed(1)}%
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-24 text-sm font-medium text-slate-900 dark:text-white">Interest</div>
              <div className="flex-1">
                <Progress value={interestPercentage} className="h-3" />
              </div>
              <div className="w-16 text-right text-sm text-slate-600 dark:text-slate-400">
                {interestPercentage.toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
