"use client";
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/Components/Header'
import Picture from '@/Components/Picture';
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Picture />
        </body>
    </html>
  )
}
