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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We'd love to hear from you! Reach out to us with any questions or inquiries.
                </p>
              </div>
              <div className="w-full max-w-md space-y-8 mt-8">
                <div className="space-y-4 text-center">
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
                  <div className="flex items-center justify-center gap-2 mt-2">
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
        
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Reviews</h2>
              </div>
            </div>
            <div className="mx-auto grid gap-6 pt-12 sm:grid-cols-1 md:grid-cols-3 lg:gap-8">
              <Card className="flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "New to VIAA but already impressed! The onboarding was smooth, and our VA delivers exceptional value. Now I can focus on strategic growth while knowing the daily operations are in capable hands."
                  </p>
                  <div>
                    <p className="text-sm font-medium">Kirsty</p>
                    <p className="text-xs text-muted-foreground">Founder | The Booty Co</p>
                  </div>
                </div>
              </Card>
              
              <Card className="flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "Having worked with Callum previously, I knew VIAA would deliver excellence. Their customer support solutions have exceeded expectations, bringing efficiency and quality to our operations."
                  </p>
                  <div>
                    <p className="text-sm font-medium">Brad CM</p>
                    <p className="text-xs text-muted-foreground">Founder | Matcha Made</p>
                  </div>
                </div>
              </Card>
              
              <Card className="flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "Our VA's expertise in lead generation has been remarkable. The seamless onboarding process led to immediate results, and their ability to identify quality prospects in Sydney has been invaluable."
                  </p>
                  <div>
                    <p className="text-sm font-medium">Lachlan Beale</p>
                    <p className="text-xs text-muted-foreground">Founder | Presence Productions</p>
                  </div>
                </div>
              </Card>
              
              <Card className="flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "VIAA's innovative approach to LinkedIn networking has been exceptional. Their VA's expertise with AI tools and custom GPT integration has revolutionized our outreach strategy and connection building."
                  </p>
                  <div>
                    <p className="text-sm font-medium">Matteo Castiello</p>
                    <p className="text-xs text-muted-foreground">Managing Director | Insurgence AI</p>
                  </div>
                </div>
              </Card>
              
              <Card className="flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "Working with VIAA has been seamless. With their help handling customer inquiries, we've expanded order volume without compromising service quality—a standout team that feels like an integral part of our business."
                  </p>
                  <div>
                    <p className="text-sm font-medium">Scarlet Robertson</p>
                    <p className="text-xs text-muted-foreground">Founder | Scarlet & Sam</p>
                  </div>
                </div>
              </Card>
              
              <Card className="flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "Our social media presence has flourished with VIAA's assistance. Their VAs' expertise with ShipHero and seamless coordination with Future Fulfillment ensures smooth operations and quick issue resolution."
                  </p>
                  <div>
                    <p className="text-sm font-medium">Alicia Parr</p>
                    <p className="text-xs text-muted-foreground">Founder | Keep That Pump</p>
                  </div>
                </div>
              </Card>
              
              <Card className="flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "VIAA transformed our customer support operations. Response times dropped to 20 minutes, and our local team can now focus on strategic growth. They've helped us maintain our commitment to exceptional service quality."
                  </p>
                  <div>
                    <p className="text-sm font-medium">Nick Forge</p>
                    <p className="text-xs text-muted-foreground">CEO | Future Fulfilment</p>
                  </div>
                </div>
              </Card>
              
              <Card className="flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "A year with VIAA has elevated our entire operation. Their VAs bring unmatched professionalism and expertise, making them an invaluable extension of our team. Highly recommended for businesses seeking quality support."
                  </p>
                  <div>
                    <p className="text-sm font-medium">Gabi Nedelko</p>
                    <p className="text-xs text-muted-foreground">Co-founder | Creative Converters</p>
                  </div>
                </div>
              </Card>
              
              <Card className="flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "VIAA's impact on our operations has been transformative. Their VAs have streamlined our processes and boosted productivity beyond expectations. Their expertise has been instrumental in our growth."
                  </p>
                  <div>
                    <p className="text-sm font-medium">Luke Jackson</p>
                    <p className="text-xs text-muted-foreground">Founder | ScaleUp</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
