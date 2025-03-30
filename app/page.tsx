import Link from "next/link"
import { Star, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { CustomersSection } from "@/components/customers-section"

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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Streamline tasks. Unlock Growth. Be more productive
                </h1>
                <div className="mx-auto max-w-[900px] text-muted-foreground md:text-xl space-y-6">
                  <p className="text-center">
                    VIAA directly connects you with highly skilled outsourced professionals, experts with extensive
                    e-commerce experience. These curated professionals enable you to extend work hours through the
                    weekends, cover holidays, support your existing team, or restructure your current operations. Plus,
                    you can invest your savings back into the business. These solutions ensure your customers and
                    business receive the attention they deserve to be successful.
                  </p>
                  <p className="text-center font-medium">
                    Join the forward-thinking brands already transforming the way they work.{" "}
                    <span className="text-primary">Secure your spot with VIAA today</span>.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
                <Button className="w-full sm:w-auto" asChild>
                  <Link href="/contact">Email</Link>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/contact">WhatsApp</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Client Reviews */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Reviews</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  See what our clients have to say about our services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 pt-12 sm:grid-cols-1 md:grid-cols-3 lg:gap-8">
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    "VIAA transformed our customer support operations. Response times dropped to 20 minutes, and our
                    local team can now focus on strategic growth. They've helped us maintain our commitment to
                    exceptional service quality."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-muted h-10 w-10"></div>
                    <div>
                      <p className="text-sm font-medium">Nick Forge</p>
                      <p className="text-xs text-muted-foreground">CEO | Future Fulfilment</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    "A year with VIAA has elevated our entire operation. Their VAs bring unmatched professionalism and
                    expertise, making them an invaluable extension of our team. Highly recommended for businesses
                    seeking quality support."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-muted h-10 w-10"></div>
                    <div>
                      <p className="text-sm font-medium">Gabi Nedelko</p>
                      <p className="text-xs text-muted-foreground">Co-founder | Creative Converters</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    "VIAA's impact on our operations has been transformative. Their VAs have streamlined our processes
                    and boosted productivity beyond expectations. Their expertise has been instrumental in our growth."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-muted h-10 w-10"></div>
                    <div>
                      <p className="text-sm font-medium">Luke Jackson</p>
                      <p className="text-xs text-muted-foreground">Founder | ScaleUp</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive virtual assistance solutions for your business needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 pt-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
              {[
                { title: "Customer Support", description: "24/7 customer service and support for your clients." },
                {
                  title: "Executive Assistance",
                  description: "Professional assistance for executives and management teams.",
                },
                { 
                  title: "Lead Generation", 
                  description: "Strategic lead generation and qualification to grow your business." 
                },
                {
                  title: "Bookkeeping",
                  description: "Professional bookkeeping and financial record management services.",
                },
              ].map((service, i) => (
                <div key={i} className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Customers */}
        <CustomersSection />

        {/* About VIAA */}
        <section id="about" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Who is the Founder of VIAA?
                  </h2>
                  <div className="space-y-4">
                    <p>
                      My name is Callum, and VIAA was a natural next step after working as Head Account Manager at
                      Australia's fastest-growing 3PL. I worked with hundreds of Shopify brands daily, helping them
                      optimise operations between their stores and fulfilment. Through these personal relationships, I
                      saw firsthand the biggest challenges Shopify brands face—and I created VIAA as a solution.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter">What Makes VIAA Different?</h3>
                  <div className="space-y-4">
                    <p>
                      I run a Shopify brand myself. This means I actively test and refine real-world solutions before
                      implementing them for clients. Every VIAA assistant is trained to handle the same issues I face in
                      my own business, ensuring they're equipped for the realities of e-commerce. They have access to
                      paid AI tools, to improve productivity—not just reduce costs. With no lock-in contracts, you can
                      scale up or down as needed.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter">The VIAA Vision</h3>
                  <div className="space-y-4">
                    <p>
                      We're building AI solutions into operations. Our MCP integration allows businesses to connect
                      large language models directly to their own files and any customer support platform. Unlike AI
                      tools locked into platforms like Gorgias, Zendesk etc our solution works across email, WhatsApp,
                      live chat—anywhere. You can customise your company tone, rather than forcing you into a
                      one-size-fits-all. This is something we haven't seen before, and we're making it possible.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-lg">
                  <div className="aspect-square h-full w-full bg-muted"></div>
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

        {/* Reviews */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Reviews</h2>
              </div>
            </div>
            <div className="mx-auto grid gap-6 pt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section id="success-story" className="w-full py-16 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex items-center justify-center order-last lg:order-first">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div className="aspect-square h-full w-full bg-muted"></div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Story</h2>
                  <p className="text-muted-foreground md:text-xl leading-relaxed">
                    How VIAA helped PrePlay scale without the growing pains.
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-lg">
                    PrePlay, a fast-growing intimacy brand, was overwhelmed with customer queries and lacked the time to
                    pursue high-quality leads. After partnering with VIAA, they saw a 45% drop in response times and a
                    30% boost in customer satisfaction.
                  </p>
                  <p className="text-lg">
                    Our lead generation and customer support VAs integrated seamlessly into their workflow, handling
                    everything from abandoned carts to influencer outreach. This freed up the founders to focus on
                    marketing and product expansion.
                  </p>
                  <p className="text-lg">
                    Within four months, PrePlay grew their email list by 3x, doubled their returning customer rate, and
                    launched into two new retail partnerships — all without increasing headcount.
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
