import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#06060a',
}

export const metadata: Metadata = {
  title: 'Meraki Acreativa | Marcas personales con alma',
  description:
    'Meraki Acreativa construye marcas personales con estrategia, contenido y comunidad para convertir presencia digital en resultados medibles.',
  keywords: [
    'agencia de marketing digital',
    'marcas personales',
    'social media management',
    'gestión de redes sociales',
    'producción de contenido',
    'branding',
    'estrategia digital',
    'copywriting',
    'consultoría digital',
    'diseño web Cuba',
  ],
  metadataBase: new URL('https://merakiacreativa.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_CU',
    siteName: 'Meraki Acreativa',
    title: 'Meraki Acreativa | Marcas personales con alma',
    description:
      'Estrategia, contenido y gestión para construir marcas personales desde cero y escalar comunidades reales.',
    url: 'https://merakiacreativa.com/',
  },
  twitter: {
    card: 'summary',
    title: 'Meraki Acreativa | Marcas personales con alma',
    description: 'Construimos marcas personales con estrategia, contenido y resultados medibles.',
  },
  robots: { index: true, follow: true },
  verification: { google: 'XAIIG7xiJL34q_b6Srb3Wyz_1-jsAz1qt9-6k2BoIQ0' },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%2306060a'/%3E%3Cpath d='M14 46V18h7l11 15 11-15h7v28h-8V31L33 43h-2L22 31v15z' fill='%23c084fc'/%3E%3C/svg%3E",
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://merakiacreativa.com/#website',
      name: 'Meraki Acreativa',
      url: 'https://merakiacreativa.com/',
      inLanguage: 'es',
    },
    {
      '@type': 'Organization',
      '@id': 'https://merakiacreativa.com/#organization',
      name: 'Meraki Acreativa',
      url: 'https://merakiacreativa.com/',
      description:
        'Agencia de marketing especializada en marcas personales, contenido, comunidad y estrategia digital.',
      telephone: '+53 63284262',
      serviceType: [
        'Marca Personal',
        'Social Media Management',
        'Producción de Contenido',
        'Branding',
        'Copywriting Creativo',
        'Consultoría Estratégica',
        'Diseño Web',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+53 63284262',
        contactType: 'customer service',
        availableLanguage: 'es',
      },
      review: [
        {
          '@type': 'Review',
          reviewBody: 'Meraki transformó mi imagen. Ahora mi marca habla sola.',
          author: { '@type': 'Person', name: 'Rey Stone' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        },
        {
          '@type': 'Review',
          reviewBody:
            'El contenido que crean es el más viral que hemos tenido. La gente lo espera cada semana.',
          author: { '@type': 'Organization', name: 'Stylos Boutique' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        },
        {
          '@type': 'Review',
          reviewBody:
            'Construyeron nuestra identidad desde cero. El resultado superó todo lo que esperábamos.',
          author: { '@type': 'Organization', name: 'Kairos Lab' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Saltar al contenido principal
        </a>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JZPFVTJJ0J"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-JZPFVTJJ0J')`}
        </Script>
      </body>
    </html>
  )
}
