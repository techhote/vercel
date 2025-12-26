import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Eye, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Privacy Policy - How We Protect Your Data | imakepdf.site",
  description:
    "Read imakepdf.site's comprehensive privacy policy. Learn how we collect, use, and protect your personal data and PDF files with industry-standard security.",
  keywords: "privacy policy, data protection, PDF security, file privacy, GDPR compliance, data security",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="text-lg text-muted-foreground mt-4">
              Your privacy is our priority. This policy explains how we handle your data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">Secure Storage</h3>
                <p className="text-sm text-muted-foreground">SSL/TLS encryption for all transfers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 mx-auto">
                  <Trash2 className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">Auto-Delete</h3>
                <p className="text-sm text-muted-foreground">Files deleted after 24 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 mx-auto">
                  <Eye className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="font-semibold mb-2">No Tracking</h3>
                <p className="text-sm text-muted-foreground">We don't sell your data</p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              Welcome to imakepdf.site ("we," "our," or "us"). We respect your privacy and are committed to protecting
              your personal data. This privacy policy explains how we collect, use, store, and protect your information
              when you use our PDF manipulation tools and services.
            </p>
            <p>
              This policy applies to all users of imakepdf.site and covers all our online PDF tools including merge,
              split, compress, convert, and generate features. By using our services, you agree to the collection and
              use of information in accordance with this policy.
            </p>

            <h2>Information We Collect</h2>

            <h3>1. Account Information</h3>
            <p>When you create an account on imakepdf.site, we collect:</p>
            <ul>
              <li>
                <strong>Email address:</strong> Used for account creation, password recovery, and important service
                notifications
              </li>
              <li>
                <strong>Password:</strong> Stored in encrypted format using industry-standard bcrypt hashing
              </li>
              <li>
                <strong>Account creation date:</strong> To track account age and usage patterns
              </li>
              <li>
                <strong>Profile information:</strong> Optional name and preferences you choose to provide
              </li>
            </ul>

            <h3>2. File Information</h3>
            <p>When you use our PDF tools, we temporarily process and store:</p>
            <ul>
              <li>
                <strong>Uploaded PDF files:</strong> Stored temporarily for processing
              </li>
              <li>
                <strong>Converted/Processed files:</strong> Generated output files
              </li>
              <li>
                <strong>File metadata:</strong> File name, size, upload timestamp, and processing status
              </li>
              <li>
                <strong>Processing logs:</strong> Technical logs for debugging and service improvement
              </li>
            </ul>
            <p className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <strong>Important:</strong> All uploaded and processed files are automatically and permanently deleted
              from our servers after 24 hours. We do not retain copies of your files.
            </p>

            <h3>3. Usage Data</h3>
            <p>We collect anonymous usage data to improve our services:</p>
            <ul>
              <li>
                <strong>Page views and navigation:</strong> Which pages you visit and how you navigate our site
              </li>
              <li>
                <strong>Tool usage:</strong> Which PDF tools you use most frequently
              </li>
              <li>
                <strong>Browser information:</strong> Browser type, version, and operating system
              </li>
              <li>
                <strong>Device information:</strong> Device type (desktop, mobile, tablet)
              </li>
              <li>
                <strong>IP address:</strong> For security and approximate geographic location (country level)
              </li>
              <li>
                <strong>Timestamps:</strong> When you access our services
              </li>
            </ul>

            <h3>4. Cookies and Tracking Technologies</h3>
            <p>We use cookies and similar technologies for:</p>
            <ul>
              <li>
                <strong>Authentication:</strong> Keeping you signed in to your account
              </li>
              <li>
                <strong>Preferences:</strong> Remembering your settings and choices
              </li>
              <li>
                <strong>Analytics:</strong> Understanding how visitors use our website
              </li>
              <li>
                <strong>Advertising:</strong> Displaying relevant ads through Google AdSense
              </li>
            </ul>
            <p>
              For detailed information, please read our{" "}
              <a href="/cookies" className="text-primary hover:underline">
                Cookie Policy
              </a>
              .
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>

            <h3>Service Provision</h3>
            <ul>
              <li>Process PDF files according to your requests (merge, split, compress, etc.)</li>
              <li>Maintain and operate your user account</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send transactional emails (password resets, account notifications)</li>
            </ul>

            <h3>Service Improvement</h3>
            <ul>
              <li>Analyze usage patterns to improve our PDF tools</li>
              <li>Identify and fix technical issues</li>
              <li>Develop new features based on user needs</li>
              <li>Optimize website performance and user experience</li>
            </ul>

            <h3>Security and Compliance</h3>
            <ul>
              <li>Detect and prevent fraud, abuse, and security threats</li>
              <li>Monitor for violations of our Terms of Service</li>
              <li>Comply with legal obligations and law enforcement requests</li>
              <li>Protect our rights, property, and user safety</li>
            </ul>

            <h3>Communication</h3>
            <ul>
              <li>Send important service updates and security alerts</li>
              <li>Notify you about changes to our services or policies</li>
              <li>Respond to your questions and support requests</li>
              <li>Send promotional emails (with your consent, which you can opt-out of)</li>
            </ul>

            <h2>Data Security</h2>
            <p>We implement comprehensive security measures to protect your data:</p>

            <h3>Technical Security</h3>
            <ul>
              <li>
                <strong>Encryption in Transit:</strong> All data transfers use SSL/TLS encryption (HTTPS)
              </li>
              <li>
                <strong>Encryption at Rest:</strong> Stored data is encrypted using AES-256 encryption
              </li>
              <li>
                <strong>Password Security:</strong> Passwords are hashed using bcrypt with salt
              </li>
              <li>
                <strong>Secure Infrastructure:</strong> Hosted on secure, monitored cloud servers
              </li>
            </ul>

            <h3>Organizational Security</h3>
            <ul>
              <li>
                <strong>Access Controls:</strong> Limited employee access on a need-to-know basis
              </li>
              <li>
                <strong>Regular Audits:</strong> Security reviews and vulnerability assessments
              </li>
              <li>
                <strong>Incident Response:</strong> Procedures for security breach detection and response
              </li>
              <li>
                <strong>Data Minimization:</strong> We only collect data necessary for service operation
              </li>
            </ul>

            <h3>File Security</h3>
            <ul>
              <li>Files are stored in isolated, secure storage buckets</li>
              <li>Each file has a unique, non-guessable identifier</li>
              <li>Automatic deletion after 24 hours - no manual intervention needed</li>
              <li>No human access to file contents during processing</li>
            </ul>

            <h2>Data Retention</h2>
            <p>We retain different types of data for varying periods:</p>
            <ul>
              <li>
                <strong>Uploaded Files:</strong> Automatically deleted after 24 hours
              </li>
              <li>
                <strong>Account Data:</strong> Retained until you delete your account
              </li>
              <li>
                <strong>Usage Logs:</strong> Retained for 90 days for security and analytics
              </li>
              <li>
                <strong>Transaction Records:</strong> Retained for 7 years for legal and tax compliance
              </li>
            </ul>

            <h2>Your Rights and Choices</h2>
            <p>You have the following rights regarding your personal data:</p>

            <h3>Access and Portability</h3>
            <ul>
              <li>
                <strong>View Your Data:</strong> Request a copy of all personal data we hold about you
              </li>
              <li>
                <strong>Data Export:</strong> Receive your data in a portable, machine-readable format
              </li>
            </ul>

            <h3>Correction and Deletion</h3>
            <ul>
              <li>
                <strong>Update Information:</strong> Correct any inaccurate or incomplete data
              </li>
              <li>
                <strong>Delete Account:</strong> Request permanent deletion of your account and associated data
              </li>
              <li>
                <strong>Right to be Forgotten:</strong> Request erasure of your personal data (with legal exceptions)
              </li>
            </ul>

            <h3>Control and Consent</h3>
            <ul>
              <li>
                <strong>Opt-Out:</strong> Unsubscribe from promotional emails at any time
              </li>
              <li>
                <strong>Cookie Management:</strong> Control cookie preferences in your browser settings
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Revoke previously given consent for data processing
              </li>
            </ul>

            <h3>How to Exercise Your Rights</h3>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:privacy@imakepdf.site" className="text-primary hover:underline">
                privacy@imakepdf.site
              </a>
              . We will respond to your request within 30 days.
            </p>

            <h2>Third-Party Services</h2>
            <p>We use the following third-party services that may collect data:</p>

            <h3>Google Analytics</h3>
            <p>
              For website traffic analysis and user behavior insights. Google Analytics uses cookies to collect
              anonymous usage data.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Privacy Policy
              </a>
            </p>

            <h3>Google AdSense</h3>
            <p>
              For displaying advertisements. Google may use cookies for personalized advertising. You can opt-out at{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Ads Settings
              </a>
            </p>

            <h3>Vercel (Hosting)</h3>
            <p>
              Our website is hosted on Vercel's infrastructure. Vercel may collect technical logs for performance
              monitoring.{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Vercel Privacy Policy
              </a>
            </p>

            <h3>Supabase (Database)</h3>
            <p>
              We use Supabase for secure data storage and authentication.{" "}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Supabase Privacy Policy
              </a>
            </p>

            <h2>International Data Transfers</h2>
            <p>
              Your data may be transferred to and processed in countries other than your country of residence. We ensure
              adequate protection through:
            </p>
            <ul>
              <li>Standard contractual clauses approved by regulatory authorities</li>
              <li>Compliance with GDPR for EU users</li>
              <li>Compliance with CCPA for California users</li>
              <li>Adequate safeguards in accordance with applicable data protection laws</li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and believe your child has provided us
              with personal information, please contact us at{" "}
              <a href="mailto:privacy@imakepdf.site" className="text-primary hover:underline">
                privacy@imakepdf.site
              </a>{" "}
              and we will delete such information.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time to reflect changes in our practices, technology, legal
              requirements, or other factors. We will notify you of any material changes by:
            </p>
            <ul>
              <li>Posting the updated policy on this page with a new "Last updated" date</li>
              <li>Sending an email notification to registered users</li>
              <li>Displaying a prominent notice on our website</li>
            </ul>
            <p>Continued use of our services after changes constitutes acceptance of the updated policy.</p>

            <h2>Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this privacy policy or our data practices, please
              contact us:
            </p>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@imakepdf.site" className="text-primary hover:underline">
                  privacy@imakepdf.site
                </a>
              </li>
              <li>
                <strong>General Inquiries:</strong>{" "}
                <a href="mailto:support@imakepdf.site" className="text-primary hover:underline">
                  support@imakepdf.site
                </a>
              </li>
              <li>
                <strong>Data Protection Officer:</strong>{" "}
                <a href="mailto:dpo@imakepdf.site" className="text-primary hover:underline">
                  dpo@imakepdf.site
                </a>
              </li>
            </ul>
            <p>We are committed to resolving privacy concerns and will respond to your inquiry within 30 days.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
