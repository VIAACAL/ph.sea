import { ModernHeroSection } from "@/components/modern-hero-section"
import { ModernPricingSection } from "@/components/modern-pricing-section"
import { VideoBackground } from "@/components/video-background"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <VideoBackground videoSrc="/openart-video_5db5f7c4_1757225642363.mp4" />
      <main className="flex-1">
        <ModernHeroSection />
        <ModernPricingSection />
      </main>
      <footer className="w-full py-6 bg-black/30 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <p className="text-sm text-white/80">© 2025 VIAA. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
