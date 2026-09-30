import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ngoc Ngo — Product Designer · UI/UX Designer',
  description: 'Portfolio of Ngoc Ngo, a Product Designer and UI/UX Designer focused on complex SaaS, data-heavy workflows and financial products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
