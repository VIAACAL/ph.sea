"use client"

import Link from "next/link"
import { Check } from "lucide-react"

export function ModernPricingSection() {
  return (
    <section id="pricing" className="w-full py-8 bg-transparent">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Premium Opportunities</h2>
        </div>
        
        {/* Pricing cards container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Specialist Contractor Services plan */}
          <div className="border border-white/30 rounded-2xl p-6 flex flex-col h-full bg-white/10 backdrop-blur-md shadow-lg">
            <h3 className="text-xl font-bold mb-1">Specialist Contractor Services</h3>
            
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold text-white">$5</span>
              <span className="text-white/70 ml-1 text-sm">/hr USD</span>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Hands-on experience in customer support for Shopify or 3PL systems</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">No entry-level roles — demonstrated competence required</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Comfortable with Hubstaff time tracking & monitoring</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Confident communicator: video calls, Slack, WhatsApp, email</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Reliable & responsive — trusted daily by global teams</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Evidence of reliability — promotions, recognition, or standout results</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Fully dedicated — not splitting focus across multiple jobs</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Excited to grow with AI tools shaping the future of support</span>
              </li>
            </ul>
          </div>
          
          
          {/* AI Specialist Contractor Services plan */}
          <div className="border border-white/30 rounded-2xl p-6 flex flex-col h-full bg-white/10 backdrop-blur-md shadow-lg">
            <h3 className="text-xl font-bold mb-1">AI Specialist Contractor Services</h3>
            <p className="text-white mb-8 font-medium text-sm">To be agreed individually</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Proven experience building AI agents and system integrations</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Comfortable coding with AI frameworks and automation tools</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Ability to integrate AI into Shopify, 3PL, or customer support workflows</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Skilled in data handling and connecting APIs for real-time support systems</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Familiar with advanced models (Anthropic Claude, OpenAI, open-source LLMs)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Strong examples of past AI projects or deployed agents</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Vision to pioneer next-generation customer support with AI</span>
              </li>
            </ul>
            
            {/* Get started button removed */}
          </div>
        </div>
      </div>
    </section>
  )
}
