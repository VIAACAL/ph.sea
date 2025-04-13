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
          <div className="flex items-center">
            <img
              src="/viaa-logo.png"
              alt="VIAA Logo"
              className="h-12 sm:h-16 w-auto"
            />
          </div>
          <div className="flex-1 flex justify-center max-w-md mx-auto px-4">
            <nav className="flex gap-2 sm:gap-3 md:gap-6 overflow-x-auto no-scrollbar">
              <Link href="#services" className="text-xs sm:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">
                Services
              </Link>
              <Link href="#customers" className="text-xs sm:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">
                Customers
              </Link>
              <Link href="#about" className="text-xs sm:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">
                About
              </Link>
              <Link href="#pricing" className="text-xs sm:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">
                Pricing
              </Link>
              <Link href="#faq" className="text-xs sm:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <Button size="sm" className="text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-3 h-auto" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-6 md:pt-10 lg:pt-12 xl:pt-16 pb-12 md:pb-24 lg:pb-32 xl:pb-36 overflow-hidden relative">
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
              <div className="space-y-4 text-center lg:text-left">
                <p>Hiring a VA is easy.</p>
                
                <p>Building a high-performance CS system? That's what we do.</p>
                
                <p>Here's what makes VIAA different:</p>
                
                <p>✅ AI-onboarded VAs trained on your ticket history — up to speed fast.</p>
                
                <p>✅ No micro-managing. Our VAs hit KPIs, manage your tools, and run support solo.</p>
                
                <p>✅ Weekly reviews by a CS manager who looks for ways to simplify, speed up, and improve your support flow.</p>
                
                <p>📈 Helped grow one of Australia's top 3PLs. Now it's a done-for-you service for Shopify brands.</p>
                
                <p>Cost:
                  <br />• <strong>Outsourced via VIAA: AUD 96/day</strong>
                  <br />• In-house (Australia): AUD 250/day
                </p>
              </div>
              <div className="flex items-center justify-center mt-12 lg:mt-0">
                <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg" style={{ height: '350px', width: '350px' }}>
                  <img
                    src="/your-inbox-shouldnt-look-like0-this.gif"
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
              <div className="space-y-6 text-center lg:text-left">
                <div>
                  <h3 className="text-xl font-bold mb-4">❌ Most eCom brands hit a point where support becomes a mess:</h3>
                  <ul className="space-y-3">
                    <li>❌ Sales spike, support slips. CX tanks.</li>
                    <li>❌ You're still hiring, training, managing — instead of scaling.</li>
                    <li>❌ Your team's buried in refunds, tracking updates, "where's my order?" hell.</li>
                    <li>❌ Local reps cost $60K+ and still don't cover weekends.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">✅ Here's what VIAA fixes — fast:</h3>
                  
                  <div className="space-y-4">
                    <p><span className="text-green-500 font-bold">✅</span> <strong>Full CS teams or fractional support</strong> — whatever your brand needs right now.
                    <br />Some clients plug us in to back up their in-house team. Others hand us the whole thing.</p>
                    
                    <p><span className="text-green-500 font-bold">✅</span> <strong>Shopify-trained VAs, vetted from hundreds</strong>, trained with AI, and fully managed by us.
                    <br />You're not hiring a helper. You're plugging into a system that's built to perform.</p>
                    
                    <p><span className="text-green-500 font-bold">✅</span> <strong>Onboarded by AI</strong> — trained on your ticket history.
                    <br />We extract + analyse thousands of past tickets so our VAs sound like they've been on your team for years — from day one.</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:flex lg:flex-col mt-12 lg:mt-0">
                <div className="flex items-center justify-center mb-8">
                  <div className="relative w-full max-w-md overflow-hidden" style={{ height: '350px', width: '350px' }}>
                    <img
                      src="/clay-hands-2.png"
                      alt="Decorative clay hands illustration"
                      className="w-full h-full object-contain bg-transparent"
                    />
                  </div>
                </div>
                
                <div className="space-y-4 mt-4 text-center lg:text-left">
                  <p><span className="text-green-500 font-bold">✅</span> <strong>Shared Management.</strong>
                  <br />A dedicated optimisation manager tracks KPIs, reviews workflows weekly, and makes efficiency suggestions. You stay out of the weeds.</p>
                  
                  <p><span className="text-green-500 font-bold">✅</span> <strong>No more inbox chaos</strong> during launches, weekends, or viral spikes.
                  <br />You get consistent coverage that flexes with demand.</p>
                  
                  <p><span className="text-green-500 font-bold">✅</span> <strong>We're cheaper than in-house</strong> — and way more scalable.
                  <br />From $8/hr USD, fully managed. Cancel anytime. No long-term contracts.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Expert Customer Support
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Without the expert price.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 pt-12 sm:grid-cols-1 md:grid-cols-3 lg:gap-8 max-w-5xl">
              <div className="relative flex flex-col overflow-hidden rounded-lg border bg-background order-3 md:order-1">
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
                  <div className="mt-8 flex justify-end">
                    <div className="w-full flex">
                      <div className="w-1/6"></div>
                      <div className="w-1/3"></div>
                      <div className="flex-1 flex justify-end">
                        <Button className="w-auto" asChild>
                          <Link href="/contact">Get started</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col overflow-hidden rounded-lg border-2 border-primary bg-background shadow-lg order-2 md:order-2">
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
                  <div className="mt-8 flex justify-end">
                    <div className="w-full flex">
                      <div className="w-1/6"></div>
                      <div className="w-1/3"></div>
                      <div className="flex-1 flex justify-end">
                        <Button className="w-auto" asChild>
                          <Link href="/contact">Get started</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col overflow-hidden rounded-lg border bg-background order-1 md:order-3">
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
                  <div className="mt-8 flex justify-end">
                    <div className="w-full flex">
                      <div className="w-1/6"></div>
                      <div className="w-1/3"></div>
                      <div className="flex-1 flex justify-end">
                        <Button className="w-auto" asChild>
                          <Link href="/contact">Get started</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
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
              <div className="space-y-8 text-center md:text-left">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Story</h2>
                  <p className="text-muted-foreground md:text-xl leading-relaxed">
                    How VIAA helped PrePlay scale without the burnout.
                  </p>
                </div>
                <div className="space-y-6">
                  <p>
                    We were deep in the inbox, juggling customer support while trying to grow PrePlay. It was overwhelming — slow replies, missed messages, and no time to think about strategy.
                  </p>
                  <p>
                    Then VIAA dropped in the perfect VA — already trained in Gorgias, Shopify, Slack, and ShipHero. They even pulled our past tickets to match our tone with AI. Now we just approved/ tweak their marco suggestions on autopilot!
                  </p>
                  <p>
                    Within days, the pressure was off. Support's faster. Customers are happier. And we've finally got space to chase bigger moves.
                  </p>
                  <p className="font-semibold">
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

        {/* Second Success Story */}
        <section id="success-story-2" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Story</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  How VIAA helped Future Fulfilment streamline customer ops across 150+ brands.
                </p>
              </div>
            </div>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center pt-12">
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/success-story-2.jpg"
                    alt="VIAA Success Story - Second Client"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="space-y-8 text-center md:text-left">
                <div className="space-y-6">
                  <p>
                    With 150+ brands under management, we needed support that felt personal — not robotic. Customers wanted direct contact, fast answers, and someone who actually knew their business.
                  </p>
                  <p>
                    VIAA made that possible. Their VAs understood Shopify, ShipHero, and Slack inside out — even setting up advanced automation rules and mapping variable shipping rates by postcode.
                  </p>
                  <p>
                    They helped us build a Slack-based support hub, giving brands a dedicated go-to person for everything from returns to order issues. It felt fast, human, and reliable.
                  </p>
                  <p>
                    Now our in-house and 3PL teams stay focused on complex problems — while VIAA keeps the day-to-day running smooth.
                  </p>
                  <p className="font-semibold">
                    This is support that scales.
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

        {/* AI Section */}
        <section id="ai" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How VIAA is using AI
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Customer Support that adapts fast & works independently.
                </p>
              </div>
            </div>
            <div className="flex justify-center pt-12 pb-8">
              <div className="relative" style={{ width: '90%', maxWidth: '850px' }}>
                <div style={{
                  maxWidth: '100%',
                  background: 'transparent',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <img
                    src="/ai-example-2.png"
                    alt="VIAA AI Implementation"
                    className="w-auto h-auto"
                    style={{
                      maxWidth: '100%',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                      marginTop: '10px',
                      marginBottom: '10px'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full py-12 md:py-24 bg-muted/50">
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
              <Accordion type="single" collapsible className="w-full mobile-centered-accordion">
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
          <div className="flex items-center gap-2">
            <img
              src="/viaa-logo.png"
              alt="VIAA Logo"
              className="h-16 w-auto"
            />
          </div>
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
