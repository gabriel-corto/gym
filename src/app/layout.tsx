import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserratSans = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ginásio AJ | Home',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${montserratSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
