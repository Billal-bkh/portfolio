import Header from '@/components/header';
import type { Metadata } from 'next';
import { Monda } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Billel Bekhouche',
  description: 'Generated by create next app',
};

export const monda = Monda({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-monda',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${monda.variable} bg-[#1b1b1b]`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
