export const dynamic = 'force-dynamic';

import { IResults } from '@/types/Result';
import Results from '@/components/Results';

const API_KEY = process.env.TMDB_API_KEY;

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home({ searchParams }: HomeProps) {
  const param = searchParams.fetch || 'trending';

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      param === 'trending' ? 'trending/movie/week' : 'movie/top_rated'
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 12 * 60 * 60 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data!');
  }

  const data = await res.json();
  const results: IResults = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
