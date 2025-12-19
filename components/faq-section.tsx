"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
  {
    question: "How accurate are the calculators?",
    answer:
      "Our calculators use standard financial formulas and are updated daily with current market rates from major lenders. However, actual rates and terms may vary based on your credit score, location, and lender policies. Always verify final numbers with your chosen lender.",
  },
  {
    question: "Do I need to create an account to use the calculators?",
    answer:
      "No, all our calculators are completely free to use without registration. We don't store your personal financial data, and you can use all features instantly without signing up.",
  },
  {
    question: "How often are interest rates updated?",
    answer:
      "We update our interest rates daily to reflect current market conditions. Rates shown are national averages compiled from major lenders and financial institutions. Your actual rate will depend on various factors including credit score, loan amount, and down payment.",
  },
  {
    question: "Can I save my calculations?",
    answer:
      "Currently, calculations are not saved between sessions. We recommend taking screenshots or writing down important results. We're working on a feature to allow users to save and compare multiple scenarios.",
  },
  {
    question: "What's the difference between APR and interest rate?",
    answer:
      "Interest rate is the cost of borrowing money, while APR (Annual Percentage Rate) includes the interest rate plus other costs like origination fees, closing costs, and mortgage insurance. APR gives you a more complete picture of the total cost of a loan.",
  },
  {
    question: "Should I choose a 15-year or 30-year mortgage?",
    answer:
      "A 15-year mortgage typically has lower interest rates and you'll pay less total interest, but monthly payments are higher. A 30-year mortgage offers lower monthly payments but you'll pay more interest over time. Use our mortgage calculator to compare both options based on your budget.",
  },
  {
    question: "How is PMI calculated?",
    answer:
      "Private Mortgage Insurance (PMI) is typically required when your down payment is less than 20% of the home's value. PMI usually costs between 0.3% to 1.5% of the original loan amount per year. Our calculator estimates PMI at 0.5% annually, though your actual rate may vary.",
  },
  {
    question: "What credit score do I need for the best rates?",
    answer:
      "Generally, a credit score of 740 or higher qualifies you for the best interest rates. Scores between 670-739 get good rates, while scores below 670 may face higher rates or require larger down payments. Check your credit score and work to improve it before applying for loans.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Frequently Asked Questions</CardTitle>
        <CardDescription>Find answers to common questions about our calculators and financial tools</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-muted/50"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-200 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="p-4 pt-0 text-sm text-muted-foreground">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
