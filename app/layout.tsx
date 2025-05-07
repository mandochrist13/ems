import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import Nav from "@/components/nav"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata = {
  title: "Accessoirs By EMS",
  description: "Découvrez notre collection exclusive de bijoux de luxe",
    generator: 'MANDO Hamidou Christ-Of-Fair'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}><Nav/>{children} <Footer/></body>
    </html>
  )
}
