import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'TrainingBuddy — כלי AI למנהלי למידה',
  description:
    'פלטפורמה שמרכזת כלי AI חכמים עבור מנהלי למידה והדרכה בארגונים. לוח זמנים אוטומטי, מאמן כתיבה, ועוד.',
  openGraph: {
    title: 'TrainingBuddy — כלי AI למנהלי למידה',
    description: 'הדרכה חכמה. מהירה. מדויקת.',
    locale: 'he_IL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
