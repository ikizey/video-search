import { IResults } from '@/types/Result';
import Results from '@/components/Results';

async function searchMovie(searchTerm: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1&include_adult=false`
  );

  if (!res.ok) {
    throw new Error('Error fetching data!');
  }

  const json: { page: number; results: IResults } = await res.json();
  return json.results;
}

export default async function Search({
  params,
}: {
  params: { searchTerm: string };
}) {
  const searchTerm = params.searchTerm;
  const results: IResults = await searchMovie(searchTerm);
  // console.log(results);

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className='text-center p-6'>No results found.</h1>
      )}
      {results && results.length > 0 && <Results results={results} />}
    </div>
  );
}
