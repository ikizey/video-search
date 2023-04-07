import { FiThumbsUp } from 'react-icons/fi';
import { IResult } from '@/types/Result';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ result }: { result: IResult }) {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt={`poster of ${result.title || result.original_title}`}
          width={500}
          height={300}
          className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
          placeholder='blur'
          blurDataURL='/spinner.svg'
        ></Image>
        <div className='p-2'>
          <p className='line-clamp-2 text-md'>{result.overview}</p>
          <h2 className='text-lg font-bold'>
            {result.title || result.original_title}
          </h2>
          <p className='flex items-center'>
            {result.release_date} <FiThumbsUp className='h-5 mr-1 ml-3' />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
