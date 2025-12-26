import { BookOpen, TrendingUp, Shield, Calculator } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const guides = [
  {
    title: "Understanding Interest Rates",
    description:
      "Learn how interest rates work, what factors affect them, and how to get the best rates for your financial products.",
    category: "Education",
    readTime: "8 min read",
    icon: BookOpen,
  },
  {
    title: "Mortgage Types Explained",
    description:
      "Compare fixed-rate, adjustable-rate, FHA, VA, and other mortgage types to find the best fit for your home purchase.",
    category: "Mortgages",
    readTime: "12 min read",
    icon: Shield,
  },
  {
    title: "Investment Strategies for Beginners",
    description:
      "Start your investment journey with proven strategies, risk management tips, and portfolio diversification techniques.",
    category: "Investing",
    readTime: "15 min read",
    icon: TrendingUp,
  },
  {
    title: "Debt Consolidation Guide",
    description:
      "Explore options for consolidating multiple debts into one payment, including pros, cons, and when it makes sense.",
    category: "Debt Management",
    readTime: "10 min read",
    icon: Calculator,
  },
  {
    title: "How to Improve Your Credit Score",
    description:
      "Practical steps to boost your credit score, understand credit reports, and qualify for better interest rates.",
    category: "Credit",
    readTime: "9 min read",
    icon: Shield,
  },
  {
    title: "First-Time Homebuyer Checklist",
    description:
      "Complete guide to buying your first home, from pre-approval to closing, with tips to avoid common mistakes.",
    category: "Mortgages",
    readTime: "14 min read",
    icon: BookOpen,
  },
]

export default function GuidesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <div className="mb-12 text-center animate-fade-in">
        <h1 className="mb-4 text-4xl font-bold text-balance md:text-5xl">Financial Guides & Resources</h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty">
          Expert articles and comprehensive guides to help you navigate complex financial decisions with confidence.
          Updated regularly with current market insights and best practices.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide, index) => (
          <Card
            key={index}
            className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader>
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {guide.category}
                </span>
                <guide.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardTitle className="group-hover:text-primary transition-colors">{guide.title}</CardTitle>
              <CardDescription>{guide.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{guide.readTime}</span>
                <span className="text-sm font-medium text-primary">Read more →</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3 animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle>Latest Updates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="border-l-2 border-primary pl-3">
              <p className="text-sm font-medium">Fed Rate Decision Impact</p>
              <p className="text-xs text-muted-foreground">How recent changes affect your finances</p>
            </div>
            <div className="border-l-2 border-muted pl-3">
              <p className="text-sm font-medium">2024 Tax Law Changes</p>
              <p className="text-xs text-muted-foreground">What you need to know for filing</p>
            </div>
            <div className="border-l-2 border-muted pl-3">
              <p className="text-sm font-medium">Housing Market Trends</p>
              <p className="text-xs text-muted-foreground">Current outlook and predictions</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Topics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="#" className="block text-sm hover:text-primary transition-colors">
              • How to refinance your mortgage
            </Link>
            <Link href="#" className="block text-sm hover:text-primary transition-colors">
              • Building an emergency fund
            </Link>
            <Link href="#" className="block text-sm hover:text-primary transition-colors">
              • Understanding APR vs APY
            </Link>
            <Link href="#" className="block text-sm hover:text-primary transition-colors">
              • Student loan repayment options
            </Link>
            <Link href="#" className="block text-sm hover:text-primary transition-colors">
              • Retirement planning basics
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Glossary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <span className="font-semibold">APR:</span> Annual Percentage Rate
            </div>
            <div>
              <span className="font-semibold">PMI:</span> Private Mortgage Insurance
            </div>
            <div>
              <span className="font-semibold">DTI:</span> Debt-to-Income Ratio
            </div>
            <div>
              <span className="font-semibold">LTV:</span> Loan-to-Value Ratio
            </div>
            <Link href="#" className="inline-block font-medium text-primary hover:underline">
              View full glossary →
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
