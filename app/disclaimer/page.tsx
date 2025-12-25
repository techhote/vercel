import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Disclaimer | imakepdf.site",
  description: "Legal disclaimer and terms of use for imakepdf.site PDF tools and services.",
}

export default function DisclaimerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Disclaimer</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <h2>Website Disclaimer</h2>
          <p>
            The information provided by imakepdf.site ("we," "us," or "our") on https://imakepdf.site (the "Site") is
            for general informational purposes only. All information on the Site is provided in good faith, however we
            make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy,
            validity, reliability, availability, or completeness of any information on the Site.
          </p>

          <h2>Professional Disclaimer</h2>
          <p>
            The Site cannot and does not contain professional advice. The PDF tools and information are provided for
            general informational and educational purposes only and are not a substitute for professional advice.
          </p>

          <p>
            Accordingly, before taking any actions based upon such information, we encourage you to consult with the
            appropriate professionals. We do not provide any kind of professional advice.
          </p>

          <h2>No Warranties</h2>
          <p>
            The use or reliance of any information contained on this Site is solely at your own risk. Under no
            circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of
            the use of the Site or reliance on any information provided on the Site.
          </p>

          <h2>PDF Processing Disclaimer</h2>
          <p>While we strive to provide accurate and reliable PDF processing services, we cannot guarantee:</p>
          <ul>
            <li>Perfect preservation of all document formatting and layout</li>
            <li>100% accurate conversions between different file formats</li>
            <li>Compatibility with all PDF specifications and versions</li>
            <li>Uninterrupted or error-free service</li>
          </ul>

          <h2>File Security and Privacy</h2>
          <p>We take reasonable measures to secure your uploaded files, including:</p>
          <ul>
            <li>SSL/TLS encryption during file transmission</li>
            <li>Automatic file deletion after 24 hours</li>
            <li>Secure server infrastructure</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot
            guarantee absolute security of your files.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            The Site may contain links to other websites or content belonging to or originating from third parties. We
            do not investigate, monitor, or check such external links for accuracy, adequacy, validity, reliability,
            availability, or completeness.
          </p>

          <h2>Errors and Omissions</h2>
          <p>
            While we have made every attempt to ensure that the information contained in this Site has been obtained
            from reliable sources, imakepdf.site is not responsible for any errors or omissions or for the results
            obtained from the use of this information.
          </p>

          <h2>Fair Use</h2>
          <p>
            This Site may use copyrighted material which has not always been specifically authorized by the copyright
            owner. We make such material available for criticism, comment, news reporting, teaching, scholarship, or
            research.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer, please contact us at{" "}
            <a href="mailto:legal@imakepdf.site">legal@imakepdf.site</a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
