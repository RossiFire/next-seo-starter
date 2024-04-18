import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const font = Roboto({ weight: '400', subsets: ['latin']})



export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: {
    default: 'Website HomePage',
    template: 'Website HomePage - %s'
  },
  description: '',
  keywords: [],
  twitter:{
    card: 'summary_large_image'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(font.className,'bg-white')}>
        {children}
      </body>
    </html>
  )
}
