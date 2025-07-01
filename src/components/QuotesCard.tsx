import { useEffect, useState } from 'react';
import type { Quote } from '../type';



const QuotesCard = () => {

  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: {
          'X-Api-Key': 'u4TUdsRRhDsqdaTTF8lgUQ==sqgezoQ5t9C2HKFo',
        },
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data: Quote[] = await response.json();
      setQuote(data[0]); // API returns an array
    } catch (err: any) {
      setError(err.message || 'Failed to fetch quote');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-md mx-auto">
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && quote && (
        <>
          <p className="text-xl mb-2">"{quote.quote}"</p>
          <p className="text-gray-600">~ {quote.author}</p>
          <p className="text-sm text-gray-400 mt-1">Category: {quote.category}</p>
        </>
      )}

      <button
        onClick={fetchQuote}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Generate Next Quote
      </button>
    </div>
  );
};

export default QuotesCard;
