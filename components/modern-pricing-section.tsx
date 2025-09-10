"use client"

import Link from "next/link"
import { Check } from "lucide-react"

export function ModernPricingSection() {
  return (
    <section id="pricing" className="w-full py-8 bg-transparent">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Expert Customer Support</h2>
          <p className="text-base text-white/90">Without the expert price.</p>
        </div>
        
        {/* Pricing cards container */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Standard plan */}
          <div className="border border-white/30 rounded-2xl p-6 flex flex-col h-full bg-white/10 backdrop-blur-md shadow-lg">
            <h3 className="text-xl font-bold mb-1">Standard</h3>
            <p className="text-white mb-4 font-medium text-sm">Less than 20 hours pw</p>
            
            <div className="flex items-baseline mb-4">
              <span className="text-white/70 line-through text-base mr-1">$11</span>
              <span className="text-4xl font-bold text-white">$10</span>
              <span className="text-white/70 ml-1 text-sm">p/h usd</span>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Client-VA matching</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Onboarding into your systems</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Performance reviews</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">EOD reporting</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Whatsapp group for daily comms</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">SOP creation of tasks</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">HubStaff monitoring of VA & analytics</span>
              </li>
            </ul>
            
            {/* Get started button removed */}
          </div>
          
          {/* Pro plan - Popular */}
          <div className="border border-white/30 rounded-2xl p-6 flex flex-col h-full relative bg-white/10 backdrop-blur-md shadow-xl">
            <div className="absolute top-3 right-3 bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">
              Popular
            </div>
            
            <h3 className="text-xl font-bold mb-1 text-white">Pro</h3>
            <p className="text-white mb-4 font-medium text-sm">20-42 hours pw</p>
            
            <div className="flex items-baseline mb-4">
              <span className="text-white/70 line-through text-base mr-1">$10</span>
              <span className="text-4xl font-bold text-white">$9</span>
              <span className="text-white/70 ml-1 text-sm">p/h usd</span>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Client-VA matching</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Onboarding into your systems</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Performance reviews</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">EOD reporting</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Whatsapp group for daily comms</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">SOP creation of tasks</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">HubStaff monitoring of VA & analytics</span>
              </li>
            </ul>
            
            {/* Get started button removed */}
          </div>
          
          {/* Enterprise plan */}
          <div className="border border-white/30 rounded-2xl p-6 flex flex-col h-full bg-white/10 backdrop-blur-md shadow-lg">
            <h3 className="text-xl font-bold mb-1">Enterprise</h3>
            <p className="text-white mb-4 font-medium text-sm">42 hours + pw</p>
            
            <div className="flex items-baseline mb-4">
              <span className="text-white/70 line-through text-base mr-1">$9</span>
              <span className="text-4xl font-bold text-white">$8</span>
              <span className="text-white/70 ml-1 text-sm">p/h usd</span>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Client-VA matching</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Onboarding into your systems</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Performance reviews</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">EOD reporting</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Whatsapp group for daily comms</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">SOP creation of tasks</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">HubStaff monitoring of VA & analytics</span>
              </li>
            </ul>
            
            {/* Get started button removed */}
          </div>
        </div>
      </div>
    </section>
  )
}
