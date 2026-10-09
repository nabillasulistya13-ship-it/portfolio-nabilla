import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nabilla Sulistyaningrum — Data Analytics & BI',
  description: 'Portfolio Nabilla Sulistyaningrum — Data Analytics, Business Intelligence, Python, SQL, Power BI, AI Automation, and certificates including Data Analyst and BEM FIKTI UG achievements.',
  openGraph: {
    title: 'Nabilla Sulistyaningrum — Data Analytics & BI',
    description: 'Explore Nabilla Sulistyaningrum’s portfolio, Data Analyst certificate, and BEM FIKTI UG achievements in data analytics, business intelligence, and AI automation.',
    type: 'website',
    locale: 'id_ID',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f1f6ff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
