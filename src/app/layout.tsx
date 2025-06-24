import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';

//IMPORTING NECESSARY COMPONENTS
import Header from './components/header';
import Footer from './components/footer';

const manrope = Manrope({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Skillsproof',
  description: 'The platform for showing actionable portfolios',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
