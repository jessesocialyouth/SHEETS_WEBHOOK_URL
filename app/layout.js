import './globals.css';

export const metadata = {
  title: 'Scorrito — WC 2026',
  description: 'FIFA World Cup 2026 Scorrito prediction helper',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
