import React from "react"
import { Rubik, Bodoni_Moda } from "next/font/google"
import "./globals.css"

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
})

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
})

export const metadata = {
  title: "Digital Universe",
  description: "A modern digital experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rubik.variable} ${bodoni.variable}`}>
      <body className="min-h-screen bg-white dark:bg-gray-900">
        {children}
      </body>
    </html>
  )
} 