'use client';

export default function Error({ _, reset }: { _: Error; reset: () => void }) {
  return (
    <div className='text-center mt-10'>
      <h1>Something went wrong!</h1>
      <button onClick={reset} className='hover:text-amber-600'>
        Try Again
      </button>
    </div>
  );
}
