'use client';

import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <>
      {mounted && currentTheme === 'dark' ? (
        <BsSunFill
          onClick={() => setTheme('light')}
          className='text-xl hover:cursor-pointer hover:text-blue-800'
        />
      ) : (
        <BsMoonFill
          onClick={() => setTheme('dark')}
          className='text-xl hover:cursor-pointer hover:text-blue-600'
        />
      )}
    </>
  );
};

export default DarkModeSwitch;
