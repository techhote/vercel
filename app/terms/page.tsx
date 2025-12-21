import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using imakepdf.site, you agree to be bound by these Terms of Service and our Privacy Policy.
            If you do not agree, please do not use our services.
          </p>

          <h2>Description of Service</h2>
          <p>
            imakepdf.site provides online PDF manipulation tools including merging, splitting, converting, compressing,
            and generating PDF files.
          </p>

          <h2>User Accounts</h2>
          <ul>
            <li>You must be at least 13 years old to create an account</li>
            <li>You are responsible for maintaining the security of your account</li>
            <li>You must provide accurate information when creating an account</li>
            <li>One person or entity may not maintain multiple accounts</li>
          </ul>

          <h2>Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Upload files containing illegal, harmful, or offensive content</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use the service to send spam or malicious content</li>
            <li>Reverse engineer or attempt to extract source code</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>

          <h2>File Storage and Deletion</h2>
          <p>
            All uploaded files are automatically deleted after 24 hours. We are not responsible for any data loss. You
            should maintain your own backups of important files.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            You retain all rights to files you upload. We do not claim ownership of your content. Our service, design,
            and code are protected by copyright and other intellectual property laws.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            imakepdf.site is provided as-is without warranties. We are not liable for any damages arising from your use
            of the service, including but not limited to data loss, service interruptions, or errors in file processing.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the service after changes
            constitutes acceptance of the new terms.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, contact us at <a href="mailto:legal@imakepdf.site">legal@imakepdf.site</a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
