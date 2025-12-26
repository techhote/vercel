import {
  Calculator,
  BookOpen,
  TrendingUp,
  DollarSign,
  PiggyBank,
  CreditCard,
  Wallet,
  Target,
  Shield,
  Home,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function BlogPage() {
  const articles = [
    {
      title: "Understanding Interest Rates: A Complete Guide",
      description:
        "Learn how interest rates work, why they matter, and how they impact your loans, savings, and investments. Discover the difference between APR, APY, and nominal rates.",
      icon: TrendingUp,
      readTime: "8 min read",
      link: "/blog/understanding-interest-rates",
    },
    {
      title: "How to Compare Mortgage Rates Effectively",
      description:
        "Shopping for a mortgage? Learn the essential factors to consider beyond just the interest rate, including points, fees, loan terms, and how to calculate your true cost.",
      icon: DollarSign,
      readTime: "10 min read",
      link: "/blog/mortgage-rates-guide",
    },
    {
      title: "The Power of Compound Interest in Savings",
      description:
        "Discover why Einstein allegedly called compound interest the eighth wonder of the world. Learn how to harness its power to grow your wealth exponentially over time.",
      icon: PiggyBank,
      readTime: "6 min read",
      link: "/blog/compound-interest-guide",
    },
    {
      title: "Loan Amortization Explained Simply",
      description:
        "Understand how your loan payments are split between principal and interest over time. Learn why your early payments go mostly to interest and how extra payments can save you thousands.",
      icon: Calculator,
      readTime: "7 min read",
      link: "/blog/loan-amortization-explained",
    },
    {
      title: "Fixed vs Variable Interest Rates: Which to Choose",
      description:
        "Explore the pros and cons of fixed and variable rate loans. Learn when each option makes sense and how to decide which is right for your financial situation.",
      icon: CreditCard,
      readTime: "9 min read",
      link: "/blog/fixed-vs-variable-rates",
    },
    {
      title: "10 Ways to Lower Your Loan Interest Rate",
      description:
        "Discover practical strategies to qualify for better rates, from improving your credit score to choosing the right loan term, refinancing options, and negotiation tactics.",
      icon: BookOpen,
      readTime: "11 min read",
      link: "/blog/lower-loan-rates",
    },
    {
      title: "Building an Emergency Fund: Step-by-Step Guide",
      description:
        "Learn why emergency funds are crucial, how much you need, where to keep it, and practical strategies to build your safety net even on a tight budget.",
      icon: Shield,
      readTime: "8 min read",
      link: "/blog/emergency-fund-guide",
    },
    {
      title: "Debt Snowball vs Avalanche: Which Method Works Best",
      description:
        "Compare the two most popular debt payoff strategies. Understand the psychology and math behind each method to choose the right approach for your situation.",
      icon: Target,
      readTime: "9 min read",
      link: "/blog/debt-payoff-strategies",
    },
    {
      title: "First-Time Homebuyer's Financial Checklist",
      description:
        "Essential financial preparation steps before buying your first home. Learn about down payments, closing costs, credit requirements, and hidden expenses to budget for.",
      icon: Home,
      readTime: "12 min read",
      link: "/blog/first-time-homebuyer-guide",
    },
    {
      title: "How Credit Scores Affect Your Interest Rates",
      description:
        "Discover the direct relationship between credit scores and interest rates. See real examples of how much a better score can save you and actionable tips to improve yours.",
      icon: TrendingUp,
      readTime: "7 min read",
      link: "/blog/credit-score-impact",
    },
    {
      title: "Retirement Savings: How Much Do You Really Need",
      description:
        "Calculate your retirement needs with practical formulas, understand the 4% rule, and learn strategies to catch up if you're behind on retirement savings.",
      icon: Wallet,
      readTime: "10 min read",
      link: "/blog/retirement-savings-guide",
    },
    {
      title: "Refinancing Your Mortgage: When Does It Make Sense",
      description:
        "Learn when refinancing can save you money, how to calculate your break-even point, what costs to expect, and common refinancing mistakes to avoid.",
      icon: DollarSign,
      readTime: "9 min read",
      link: "/blog/mortgage-refinancing-guide",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Calculator className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight">FinanceFlow Pro</h1>
              <p className="text-xs text-muted-foreground">Smart Financial Tools</p>
            </div>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Financial Blog & Expert Guides
            </h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Expert insights and comprehensive guides to help you understand interest rates, loans, savings, and make
              better financial decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => {
              const Icon = article.icon
              return (
                <Card key={index} className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl leading-snug">{article.title}</CardTitle>
                    <CardDescription className="mt-2 leading-relaxed">{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                      {article.link ? (
                        <Link href={article.link} className="text-sm font-medium text-primary hover:underline">
                          Read Article →
                        </Link>
                      ) : (
                        <span className="text-sm font-medium text-muted-foreground">Coming Soon</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Read Section */}
      <section className="border-t bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Why Financial Education Matters</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-xl font-semibold">Make Confident Decisions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Understanding financial concepts empowers you to make informed decisions about loans, mortgages,
                    credit cards, and investments. Knowledge is your best tool for financial success.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-xl font-semibold">Save Thousands of Dollars</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Knowing how to compare rates, understand fees, and calculate true costs can save you thousands over
                    the life of a loan or significantly boost your savings returns.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-xl font-semibold">Avoid Common Pitfalls</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many people make costly financial mistakes simply because they don't understand the terms, rates, or
                    implications. Our guides help you avoid these common errors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FinanceFlow Pro. All rights reserved.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
