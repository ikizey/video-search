import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
