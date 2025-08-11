"use client"

import { ReviewCard } from "./review-card"

// Testimonial data from the new screenshot
const testimonials = [
  {
    name: "Kirsty",
    company: "The Booty Co.",
    position: "Founder",
    rating: 5,
    content: "New to VIAA but already impressed! The onboarding was smooth, and our VA delivers exceptional value. Now I can focus on strategic growth while knowing the daily operations are in capable hands.",
    websiteUrl: "https://thebootyco.com"
  },
  {
    name: "Lachlan Beale",
    company: "Presence Productions",
    position: "Founder",
    rating: 5,
    content: "Our VA's expertise in lead generation has been remarkable. The seamless onboarding process led to immediate results, and their ability to identify quality prospects in Sydney has been invaluable.",
    websiteUrl: "https://presenceproductions.com"
  },
  {
    name: "Matteo Castiello",
    company: "Insurgence AI",
    position: "Managing Director",
    rating: 5,
    content: "VIAA's innovative approach to LinkedIn networking has been exceptional. Their VA's expertise with AI tools and custom GPT integration has revolutionized our outreach strategy and connection building.",
    websiteUrl: "https://insurgenceai.com"
  },
  {
    name: "Scarlet Robertson",
    company: "Scarlet & Sam",
    position: "Founder",
    rating: 5,
    content: "Working with VIAA has been seamless. With their help handling customer inquiries, we've expanded order volume without compromising service quality—a standout team that feels like an integral part of our business.",
    websiteUrl: "https://scarletandsam.com"
  },
  {
    name: "Alicia Parr",
    company: "Keep That Pump",
    position: "Founder",
    rating: 5,
    content: "Our social media presence has flourished with VIAA's assistance. Their VA's expertise with ShipHero and seamless coordination with Future Fulfillment ensures smooth operations and quick issue resolution.",
    websiteUrl: "https://keepthatpump.com"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-muted/50 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Reviews</h2>
          </div>
        </div>
        
        {/* Scrolling testimonials container */}
        <div className="relative w-full overflow-hidden pt-12">
          <div
            className="testimonial-scroll flex space-x-6 py-4"
            style={{
              width: 'fit-content'
            }}
          >
            {/* Display all testimonials in a row */}
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[350px]">
                <ReviewCard
                  name={testimonial.name}
                  company={testimonial.company}
                  position={testimonial.position}
                  rating={testimonial.rating}
                  content={testimonial.content}
                  websiteUrl={testimonial.websiteUrl}
                />
              </div>
            ))}
            
            {/* Duplicate testimonials to create a seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div key={`dup-${index}`} className="flex-shrink-0 w-[350px]">
                <ReviewCard
                  name={testimonial.name}
                  company={testimonial.company}
                  position={testimonial.position}
                  rating={testimonial.rating}
                  content={testimonial.content}
                  websiteUrl={testimonial.websiteUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add the CSS animation */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .testimonial-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
