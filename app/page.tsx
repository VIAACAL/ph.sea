import Link from "next/link"
import { Star, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { CustomersSection } from "@/components/customers-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">VIAA</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#customers" className="text-sm font-medium transition-colors hover:text-primary">
              Customers
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium transition-colors hover:text-primary">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
            <Button size="sm" className="hidden md:flex" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-20 md:pt-28 lg:pt-32 xl:pt-40 pb-12 md:pb-24 lg:pb-32 xl:pb-36 overflow-hidden relative">
          {/* Decorative Image - Clay Hands */}
          <div className="absolute left-0 bottom-0 z-0 pointer-events-none">
            <img 
              src="/clay-hands-side.png" 
              alt="Decorative clay hands" 
              className="max-w-[300px] md:max-w-[400px] lg:max-w-[450px] opacity-95 translate-x-[-10%] sm:translate-x-0"
            />
          </div>
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6 max-w-4xl mt-4 md:mt-8">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Your Customer Support Inbox, Handled <span className="block mt-2 md:mt-4">— From Just $8 USD/Hour.</span>
                </h1>
                <div className="mx-auto max-w-[900px] text-muted-foreground">
                  <p className="text-center text-sm sm:text-base md:text-lg font-medium text-black relative z-10 px-1 py-0.5 rounded backdrop-blur-sm bg-white/40 shadow-sm inline-block">
                    Expert eCom agents — pre-vetted, fully trained, and ready to plug in today.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 mt-12 justify-center">
                <Button className="inline-flex px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-colors items-center justify-center bg-black text-white max-w-fit mx-auto" asChild>
                  <Link href="/contact">
                    Contact us
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </Button>
              </div>
              
              {/* Trust Banner */}
              <div className="w-full mt-28 md:mt-40">
                <p className="text-xs uppercase tracking-wider text-black font-semibold mb-12 text-center relative z-10 px-2 py-1 rounded backdrop-blur-sm bg-white/40 shadow-sm inline-block">
                  POWERING CUSTOMER SUPPORT FOR ECOM BRANDS IN AU, NZ & THE US.
                </p>
                
                <div className="flex flex-col items-center max-w-xs mx-auto text-center">
                  <div className="mb-4">
                    <div className="flex items-center justify-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                      <span className="text-sm font-medium text-muted-foreground ml-2">4.9 rating</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-center">
                      <span className="text-sm font-semibold text-black relative z-10 px-1 py-0.5 rounded backdrop-blur-sm bg-white/40 shadow-sm inline-block">3K+ hours saved weekly—reinvested in growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Reviews */}
        <div className="w-full py-6 md:py-12">
          <TestimonialsSection />
        </div>

        {/* Our Services */}
        <section id="services" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 pt-12">
              <div className="space-y-4">
                <p>Every eCom founder knows this painful truth: <strong>growth stalls when support can't scale.</strong></p>
                
                <p>Support isn't just a box to tick — it's a growth lever. When customers don't get fast, helpful replies, they churn. You lose trust. You lose revenue.</p>
                
                <p>That's where VIAA comes in.</p>
                
                <p>We plug in fast with <strong>expert VAs trained in Shopify, Gorgias, Zendesk, and more</strong> — ready to start today.</p>
                
                <p>We extract past tickets using <strong>custom software</strong> and analyse them with AI to match your brand tone, update macros, and <strong>sound just like you.</strong> That means faster onboarding — and agents who are ready to hit the ground running.</p>
                
                <p><strong>Support that feels in-house — without the overhead.</strong></p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg" style={{ height: '350px', width: '350px' }}>
                  <img
                    src="/inbox_buried_notes.gif"
                    alt="Founder buried in support tickets"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Customers */}
        <CustomersSection />

        {/* About VIAA */}
        <section id="about" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why VIAA?</h2>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 pt-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter mt-0 mb-4">You Don't Need to Be in the Inbox Anymore.</h3>
                
                <p>Whether you're doing support yourself, have one person hanging on by a thread, or you're scaling a team—there's a smarter way.</p>
                
                <p>At VIAA, we give e-commerce brands <strong>plug-and-play customer support VAs</strong> from the Philippines, trained in the real world on your tech stack—including fully optimizing your 3PL software.</p>
                
                <p>We run our own Shopify brand, so every VA we place is <strong>tested against real-world standards</strong>—no guesswork, no fluff. Just proven, reliable support.</p>
                
                <h3 className="text-2xl font-bold tracking-tighter mt-8 mb-4">This means:</h3>
                
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>You stop being the backup support agent when things go sideways.</li>
                  <li>You keep your current team focused on higher-value work.</li>
                  <li>You finally get weekend and overflow coverage—without doubling your costs.</li>
                </ul>
                
                <h3 className="text-2xl font-bold tracking-tighter mt-8 mb-4">Flexible. Reliable. Cancel anytime.</h3>
                
                <p>Why pay western salaries and benefits for a role that doesn't drive revenue?</p>
                
                <p><strong>Let us take it off your plate—from $8/hr USD.</strong></p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md overflow-hidden" style={{ height: '350px', width: '350px' }}>
                  <img
                    src="/clay-hands-2.png"
                    alt="Decorative clay hands illustration"
                    className="w-full h-full object-contain bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="w-full py-6 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Flexible plans to meet your business needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 pt-12 sm:grid-cols-1 md:grid-cols-3 lg:gap-8 max-w-5xl">
              <div className="relative flex flex-col overflow-hidden rounded-lg border bg-background">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Standard</h3>
                  <p className="text-sm text-muted-foreground mt-1">Less than 20 hours pw</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-muted-foreground line-through text-lg">$11</span>
                    <span className="text-5xl font-bold">$10</span>
                    <span className="text-sm text-muted-foreground">p/h usd</span>
                  </div>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Client-VA matching</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Onboarding into your systems</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Performance reviews</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>EOD reporting</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Whatsapp group for daily comms</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>SOP creation of tasks</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Screen monitoring of VA & analytics</span>
                    </li>
                  </ul>
                  <Button className="mt-8 w-full" asChild>
                    <Link href="/contact">Get started</Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex flex-col overflow-hidden rounded-lg border-2 border-primary bg-background shadow-lg">
                <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Popular
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-sm text-muted-foreground mt-1">20-42 hours pw</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-muted-foreground line-through text-lg">$10</span>
                    <span className="text-5xl font-bold">$9</span>
                    <span className="text-sm text-muted-foreground">p/h usd</span>
                  </div>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Client-VA matching</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Onboarding into your systems</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Performance reviews</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>EOD reporting</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Whatsapp group for daily comms</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>SOP creation of tasks</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Screen monitoring of VA & analytics</span>
                    </li>
                  </ul>
                  <Button className="mt-8 w-full" asChild>
                    <Link href="/contact">Get started</Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex flex-col overflow-hidden rounded-lg border bg-background">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-sm text-muted-foreground mt-1">42 hours + pw</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-muted-foreground line-through text-lg">$9</span>
                    <span className="text-5xl font-bold">$8</span>
                    <span className="text-sm text-muted-foreground">p/h usd</span>
                  </div>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Client-VA matching</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Onboarding into your systems</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Performance reviews</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>EOD reporting</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Whatsapp group for daily comms</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>SOP creation of tasks</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Screen monitoring of VA & analytics</span>
                    </li>
                  </ul>
                  <Button className="mt-8 w-full" asChild>
                    <Link href="/contact">Get started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Success Story */}
        <section id="success-story" className="w-full py-16 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex items-center justify-center lg:order-last">
                <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/success-story.jpg"
                    alt="VIAA Success Story - PrePlay"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Story</h2>
                  <p className="text-muted-foreground md:text-xl leading-relaxed">
                    How VIAA helped PrePlay scale without the burnout.
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-lg">
                    We were deep in the inbox, juggling customer support while trying to grow PrePlay. It was overwhelming — slow replies, missed messages, and no time to think about strategy.
                  </p>
                  <p className="text-lg">
                    Then VIAA dropped in the perfect VA — already trained in Gorgias, Shopify, Slack, and ShipHero. They even pulled our past tickets to match our tone with AI. Now we just approved/ tweak their marco suggestions on autopilot!
                  </p>
                  <p className="text-lg">
                    Within days, the pressure was off. Support's faster. Customers are happier. And we've finally got space to chase bigger moves.
                  </p>
                  <p className="text-lg font-semibold">
                    This is support that works.
                  </p>
                </div>
                <div className="pt-6">
                  <Button variant="outline" size="lg" className="font-medium">
                    Read More Success Stories
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about our services.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl pt-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we believe in a mutually beneficial business relationship. You're free to cancel anytime with
                    just one week's notice—no questions asked.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do you ensure VA reliability?</AccordionTrigger>
                  <AccordionContent>
                    We use advanced screen monitoring tools that you have full view access to. Any inactivity
                    automatically pauses invoicable hours. Additionally, you'll have a dedicated WhatsApp group chat
                    where you can communicate directly with your VA and our team. We assist with setting up KPIs and
                    end-of-day reports to ensure accountability and performance tailored to your business.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What currency do you charge?</AccordionTrigger>
                  <AccordionContent>
                    We invoice in AUD, converting USD on the day of billing. International payments can be made via:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Stripe (surcharge applies)</li>
                      <li>WISE International Payments (no surcharge)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do you match me with a VA?</AccordionTrigger>
                  <AccordionContent>
                    Our full-time recruitment team sources top-tier VA talent. The shortlist is personally curated by
                    our founder to ensure quality. On our call, we'll discuss your needs in detail to match you with the
                    best fit. You'll have multiple VAs to choose from and the flexibility to switch if needed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What about holidays and sick leave?</AccordionTrigger>
                  <AccordionContent>
                    Our VAs operate on a contractual basis, so you only pay for hours worked. There are no additional
                    charges for holidays, weekends, or sick leave.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">VIAA</div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline underline-offset-4">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
