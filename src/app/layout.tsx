import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { M_PLUS_1 } from 'next/font/google';

const m_plus_1 = M_PLUS_1({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adrian Villanueva - Homepage',
  description: "Adrian Villanueva's homepage",
  icons: {
    icon: '/icon.ico'
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={m_plus_1.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
