import './globals.css';
import Nav from '../components/Nav';

export const metadata = {
  title: 'Scorrito — FIFA World Cup 2026',
  description: 'Live match analysis, odds and Scorrito prediction helper for FIFA World Cup 2026',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Nav />
        <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
        <footer className="text-center text-xs text-slate-600 py-8">
          FIFA World Cup 2026 · Scorrito Helper · Odds sourced from public betting markets (May 2026)
        </footer>
      </body>
    </html>
  );
}
