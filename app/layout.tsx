import React from "react"
import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'

import './globals.css'
export const dynamic = 'force-static'


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSerifDisplay = DM_Serif_Display({ weight: '400', subsets: ['latin'], variable: '--font-dm-serif' })

export const metadata: Metadata = {
  title: 'CEIP La Paz - Colegio Publico',
  description: 'CEIP La Paz: Un colegio para crecer, crear y aprender. Jornadas de Puertas Abiertas, matriculacion y mas.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${dmSerifDisplay.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
