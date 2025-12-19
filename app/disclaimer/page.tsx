import { Calculator } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function DisclaimerPage() {
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
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Back to Home
          </Link>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">Disclaimer</h1>
        <p className="mb-8 text-muted-foreground">Last updated: December 19, 2025</p>

        <Card>
          <CardContent className="prose prose-slate max-w-none pt-6 dark:prose-invert">
            <h2 className="text-2xl font-bold">General Information</h2>
            <p className="leading-relaxed">
              The information and tools provided by FinanceFlow Pro are for general informational and educational
              purposes only. All content on this website is provided in good faith, however, we make no representation
              or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability,
              availability, or completeness of any information on the site.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Not Financial Advice</h2>
            <p className="leading-relaxed">
              FinanceFlow Pro is not a financial advisor, investment advisor, tax professional, or legal advisor. The
              calculators and information provided on this website do not constitute professional financial, investment,
              tax, or legal advice.
            </p>
            <p className="leading-relaxed">
              The calculations provided by our tools are estimates based on the information you provide and standard
              financial formulas. They should be used for educational and planning purposes only. Before making any
              financial decisions, you should consult with qualified professionals including:
            </p>
            <ul className="leading-relaxed">
              <li>Certified financial planners or financial advisors</li>
              <li>Licensed investment advisors</li>
              <li>Certified public accountants or tax professionals</li>
              <li>Licensed attorneys for legal matters</li>
              <li>Mortgage brokers or lending professionals</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold">Accuracy of Calculations</h2>
            <p className="leading-relaxed">
              While we strive to provide accurate calculations using industry-standard financial formulas, we cannot
              guarantee that our calculators will always produce 100% accurate results. Factors that may affect accuracy
              include:
            </p>
            <ul className="leading-relaxed">
              <li>Rounding of decimal places in intermediate calculations</li>
              <li>Variations in how different financial institutions calculate interest</li>
              <li>Changes in interest rates, fees, or terms during the loan or savings period</li>
              <li>Tax implications that vary by individual circumstances and jurisdiction</li>
              <li>Additional fees, charges, or costs not accounted for in basic calculations</li>
            </ul>
            <p className="leading-relaxed">
              Always verify important financial calculations with your financial institution, lender, or professional
              advisor before making binding financial commitments.
            </p>

            <h2 className="mt-8 text-2xl font-bold">No Guarantee of Results</h2>
            <p className="leading-relaxed">
              The results provided by our calculators are estimates and projections based on the assumptions and data
              you provide. Actual financial outcomes may differ significantly from calculated projections due to:
            </p>
            <ul className="leading-relaxed">
              <li>Market fluctuations and economic conditions</li>
              <li>Changes in interest rates or investment returns</li>
              <li>Variation in actual versus assumed deposit or payment schedules</li>
              <li>Unexpected fees, penalties, or charges</li>
              <li>Inflation, currency exchange rates, or other economic factors</li>
              <li>Personal circumstances, emergencies, or financial changes</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold">Third-Party Links and Services</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites, products, or services that are not owned or
              controlled by FinanceFlow Pro. We have no control over, and assume no responsibility for, the content,
              privacy policies, or practices of any third-party websites or services.
            </p>
            <p className="leading-relaxed">
              We do not endorse or recommend any specific financial institutions, lenders, investment products, or
              services. Any links or advertisements on our site do not constitute endorsements.
            </p>

            <h2 className="mt-8 text-2xl font-bold">No Liability for Decisions</h2>
            <p className="leading-relaxed">
              Under no circumstances shall FinanceFlow Pro be liable for any direct, indirect, special, incidental,
              consequential, or punitive damages arising from your use of the website or reliance on any information or
              calculations provided.
            </p>
            <p className="leading-relaxed">
              You assume full responsibility for all financial decisions you make. We strongly encourage you to:
            </p>
            <ul className="leading-relaxed">
              <li>Do your own research and due diligence</li>
              <li>Consult with qualified professionals</li>
              <li>Read all terms and conditions of financial products carefully</li>
              <li>Understand the risks involved in financial decisions</li>
              <li>Never invest or borrow more than you can afford to lose or repay</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold">Educational Purpose</h2>
            <p className="leading-relaxed">
              The primary purpose of FinanceFlow Pro is to educate users about financial concepts such as interest
              rates, loan amortization, compound interest, and rate comparison. Our tools are designed to help you
              understand how these concepts work and to facilitate preliminary planning.
            </p>
            <p className="leading-relaxed">
              The information provided should serve as a starting point for your financial research and planning, not as
              the sole basis for financial decisions.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Changes to Content</h2>
            <p className="leading-relaxed">
              We reserve the right to modify, update, or remove any content on our website at any time without prior
              notice. We are not obligated to update information to reflect changes in financial markets, regulations,
              or industry practices.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Advertising</h2>
            <p className="leading-relaxed">
              This website displays advertisements served by third-party advertising networks such as Google AdSense.
              These advertisements are provided by third parties and we do not control or endorse the content of these
              ads. The presence of advertising does not constitute an endorsement of any products or services
              advertised.
            </p>

            <h2 className="mt-8 text-2xl font-bold">Your Responsibility</h2>
            <p className="leading-relaxed">By using FinanceFlow Pro, you acknowledge and agree that:</p>
            <ul className="leading-relaxed">
              <li>You are responsible for verifying all information before making financial decisions</li>
              <li>You will consult appropriate professionals for personalized advice</li>
              <li>You understand that past performance does not guarantee future results</li>
              <li>You accept all risks associated with financial decisions you make</li>
              <li>You will not hold FinanceFlow Pro liable for any financial losses or damages</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold">Contact Us</h2>
            <p className="leading-relaxed">If you have any questions about this disclaimer, please contact us at:</p>
            <p className="leading-relaxed">
              Email:{" "}
              <a href="mailto:support@financeflowpro.com" className="text-primary hover:underline">
                support@financeflowpro.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FinanceFlow Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
