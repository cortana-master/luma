import type { Metadata } from 'next'
import { DM_Sans, Public_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-dm-sans',
})

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-public-sans',
})

export const metadata: Metadata = {
  title: 'Luma | Plataforma de Aprendizaje impulsada por IA',
  description: 'Capacita a tus estudiantes y empleados con agentes de inteligencia artificial personalizados. Multi-tenant, seguro y escalable.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${publicSans.variable} bg-surface text-on-surface font-body selection:bg-primary selection:text-white`}>
        {children}
      </body>
    </html>
  )
}
