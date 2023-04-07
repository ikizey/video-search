import { IResults } from '@/types/Result';

interface ResultsProps {
  results: IResults;
}

export default function Results({ results }: ResultsProps) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
}
