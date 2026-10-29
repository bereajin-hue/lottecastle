import type { Metadata, Viewport } from 'next'
import './globals.css'
import { siteConfig } from '@/data/site-config'

const { meta } = siteConfig

export const metadata: Metadata = {
  metadataBase: new URL(meta.canonical),
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    type: 'website',
    locale: 'ko_KR',
    siteName: siteConfig.business.overview.사업명,
    images: [{ url: meta.ogImage, width: 1200, height: 630, alt: meta.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
  verification: {
    google: meta.googleVerification,
    other: { 'naver-site-verification': meta.naverVerification },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D1B2A',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Residence',
  name: '경기광주역 롯데캐슬 시그니처 2단지',
  description: '경기도 광주시 쌍령동 위치, 롯데건설 시공, 총 1,249세대 아파트',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '쌍령동 산54-29번지',
    addressLocality: '광주시',
    addressRegion: '경기도',
    addressCountry: 'KR',
  },
  telephone: siteConfig.contact.phone,
  url: meta.canonical,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
