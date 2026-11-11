import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://shalomgatesofpraise.org'),
  title: {
    template: '%s | Shalom Gates of Praise Ministries',
    default: 'Shalom Gates of Praise Ministries',
  },
  description: 'Shalom Gates of Praise Ministries in Entebbe – Magala, Uganda. Raising generals for generations.',
  keywords: ['Shalom Gates of Praise Ministries', 'Entebbe', 'Uganda', 'church', 'worship', 'faith'],
  authors: [{ name: 'Shalom Gates of Praise Ministries' }],
  creator: 'Shalom Gates of Praise Ministries',
  publisher: 'Shalom Gates of Praise Ministries',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/assets/favicon_io/favicon.ico',
    shortcut: '/assets/favicon_io/favicon.ico',
    apple: '/assets/favicon_io/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shalomgatesofpraise.org',
    title: 'Shalom Gates of Praise Ministries',
    description: 'Raising generals for generations in Entebbe – Magala, Uganda.',
    siteName: 'Shalom Gates of Praise Ministries',
    images: [
      {
        url: '/assets/icons/new-placeholder.svg',
        width: 800,
        height: 600,
        alt: 'Shalom Gates of Praise Ministries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shalom Gates of Praise Ministries',
    description: 'Raising generals for generations in Entebbe – Magala, Uganda.',
    images: ['/assets/icons/new-placeholder.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
