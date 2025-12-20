"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"

interface Debt {
  id: string
  name: string
  balance: number
  rate: number
  minPayment: number
}

export function DebtPayoffCalculator() {
  const [debts, setDebts] = useState<Debt[]>([
    { id: "1", name: "Credit Card 1", balance: 5000, rate: 18.99, minPayment: 150 },
    { id: "2", name: "Credit Card 2", balance: 3500, rate: 22.49, minPayment: 105 },
  ])
  const [extraPayment, setExtraPayment] = useState(200)
  const [strategy, setStrategy] = useState<"avalanche" | "snowball">("avalanche")

  const addDebt = () => {
    const newDebt: Debt = {
      id: Date.now().toString(),
      name: `Debt ${debts.length + 1}`,
      balance: 1000,
      rate: 15.0,
      minPayment: 50,
    }
    setDebts([...debts, newDebt])
  }

  const removeDebt = (id: string) => {
    setDebts(debts.filter((d) => d.id !== id))
  }

  const updateDebt = (id: string, field: keyof Debt, value: string | number) => {
    setDebts(debts.map((d) => (d.id === id ? { ...d, [field]: value } : d)))
  }

  // Calculate payoff time and total interest
  const calculatePayoff = () => {
    const sortedDebts = [...debts].sort((a, b) => (strategy === "avalanche" ? b.rate - a.rate : a.balance - b.balance))

    let totalInterest = 0
    let months = 0
    const debtsCopy = sortedDebts.map((d) => ({ ...d }))
    const totalMinPayment = debtsCopy.reduce((sum, d) => sum + d.minPayment, 0)
    const totalPayment = totalMinPayment + extraPayment

    while (debtsCopy.some((d) => d.balance > 0) && months < 600) {
      months++
      let remainingPayment = totalPayment

      // Pay minimum on all debts
      debtsCopy.forEach((debt) => {
        if (debt.balance > 0) {
          const interest = (debt.balance * debt.rate) / 100 / 12
          totalInterest += interest
          debt.balance += interest

          const payment = Math.min(debt.minPayment, debt.balance)
          debt.balance -= payment
          remainingPayment -= payment

          if (debt.balance < 0) debt.balance = 0
        }
      })

      // Apply extra payment to first non-zero debt
      for (const debt of debtsCopy) {
        if (debt.balance > 0 && remainingPayment > 0) {
          const payment = Math.min(remainingPayment, debt.balance)
          debt.balance -= payment
          remainingPayment -= payment
          break
        }
      }
    }

    return { months, totalInterest }
  }

  const { months, totalInterest } = debts.length > 0 ? calculatePayoff() : { months: 0, totalInterest: 0 }
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  const totalBalance = debts.reduce((sum, d) => sum + d.balance, 0)
  const totalMinPayments = debts.reduce((sum, d) => sum + d.minPayment, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Debt Payoff Calculator</CardTitle>
        <CardDescription>
          Compare avalanche (highest rate first) vs snowball (lowest balance first) strategies
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {debts.map((debt, index) => (
            <div key={debt.id} className="rounded-lg border bg-muted/50 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Debt {index + 1}</span>
                <Button variant="ghost" size="sm" onClick={() => removeDebt(debt.id)} disabled={debts.length <= 1}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid gap-3 md:grid-cols-4">
                <div className="space-y-1.5">
                  <Label htmlFor={`name-${debt.id}`} className="text-xs">
                    Name
                  </Label>
                  <Input
                    id={`name-${debt.id}`}
                    value={debt.name}
                    onChange={(e) => updateDebt(debt.id, "name", e.target.value)}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor={`balance-${debt.id}`} className="text-xs">
                    Balance ($)
                  </Label>
                  <Input
                    id={`balance-${debt.id}`}
                    type="number"
                    value={debt.balance}
                    onChange={(e) => updateDebt(debt.id, "balance", Number.parseFloat(e.target.value) || 0)}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor={`rate-${debt.id}`} className="text-xs">
                    APR (%)
                  </Label>
                  <Input
                    id={`rate-${debt.id}`}
                    type="number"
                    step="0.01"
                    value={debt.rate}
                    onChange={(e) => updateDebt(debt.id, "rate", Number.parseFloat(e.target.value) || 0)}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor={`min-${debt.id}`} className="text-xs">
                    Min Payment ($)
                  </Label>
                  <Input
                    id={`min-${debt.id}`}
                    type="number"
                    value={debt.minPayment}
                    onChange={(e) => updateDebt(debt.id, "minPayment", Number.parseFloat(e.target.value) || 0)}
                  />
                </div>
              </div>
            </div>
          ))}

          <Button onClick={addDebt} variant="outline" className="w-full bg-transparent">
            <Plus className="mr-2 h-4 w-4" />
            Add Another Debt
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="extra-payment">Extra Monthly Payment ($)</Label>
          <Input
            id="extra-payment"
            type="number"
            value={extraPayment}
            onChange={(e) => setExtraPayment(Number.parseFloat(e.target.value) || 0)}
          />
          <p className="text-xs text-muted-foreground">Amount beyond minimum payments to accelerate payoff</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div
            onClick={() => setStrategy("avalanche")}
            className={`cursor-pointer rounded-lg border-2 p-4 transition-colors ${
              strategy === "avalanche" ? "border-primary bg-primary/5" : "border-muted hover:border-primary/50"
            }`}
          >
            <h4 className="font-semibold">Avalanche Method</h4>
            <p className="mt-1 text-sm text-muted-foreground">Pay highest interest rate first - saves more money</p>
          </div>

          <div
            onClick={() => setStrategy("snowball")}
            className={`cursor-pointer rounded-lg border-2 p-4 transition-colors ${
              strategy === "snowball" ? "border-primary bg-primary/5" : "border-muted hover:border-primary/50"
            }`}
          >
            <h4 className="font-semibold">Snowball Method</h4>
            <p className="mt-1 text-sm text-muted-foreground">Pay smallest balance first - builds momentum</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Total Debt</p>
              <p className="mt-2 text-2xl font-bold text-red-600 dark:text-red-400">${totalBalance.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Debt-Free In</p>
              <p className="mt-2 text-2xl font-bold">
                {years > 0 && `${years}y `}
                {remainingMonths}m
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Total Interest</p>
              <p className="mt-2 text-2xl font-bold">
                ${totalInterest.toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Monthly Payment</p>
              <p className="mt-2 text-2xl font-bold">${(totalMinPayments + extraPayment).toLocaleString()}</p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
