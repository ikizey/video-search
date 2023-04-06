import './globals.css';

import Header from '@/components/Header';

export const metadata = {
  title: 'Movie Search',
  description: 'App to search movies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
