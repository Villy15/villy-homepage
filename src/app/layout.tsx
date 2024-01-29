import Header from '@/components/Header';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { M_PLUS_1 } from 'next/font/google';

const m_plus_1 = M_PLUS_1({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adrian Villanueva - Homepage',
  description: "Adrian Villanueva's homepage"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={m_plus_1.className}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
