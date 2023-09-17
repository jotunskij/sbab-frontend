import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'nes.css/css/nes.min.css'

export const metadata: Metadata = {
  title: 'Buslines',
  description: 'SBAB assignment frontend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
