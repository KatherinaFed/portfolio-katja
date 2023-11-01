import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ekaterina Fedoseeva',
  description: 'Personal portfolio with my projects',
  keywords: ['Next.js', 'React', 'JavaScript', 'Tailwind', 'Frontend'],
  creator: 'Ekaterina Fedoseeva',
  openGraph: {
    title: 'Ekaterina Fedoseeva',
    description: 'Personal portfolio with my projects',
    images: ['/images/avatar.png'],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: ['/favicon/favicon.ico'],
    apple: ['/favicon/apple-touch-icon.png'],
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
