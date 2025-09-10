import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
// import { AuroraBackground } from "@/components/ui/aurora-background" // Commented out

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "VIAA - Premium Customer Support",
  description: "Empowering businesses with intelligent virtual assistance solutions.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/viaa-logo.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.className} w-full`}>
        {/* <AuroraBackground> */}
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <div className="flex flex-col min-h-screen w-full items-center">
              {children}
            </div>
          </ThemeProvider>
        {/* </AuroraBackground> */}
      </body>
    </html>
  )
}
