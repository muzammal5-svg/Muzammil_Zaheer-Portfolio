import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "MZwebSolutions - Premium Digital Agency | Web Development & Design",
  description:
    "MZwebSolutions is a premium digital agency specializing in WordPress, Shopify, Webflow development, custom web applications, and modern frontend technologies. Transform your business with professional web solutions.",
  generator: "MZwebSolutions",
  keywords: [
    "Digital Agency", "Web Development", "WordPress", "Shopify", "Webflow", 
    "Custom Web Applications", "React", "Next.js", "Frontend Development", 
    "UI/UX Design", "E-commerce", "M Muzammil", "MZwebSolutions"
  ],
  authors: [{ name: "M Muzammil", url: "https://mzwebsolutions.com" }],
  creator: "M Muzammil",
  publisher: "MZwebSolutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/MZwebsolution.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/MZwebsolution.png",
        sizes: "16x16", 
        type: "image/png",
      },
    ],
    apple: "/MZwebsolution.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mzwebsolutions.com',
    title: 'MZwebSolutions - Premium Digital Agency',
    description: 'Transform your business with professional web development and design solutions.',
    siteName: 'MZwebSolutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MZwebSolutions - Premium Digital Agency',
    description: 'Transform your business with professional web development and design solutions.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased bg-gradient-dark min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <WhatsAppFloat 
            phoneNumber="923417359571" 
            message="Hi! I'm interested in MZwebSolutions services. Let's discuss my project!" 
          />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
