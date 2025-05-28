import type { Metadata } from 'next'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { microdata } from '@/lib/microdata'
import { MicrodataScript } from '@/providers/MicrodataScript'


const homepageMicrodata = microdata('WebSite', {
  name: 'NESS',
  url: process.env.NEXT_PUBLIC_BASE_URL,
  description: "NESS is a Next.Js Starter Template, SEO friendly, ready-to-use, production ready and other bunch of business words",
  author: "NESS",
  publisher: "NESS",
  inLanguage: "en_US",
  isAccessibleForFree: true,
  image: `${process.env.NEXT_PUBLIC_BASE_URL}/public/myimage.png`,
  mainEntityOfPage: {
    '@type': 'WebSite',
    '@id': process.env.NEXT_PUBLIC_BASE_URL,
  },
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: {
    default: "NESS",
    template: "NESS - %s",
  },
  description:
    "NESS is a Next.Js Starter Template, SEO friendly, ready-to-use, production ready and other bunch of business words",
  keywords: [
    "NESS"
  ],
  authors: [{ name: "NESS" }],
  creator: "NESS",
  publisher: "NESS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-white'>
        {children}
        <MicrodataScript id='home-microdata' microdata={homepageMicrodata} />
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_TAG!} />
      </body>
    </html>
  )
}
