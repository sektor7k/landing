import '@/scss/theme.scss';
import Providers from '@/utils/providers';
import PropTypes from 'prop-types';
import { cn } from '@/utils/cn';
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

// Font Ayarları
const inter = Inter({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
const jakarta_sans = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta_sans',
});
const playfair = Playfair_Display({
  weight: ['600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

// Metadata Ayarları
export const metadata = {
  title: {
    default: 'Castrum Legions - The Ultimate Blockchain GameFi Experience',
    template: '%s - Castrum Legions',
  },
  description:
    'Castrum Legions is an immersive blockchain-powered GameFi platform that redefines gaming and financial integration. Embark on epic quests, trade exclusive NFTs, and engage in a revolutionary gaming ecosystem.',
};

// RootLayout Bileşeni
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Ekle */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
       
      </head>
      <body
        className={cn(
          'relative overflow-x-hidden bg-black text-base antialiased',
          inter.variable,
          jakarta_sans.variable,
          playfair.variable
        )}
      >
        <Providers attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </Providers>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
