import type { Metadata } from 'next';
import './globals.css';
import { inter } from './fonts/Inter';
import { roboto } from './fonts/Roboto';
import { montserrat } from './fonts/Montserrat';
export const metadata: Metadata = {
  title: 'ALGALAR',
  description: 'Algalar service',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} 
    ${roboto.variable} ${montserrat.variable}`}>
      
      <body>{children}</body>
    </html>
  );
}
