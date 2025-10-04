import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HabitDuel - Turn Habits Into Epic Battles',
  description: 'A social habit-tracking mini game where users duel friends by building streaks, unlocking cosmetics, and competing in daily challenges.',
  openGraph: {
    title: 'HabitDuel',
    description: 'Turn your daily habits into epic battles with friends',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
