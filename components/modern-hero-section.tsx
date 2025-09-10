"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { EmailCopyButton } from "@/components/email-copy-button"

export function ModernHeroSection() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsHeaderVisible(false)
      } else {
        // Scrolling up - show header
        setIsHeaderVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-white/5 bg-background/5 backdrop-blur-md supports-[backdrop-filter]:bg-background/5 transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img
              src="/viaa-logo.png"
              alt="VIAA Logo"
              className="h-12 sm:h-15 w-auto"
            />
          </div>
          <div className="flex-1 flex justify-center max-w-md mx-auto px-4">
            <nav className="flex gap-2 sm:gap-3 md:gap-6 overflow-x-auto no-scrollbar">
              <Link href="#pricing" className="text-xs sm:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            {/* Get Started button removed */}
          </div>
        </div>
      </header>
      
      <section className="w-full py-8 bg-transparent pt-24">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Main hero content */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Top 1% Virtual Assistants</h1>
            <p className="text-base md:text-lg text-white/90 mb-8">Customer Support E-commerce Specialists.</p>
            
            {/* Customer avatars */}
            <div className="flex justify-center items-center space-x-[-8px] mb-8">
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden bg-white/10 backdrop-blur-sm"
                  style={{ zIndex: 12 - i }}
                >
                  <img
                    src={`/customers/success-story${(i % 12) + 1}.png`}
                    alt={`Customer ${i + 1}`}
                    className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
            
            {/* Contact options */}
            <div className="mb-8 max-w-md mx-auto">
              <div className="flex justify-center gap-4 mb-6">
                <a 
                  href="mailto:support@viaa.so" 
                  className="inline-flex items-center justify-center border border-white/30 bg-white/10 backdrop-blur-md shadow-lg text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors w-full"
                >
                  Email
                </a>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center border border-white/30 bg-white/10 backdrop-blur-md shadow-lg text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors w-full"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex justify-center items-center gap-2 py-3">
                <span className="text-white text-sm md:text-base">Email:</span>
                <a href="mailto:support@viaa.so" className="text-cyan-300 hover:underline text-sm md:text-base">support@viaa.so</a>
                <EmailCopyButton email="support@viaa.so" />
              </div>
            </div>

            
            {/* Software stack text */}
            <p className="text-white/90 mb-6">Qualified in your software stack.</p>
            
            {/* Software logos */}
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                "freshdesk.png", "front.png", "gorgias.png", "intercom.png", 
                "liveagent.png", "livechat.png", "reamaze.png", "zendesk.png", "zoho.png"
              ].map((logo, i) => (
                <div key={i} className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all hover:scale-110 rounded-xl bg-white/10 backdrop-blur-md p-2 hover:bg-white/20">
                  <img 
                    src={`/${logo}`} 
                    alt={logo.split('.')[0]} 
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
