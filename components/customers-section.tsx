"use client"

import { CustomerLogo } from "./customer-logo"

// Customer data with actual success stories
const customers = [
  {
    name: "Scarlet & Sam",
    defaultImage: "/customers/success-story1.png",
    hoverImage: "/customers/success-story1-hover.png",
    alt: "Scarlet & Sam"
  },
  {
    name: "Future Fulfilment",
    defaultImage: "/customers/success-story2.png",
    hoverImage: "/customers/success-story2-hover.png",
    alt: "Future Fulfilment"
  },
  {
    name: "Keep That Pump",
    defaultImage: "/customers/success-story3.png",
    hoverImage: "/customers/success-story3-hover.png",
    alt: "Keep That Pump"
  },
  {
    name: "Bye Bambi",
    defaultImage: "/customers/success-story4.png",
    hoverImage: "/customers/success-story4-hover.png",
    alt: "Bye Bambi"
  },
  {
    name: "Creative Converters",
    defaultImage: "/customers/success-story5.png",
    hoverImage: "/customers/success-story5-hover.png",
    alt: "Creative Converters"
  },
  {
    name: "KDJ",
    defaultImage: "/customers/success-story6.png",
    hoverImage: "/customers/success-story6-hover.png",
    alt: "KDJ"
  },
  {
    name: "Matcha Made",
    defaultImage: "/customers/success-story7.png",
    hoverImage: "/customers/success-story7-hover.png",
    alt: "Matcha Made"
  },
  {
    name: "Preplay",
    defaultImage: "/customers/success-story8.png",
    hoverImage: "/customers/success-story8-hover.png",
    alt: "Preplay"
  },
  {
    name: "Space Camp",
    defaultImage: "/customers/success-story9.png",
    hoverImage: "/customers/success-story9-hover.png",
    alt: "Space Camp"
  },
  {
    name: "The Patch Brand",
    defaultImage: "/customers/success-story10.png",
    hoverImage: "/customers/success-story10-hover.png",
    alt: "The Patch Brand"
  },
  {
    name: "The Booty Co.",
    defaultImage: "/customers/success-story11.png",
    hoverImage: "/customers/success-story11-hover.png",
    alt: "The Booty Co."
  },
  {
    name: "Block Blue Light",
    defaultImage: "/customers/success-story12.png",
    hoverImage: "/customers/success-story12-hover.png",
    alt: "Block Blue Light"
  },
]

export function CustomersSection() {
  return (
    <section id="customers" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Customers</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {customers.map((customer, index) => (
            <CustomerLogo 
              key={index}
              name={customer.name}
              defaultImage={customer.defaultImage}
              hoverImage={customer.hoverImage}
              alt={customer.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
