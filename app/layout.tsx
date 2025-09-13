import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  // サイトの基本タイトル
  title: 'Brand Founding: Fractional Investment in Real Estate, Blockchain & IP',
  // 検索結果やSNSで表示される説明文
  description: 'The premier platform for fractional investment in Japanese real estate, blockchain projects, Pokémon-related IP, and innovative businesses. Explore unique lending and ownership opportunities.',
  // SEO対策用のキーワード
  keywords: ['Real Estate', 'Blockchain', 'Pokémon', 'Japan', 'Lending', 'Fractional Investment', 'Intellectual Property', 'Startups'],
  
  // OGP (Open Graph Protocol) の設定
  openGraph: {
    title: 'Brand Founding: Fractional Investment in Real Estate, Blockchain & IP',
    description: 'The premier platform for fractional investment in Japanese real estate, blockchain projects, Pokémon-related IP, and innovative businesses.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/504BCA26-7471-4676-A9CC-0F2FED0B601A_4_5005_c-epQEdGpGZ1eqg4HJYk6enT05PDKqAQ.jpeg',
        width: 1200,
        height: 630,
        alt: 'Fractional Investment Platform',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },

  // Twitterカードの設定
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Founding: Fractional Investment in Real Estate, Blockchain & IP',
    description: 'The premier platform for fractional investment in Japanese real estate, blockchain projects, Pokémon-related IP, and innovative businesses.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/504BCA26-7471-4676-A9CC-0F2FED0B601A_4_5005_c-epQEdGpGZ1eqg4HJYk6enT05PDKqAQ.jpeg'],
  },

  // faviconの設定 ✨
  icons: {
    icon: '/favicon.ico', // 通常のfavicon
    shortcut: '/favicon-16x16.png', // ショートカットアイコン
    apple: '/apple-touch-icon.png', // Appleデバイス用のアイコン
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
