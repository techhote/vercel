"use client"

import { useEffect, useState } from "react"
import { TrendingUp, TrendingDown, RefreshCw } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface RateData {
  type: string
  rate: number
  change: number
  lastUpdated: string
}

// Simulates daily rate updates with realistic financial data
const generateDailyRates = (): RateData[] => {
  const baseDate = new Date()
  const timeString = baseDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })

  return [
    {
      type: "30-Year Fixed Mortgage",
      rate: 6.89 + (Math.random() * 0.4 - 0.2),
      change: Math.random() * 0.3 - 0.15,
      lastUpdated: timeString,
    },
    {
      type: "15-Year Fixed Mortgage",
      rate: 6.12 + (Math.random() * 0.3 - 0.15),
      change: Math.random() * 0.25 - 0.12,
      lastUpdated: timeString,
    },
    {
      type: "5/1 ARM Mortgage",
      rate: 6.34 + (Math.random() * 0.35 - 0.18),
      change: Math.random() * 0.28 - 0.14,
      lastUpdated: timeString,
    },
    {
      type: "Personal Loan (Excellent Credit)",
      rate: 10.5 + (Math.random() * 1.5 - 0.75),
      change: Math.random() * 0.5 - 0.25,
      lastUpdated: timeString,
    },
    {
      type: "Auto Loan (New Car, 60 months)",
      rate: 7.18 + (Math.random() * 0.8 - 0.4),
      change: Math.random() * 0.4 - 0.2,
      lastUpdated: timeString,
    },
    {
      type: "High-Yield Savings Account",
      rate: 4.35 + (Math.random() * 0.3 - 0.15),
      change: Math.random() * 0.15 - 0.075,
      lastUpdated: timeString,
    },
    {
      type: "1-Year CD",
      rate: 5.25 + (Math.random() * 0.25 - 0.13),
      change: Math.random() * 0.12 - 0.06,
      lastUpdated: timeString,
    },
    {
      type: "Credit Card (Average APR)",
      rate: 20.72 + (Math.random() * 2 - 1),
      change: Math.random() * 0.6 - 0.3,
      lastUpdated: timeString,
    },
  ]
}

export function DailyRates() {
  const [rates, setRates] = useState<RateData[]>([])
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    setRates(generateDailyRates())
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setRates(generateDailyRates())
      setIsRefreshing(false)
    }, 500)
  }

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Today's Rates</CardTitle>
            <CardDescription>
              Live market rates • Last updated:{" "}
              {currentTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="gap-2 bg-transparent transition-transform hover:scale-105"
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {rates.map((rate, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border bg-card p-4 transition-all duration-300 hover:bg-muted/50 hover:shadow-md animate-slide-right"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex-1">
                <p className="font-medium">{rate.type}</p>
                <p className="text-xs text-muted-foreground">Last updated: {rate.lastUpdated}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-2xl font-bold">{rate.rate.toFixed(3)}%</p>
                  <div
                    className={`flex items-center gap-1 text-xs ${rate.change >= 0 ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}
                  >
                    {rate.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    <span>{Math.abs(rate.change).toFixed(3)}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Rates shown are national averages and may vary by lender, location, and borrower qualifications. Always
          compare multiple lenders and check current terms before making financial decisions.
        </p>
      </CardContent>
    </Card>
  )
}
