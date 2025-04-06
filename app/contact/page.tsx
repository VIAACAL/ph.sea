import Link from "next/link"
import { ArrowLeft, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { EmailCopyButton } from "@/components/email-copy-button"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center text-sm font-medium transition-colors hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 md:py-10">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  We'd love to hear from you! Reach out to us with any questions or inquiries.
                </p>
              </div>
              <div className="w-full max-w-md space-y-4 mt-4">
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-medium">Get in touch with us:</h3>
                  <div className="flex items-center justify-center gap-4">
                    <Button asChild className="min-w-[120px] w-auto">
                      <a href="mailto:support@viaa.so" className="text-white">
                        Email
                      </a>
                    </Button>
                    <Button asChild className="min-w-[120px] w-auto bg-green-600 hover:bg-green-700">
                      <a href="https://wa.me/61487216747" target="_blank" className="text-white">
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="text-muted-foreground">Email: </span>
                    <a href="mailto:support@viaa.so" className="text-blue-500 hover:text-blue-700 font-medium">
                      support@viaa.so
                    </a>
                    <EmailCopyButton email="support@viaa.so" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-4 md:py-6">
          <div className="container px-4 md:px-6 flex flex-col items-center">
            <div className="mt-2 mb-4 max-w-2xl">
              <img
                src="/ChatGPT Image Apr 6, 2025 at 08_44_50 AM.png"
                alt="VIAA Customer Support Illustration"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
