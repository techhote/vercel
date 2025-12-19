"use client"

import { Calculator, PiggyBank, Home, TrendingUp, CreditCard, DollarSign } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const calculators = [
  {
    title: "Mortgage Calculator",
    description: "Calculate monthly payments, interest, and total costs for home loans",
    icon: Home,
    href: "/#mortgage",
    color: "text-blue-600",
  },
  {
    title: "Loan Calculator",
    description: "Determine payment schedules for personal, auto, and business loans",
    icon: Calculator,
    href: "/#loan",
    color: "text-green-600",
  },
  {
    title: "Savings Calculator",
    description: "Project growth of your savings with compound interest over time",
    icon: PiggyBank,
    href: "/#savings",
    color: "text-purple-600",
  },
  {
    title: "Investment Calculator",
    description: "Plan your investment portfolio with monthly contributions and returns",
    icon: TrendingUp,
    href: "/#investment",
    color: "text-orange-600",
  },
  {
    title: "Debt Payoff Calculator",
    description: "Compare avalanche vs snowball strategies to eliminate debt faster",
    icon: CreditCard,
    href: "/#debt",
    color: "text-red-600",
  },
  {
    title: "Rate Comparison",
    description: "Compare rates from multiple lenders side-by-side",
    icon: DollarSign,
    href: "/#comparison",
    color: "text-teal-600",
  },
]

export default function CalculatorsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <div className="mb-12 text-center animate-fade-in">
        <h1 className="mb-4 text-4xl font-bold text-balance md:text-5xl">Financial Calculators</h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty">
          Free, comprehensive financial calculators to help you make informed decisions about loans, mortgages,
          investments, and debt management. All tools are updated with current market rates.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {calculators.map((calc, index) => (
          <Link key={index} href={calc.href}>
            <Card
              className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                  <calc.icon className={`h-6 w-6 ${calc.color}`} />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">{calc.title}</CardTitle>
                <CardDescription>{calc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm font-medium text-primary">Calculate now →</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-lg bg-muted p-8 animate-fade-in">
        <h2 className="mb-4 text-2xl font-bold">Why Use Our Calculators?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-semibold">Always Current</h3>
            <p className="text-sm text-muted-foreground">
              Our calculators are updated daily with current market rates from major lenders, ensuring you get accurate
              estimates based on today's financial landscape.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Comprehensive Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Get detailed breakdowns including principal, interest, taxes, insurance, and fees. See the complete
              picture of your financial commitments.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Easy Comparison</h3>
            <p className="text-sm text-muted-foreground">
              Compare different scenarios side-by-side. Adjust terms, rates, and amounts to find the best option for
              your financial situation.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">No Hidden Fees</h3>
            <p className="text-sm text-muted-foreground">
              All our tools are completely free to use with no registration required. Get instant results and make
              informed financial decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
