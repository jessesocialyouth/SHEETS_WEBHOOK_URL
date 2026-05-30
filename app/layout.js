import './globals.css';

export const metadata = {
  title: 'Scorrito — WC 2026',
  description: 'FIFA World Cup 2026 Scorrito prediction helper',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
