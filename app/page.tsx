import Link from "next/link"
import { Star, Check } from "lucide-react" // Reverted imports
// import { ThemeToggle } from "@/components/theme-toggle" // Removed
import { ServicesVideoPlayer } from "@/components/services-video-player" // Import new component

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
          <div className="flex items-center gap-3"> {/* Reverted: Removed WhatsApp icon */}
            <Button size="sm" className="text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-3 h-auto" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section ... (content remains the same) ... */}
        <section className="w-full pt-12 md:pt-20 lg:pt-24 xl:pt-28 pb-6 md:pb-12 lg:pb-16 xl:pb-20 overflow-hidden relative bg-background text-black">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6 max-w-4xl mt-4 md:mt-8">
                <h1 className="text-4xl font-black tracking-tighter sm:font-bold sm:text-5xl md:text-6xl lg:text-7xl/tight">
                  Top 1% Virtual Assistants
                </h1>
                <div className="mx-auto max-w-[900px]">
                  <p className="text-center text-sm md:text-base font-medium text-neutral-700">
                    Customer Support E-commerce Specialists.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-[-16px] my-8">
                {Array.from({ length: 12 }).map((_, i) => {
                  // Use placeholder for the 4th item (index 3)
const imgSrc = i === 3 
  ? "/placeholder-logo.png" 
  : `/customers/success-story${i + 1}.png`;
const altText = i === 3 
  ? "" // Empty alt text for placeholder
  : `Customer ${i + 1}`;
                  
                  return (
                    <img
                      key={i}
                      src={imgSrc}
                      alt={altText}
                      className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    />
                  );
                })}
              </div>
              <div className="flex flex-col sm:flex-row gap-5 mt-8 justify-center">
                <Button 
                  className="group inline-flex px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-colors items-center justify-center bg-black text-white hover:bg-neutral-800 max-w-fit mx-auto" 
                  asChild
                >
                  <Link href="/contact">
                    Contact us
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </Button>
              </div>
              <div className="mt-8 md:mt-10">
                <p className="text-center text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300">
                  Qualified in your software stack.
                </p>
              </div>
              <div className="w-full max-w-2xl mx-auto mt-6 mb-12 md:mt-8 md:mb-16">
                <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
                  {[
                    "freshdesk.png", "front.png", "gorgias.png", "intercom.png", "liveagent.png", "livechat.png", "reamaze.png", "zendesk.png", "zoho.png",
                  ].map((iconName, i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 p-0.5 flex items-center justify-center transition-all duration-200 ease-in-out hover:scale-125 hover:z-10">
                      <img src={`/${iconName}`} alt={iconName.split('.')[0]} className="max-w-full max-h-full object-contain rounded-md" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services ... (content remains the same) ... */}
        <section id="services" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 pt-12">
              <div className="space-y-4 text-center lg:text-left order-2 lg:order-1 mt-12 lg:mt-0">
                <p>Hiring a VA is easy.</p><p>Finding the top 0.1 % from 1,000+ applicants each week — that's VIAA.</p><p>Here's what makes VIAA different:</p><p>✅ Founder owns an e-commerce brand and understands what's working today.</p><p>✅ We set clear targets from day one, maintain them consistently, and suggest improvements that boost efficiency.</p><p>✅ Real-time comms — message our business group chat for an immediate answer.</p><p>📈 Helped grow one of Australia's top 3 PLs — now a done-for-you service for Shopify brands.</p><p>Cost:<br />• <strong>Outsourced via VIAA: AUD 96/day</strong><br />• In-house (Australia): AUD 250/day</p>
                <div className="mt-20 text-center lg:text-left">
                  <h3 className="text-xl font-semibold mb-6">Additional Services</h3> 
                  <div className="space-y-5 pb-16 md:pb-24"> 
                    <p><Link href="/lead-generation" className="text-blue-600 dark:text-blue-400 hover:underline">Cold Outreach Lead Generation</Link></p>
                    <p><Link href="/executive-assistants" className="text-blue-600 dark:text-blue-400 hover:underline">Executive Assistants</Link></p>
                    <p><Link href="/ai-agents" className="text-blue-600 dark:text-blue-400 hover:underline">AI Agents</Link></p>
                    <p><Link href="/web-data-scraping" className="text-blue-600 dark:text-blue-400 hover:underline">Web Data Scraping</Link></p>
                    <p><Link href="/full-stack-support-ops" className="text-blue-600 dark:text-blue-400 hover:underline">Full-Stack Support Ops</Link></p>
                  </div>
                </div>
              </div>
              <div className="flex items-stretch justify-center order-1 lg:order-2"><ServicesVideoPlayer src="/copy_5C8C7FF0-9696-486C-AEE7-07ACFA2D2E62.MP4" className="w-full h-full object-cover rounded-lg"/></div>
            </div>
          </div>
        </section>

        {/* Our Customers ... (content remains the same) ... */}
        <CustomersSection />

        {/* About VIAA ... (content remains the same) ... */}
        <section id="about" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center"><div className="space-y-2"><h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why VIAA?</h2></div></div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 pt-12">
              <div className="space-y-6 text-center lg:text-left order-2 lg:order-1 mt-12 lg:mt-0">
                <div><h3 className="text-xl font-bold mb-4">Problems</h3><ul className="space-y-3"><li>❌ Sales spike, support slips — sick days, need weekend coverage.</li><li>❌ Still hiring, training, managing instead of scaling.</li><li>❌ Inbox buried in refunds, size changes, shipping-address edits.</li><li>❌ Local reps cost A$60 k+ and clock off at 5 p.m.</li></ul></div>
                <div><h3 className="text-xl font-bold mb-4">Solutions</h3><div className="space-y-4"><p><span className="text-green-500 font-bold">✅</span> Pre-curated experts across every major help-desk platform are on standby and can jump in today.</p><p><span className="text-green-500 font-bold">✅</span> We vet thousands for relevant experience, solid tech, and confident personalities — you stay focused on growth.</p><p><span className="text-green-500 font-bold">✅</span> Professional VIAA VAs clear the queue daily, leverage the latest ChatGPT o3 to troubleshoot, and liaise with your 3PL to keep CX exceptional.</p><p><span className="text-green-500 font-bold">✅</span> Fraction of that spend, with no surcharges for weekends, nights, or public holidays.</p></div></div>
              </div>
              <div className="lg:flex lg:flex-col order-1 lg:order-2"><div className="flex items-center justify-center mb-8"><div className="relative w-full max-w-md overflow-hidden"><img src="/placeholder.jpg" alt="WhatsApp animation" className="w-full h-auto object-contain bg-transparent rounded-lg"/></div></div></div>
            </div>
          </div>
        </section>

        {/* Pricing ... (content remains the same) ... */}
        <section id="pricing" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center"><div className="space-y-2"><h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Expert Customer Support</h2><p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">Without the expert price.</p></div></div>
            <div className="mx-auto grid gap-6 pt-12 sm:grid-cols-1 md:grid-cols-3 lg:gap-8 max-w-5xl">
              <div className="relative flex flex-col overflow-hidden rounded-lg border bg-background order-3 md:order-1"><div className="p-6"><h3 className="text-2xl font-bold">Standard</h3><p className="text-sm text-muted-foreground mt-1">Less than 20 hours pw</p><div className="mt-6 flex items-baseline gap-1"><span className="text-muted-foreground line-through text-lg">$11</span><span className="text-5xl font-bold">$10</span><span className="text-sm text-muted-foreground">p/h usd</span></div><ul className="mt-6 space-y-4"><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>Client-VA matching</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>Onboarding into your systems</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>Performance reviews</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>EOD reporting</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>Whatsapp group for daily comms</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>SOP creation of tasks</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>HubStaff monitoring of VA & analytics</span></li></ul><div className="mt-8 flex justify-end"><div className="w-full flex"><div className="w-1/6"></div><div className="w-1/3"></div><div className="flex-1 flex justify-end"><Button className="w-auto" asChild><Link href="/contact">Get started</Link></Button></div></div></div></div></div>
              <div className="relative flex flex-col overflow-hidden rounded-lg border-2 border-primary bg-background shadow-lg order-2 md:order-2"><div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Popular</div><div className="p-6"><h3 className="text-2xl font-bold">Pro</h3><p className="text-sm text-muted-foreground mt-1">20-42 hours pw</p><div className="mt-6 flex items-baseline gap-1"><span className="text-muted-foreground line-through text-lg">$10</span><span className="text-5xl font-bold">$9</span><span className="text-sm text-muted-foreground">p/h usd</span></div><ul className="mt-6 space-y-4"><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>Client-VA matching</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>Onboarding into your systems</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>Performance reviews</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>EOD reporting</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>Whatsapp group for daily comms</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>SOP creation of tasks</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>HubStaff monitoring of VA & analytics</span></li></ul><div className="mt-8 flex justify-end"><div className="w-full flex"><div className="w-1/6"></div><div className="w-1/3"></div><div className="flex-1 flex justify-end"><Button className="w-auto" asChild><Link href="/contact">Get started</Link></Button></div></div></div></div></div>
              <div className="relative flex flex-col overflow-hidden rounded-lg border bg-background order-1 md:order-3"><div className="p-6"><h3 className="text-2xl font-bold">Enterprise</h3><p className="text-sm text-muted-foreground mt-1">42 hours + pw</p><div className="mt-6 flex items-baseline gap-1"><span className="text-muted-foreground line-through text-lg">$9</span><span className="text-5xl font-bold">$8</span><span className="text-sm text-muted-foreground">p/h usd</span></div><ul className="mt-6 space-y-4"><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>Client-VA matching</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>Onboarding into your systems</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>Performance reviews</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>EOD reporting</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>Whatsapp group for daily comms</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>SOP creation of tasks</span></li><li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span>HubStaff monitoring of VA & analytics</span></li></ul><div className="mt-8 flex justify-end"><div className="w-full flex"><div className="w-1/6"></div><div className="w-1/3"></div><div className="flex-1 flex justify-end"><Button className="w-auto" asChild><Link href="/contact">Get started</Link></Button></div></div></div></div></div>
            </div>
          </div>
        </section>

        {/* AI Section ... (content remains the same) ... */}
        <section id="ai" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center"><div className="space-y-2"><h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How VIAA is using AI</h2><p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">WORLD'S MOST ADVANCED AI: GPT-5 Thinking (ChatGPT 5) — faster resolutions, less handholding, more productive hours.</p></div></div>
            <div className="flex justify-center pt-12 pb-8">
              <div className="relative" style={{ width: '90%', maxWidth: '850px' }}>
                <div style={{maxWidth: '100%', background: 'transparent', display: 'flex', justifyContent: 'center'}}>
                  <img src="/placeholder.jpg" alt="VIAA AI Custom GPT" className="w-full h-full object-cover" style={{borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', marginTop: '10px', marginBottom: '10px', maxWidth: '100%'}}/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story ... (content remains the same) ... */}
        <section id="success-story" className="w-full py-16 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex items-center justify-center lg:order-last"><div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg"><img src="/success-story.jpg" alt="VIAA Success Story - PrePlay" className="w-full h-auto object-cover"/></div></div>
              <div className="space-y-8 text-center md:text-left">
                <div className="space-y-4"><h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Story</h2><p className="text-muted-foreground md:text-xl leading-relaxed">How VIAA enables PrePlay to grow.</p></div>
                <div className="space-y-6"><p>At PrePlay, we handed customer support over to VIAA so we could stay focused on recording our podcast and growing the brand. Customer enquiries, returns, and logistics questions are now handled end-to-end, freeing us to create without distraction.</p><p>Our VA was up to speed on day one—already fluent in Gorgias and ShipHero, with perfect English. She clears the inbox daily, liaises with our manufacturer and 3PL, and sends a concise wrap-up in WhatsApp each night. This is support that works.</p></div>
                <div className="pt-6"><Button variant="outline" size="lg" className="font-medium">Read More Success Stories</Button></div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Success Story ... (content remains the same) ... */}
        <section id="success-story-2" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center"><div className="space-y-2"><h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Story</h2><p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">How VIAA helped Future Fulfilment streamline customer ops across 150+ brands.</p></div></div>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center pt-12">
              <div className="flex items-center justify-center"><div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg"><img src="/success-story-2.jpg" alt="VIAA Success Story - Second Client" className="w-full h-auto object-cover"/></div></div>
              <div className="space-y-8 text-center md:text-left">
                <div className="space-y-6"><p>With 150+ brands under management, we needed support that felt personal — not robotic. Customers wanted direct contact, fast answers, and someone who actually knew their business.</p><p>VIAA made that possible. Their VAs understood Shopify, ShipHero, and Slack inside out — even setting up advanced automation rules and mapping variable shipping rates by postcode.</p><p>They helped us build a Slack-based support hub, giving brands a dedicated go-to person for everything from returns to order issues. It felt fast, human, and reliable.</p><p>Now our in-house and 3PL teams stay focused on complex problems — while VIAA keeps the day-to-day running smooth.</p><p className="font-semibold">This is support that scales.</p></div>
                <div className="pt-6"><Button variant="outline" size="lg" className="font-medium">Read More Success Stories</Button></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full py-12 md:py-24"> {/* Removed bg-muted/50 */}
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
                    We run Hubstaff—time & login logs and a 10-minute idle cutoff to prevent idle time from being billed. You'll have a WhatsApp group for quick coordination with your VA and our team. We establish KPIs and EOD reports to drive accountability and results.
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

        {/* Transparency Section - UNCOMMENTED AND MOVED HERE */}
        <section id="transparency" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transparency
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Hubstaff tracking, login logs, 10-min idle cutoff—pay only for productive time.
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
                  <img src="/placeholder.jpg" alt="Hubstaff Tracking" className="w-full h-full object-cover" style={{borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', marginTop: '10px', marginBottom: '10px', maxWidth: '100%'}}/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />
      </main>
      <footer className="w-full py-6 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">© 2025 VIAA. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
