import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../styles/globals.css'
import TranslationProvider from '../app/components/providers/TranslationProvider'
import Header from '../app/components/Header'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hearts for Sri Lanka',
  description: 'Helping children in Sri Lanka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={poppins.className}>
        <TranslationProvider>
          <Header isDarkMode={false} />
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}