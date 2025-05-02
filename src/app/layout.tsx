import { TRPCProvider } from '@/components/Providers';
import { ThemeRegistry } from '@/components/themeRegistry';
import { Navigation } from '@/components/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pokedex App',
  description: 'A simple Pokedex application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <TRPCProvider>
            <Navigation />
            {children}
          </TRPCProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
