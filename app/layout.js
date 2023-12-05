import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Redux cart',
  description: 'created cart demo using redux ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='py-16'>
          {children}
        </main>
      </body>
    </html>
  )
}
