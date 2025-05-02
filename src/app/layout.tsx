import { TRPCProvider } from '@/components/Providers';
import { ThemeRegistry } from '@/components/ThemeRegistry';
import { Navigation } from '@/components/Navigation';
import { ErrorBoundary } from '@/components/ErrorBoundary';
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
            <ErrorBoundary>
              <Navigation />
              {children}
            </ErrorBoundary>
          </TRPCProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
