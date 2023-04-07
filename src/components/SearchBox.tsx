'use client';

import { FormEvent, useState } from 'react';

import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [search, setSearch] = useState('');

  const router = useRouter();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex max-w-6xl px-5 mx-auto justify-between items-center space-x-2'
    >
      <input
        type='text'
        placeholder='Enter movie name...'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className='flex-1 w-full h-12 rounded-sm placeholder-gary-500 outline-none bg-transparent'
      />
      <button
        type='submit'
        disabled={!search}
        className='text-blue-400 disabled:text-gray-400'
      >
        Search
      </button>
    </form>
  );
}
