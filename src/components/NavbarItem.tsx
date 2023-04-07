'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface NavbarItemProps {
  title: string;
  param: string;
}

export default function NavbarItem({ title, param }: NavbarItemProps) {
  const searchParams = useSearchParams();
  const fetch = searchParams.get('fetch');

  return (
    <div>
      <Link
        href={`/?fetch=${param}`}
        className={`m-4 hover:text-blue-400 font-semibold p-2 ${
          fetch &&
          fetch === param &&
          'underline underline-offset-8 decoration-4 decoration-blue-400 rounded-lg'
        }`}
      >
        {title}
      </Link>
    </div>
  );
}
