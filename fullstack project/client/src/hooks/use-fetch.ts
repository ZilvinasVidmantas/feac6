import { formatErrorMessage } from '@utils';
import { useState, useEffect } from 'react';

export const useFetch = <ResponseType>(url: string, onSuccess?: (response: Response) => void) => {
  const [data, setData] = useState<ResponseType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        onSuccess?.(response);
        const result = await response.json();
        setData(result);
      } catch (err) {
        const errMessage = formatErrorMessage(err);
        setError(errMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, onSuccess]);

  return { data, loading, error };
};
