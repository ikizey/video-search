'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='dark:bg-gray-800 dark:text-gray-100 text-gray-800 transition-colors duration-300 min-h-screen'>
        {children}
      </div>
    </ThemeProvider>
  );
}
