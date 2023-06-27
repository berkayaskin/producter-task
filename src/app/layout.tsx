import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import ReduxProvider from '@/redux/provider'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Producter Task',
  description: 'The product management tool designed to become customer-driven',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-white antialiased">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar />
          <Sidebar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
