import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "UNi5 Fitness Club | Professional Fitness Training Maharashtra",
  description:
    "Transform your fitness journey with UNi5 Fitness Club. Expert trainers, personalized programs, and state-of-the-art facilities.",
  keywords: "fitness club, gym, personal training, nutrition, G99 Academy, Armori, Brahmapuri",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  )
}
