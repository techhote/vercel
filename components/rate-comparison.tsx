"use client"

import { useState } from "react"
import { Plus, Trash2, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface Rate {
  id: string
  provider: string
  rate: number
  amount: number
}

export function RateComparison() {
  const [rates, setRates] = useState<Rate[]>([
    { id: "1", provider: "Provider A", rate: 4.5, amount: 100000 },
    { id: "2", provider: "Provider B", rate: 3.8, amount: 100000 },
  ])

  const addRate = () => {
    const newRate: Rate = {
      id: Date.now().toString(),
      provider: `Provider ${String.fromCharCode(65 + rates.length)}`,
      rate: 5.0,
      amount: 100000,
    }
    setRates([...rates, newRate])
  }

  const removeRate = (id: string) => {
    setRates(rates.filter((r) => r.id !== id))
  }

  const updateRate = (id: string, field: keyof Rate, value: string | number) => {
    setRates(rates.map((r) => (r.id === id ? { ...r, [field]: value } : r)))
  }

  const calculateYearlyInterest = (amount: number, rate: number) => {
    return (amount * rate) / 100
  }

  const bestRate = rates.reduce((best, current) => (current.rate < best.rate ? current : best), rates[0])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Compare Interest Rates</CardTitle>
          <CardDescription>Add multiple providers to compare their rates side by side</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {rates.map((rate, index) => (
            <div
              key={rate.id}
              className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-100 text-sm font-semibold text-navy-700 dark:bg-navy-900 dark:text-navy-300">
                    {index + 1}
                  </span>
                  {rate.id === bestRate.id && (
                    <div className="flex items-center gap-1 rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700 dark:bg-gold-900 dark:text-gold-300">
                      <Award className="h-3 w-3" />
                      Best Rate
                    </div>
                  )}
                </div>
                <Button variant="ghost" size="sm" onClick={() => removeRate(rate.id)} disabled={rates.length <= 2}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor={`provider-${rate.id}`}>Provider Name</Label>
                  <Input
                    id={`provider-${rate.id}`}
                    value={rate.provider}
                    onChange={(e) => updateRate(rate.id, "provider", e.target.value)}
                    placeholder="Enter provider name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`rate-${rate.id}`}>Interest Rate (%)</Label>
                  <Input
                    id={`rate-${rate.id}`}
                    type="number"
                    step="0.1"
                    value={rate.rate}
                    onChange={(e) => updateRate(rate.id, "rate", Number.parseFloat(e.target.value) || 0)}
                    placeholder="0.0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`amount-${rate.id}`}>Amount ($)</Label>
                  <Input
                    id={`amount-${rate.id}`}
                    type="number"
                    value={rate.amount}
                    onChange={(e) => updateRate(rate.id, "amount", Number.parseFloat(e.target.value) || 0)}
                    placeholder="100000"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-white p-3 dark:bg-slate-950">
                  <p className="text-xs text-slate-600 dark:text-slate-400">Yearly Interest</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    $
                    {calculateYearlyInterest(rate.amount, rate.rate).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>

                <div className="rounded-lg bg-white p-3 dark:bg-slate-950">
                  <p className="text-xs text-slate-600 dark:text-slate-400">Total After 1 Year</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    $
                    {(rate.amount + calculateYearlyInterest(rate.amount, rate.rate)).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <Button onClick={addRate} className="w-full bg-transparent" variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Add Another Provider
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
