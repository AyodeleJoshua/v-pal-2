import { useEffect, useState } from 'react';
import getAllData from '../services/vedPal.service';

const resultCache: Record<string, string> = {};

export const useFetchFromApi = () => {
  const [_, setData] = useState<any>(null);
  const [error, setError] = useState({ isError: false, message: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const runQuery = async (
      key: string,
      activateLoading: boolean,
      onSuccessfulFetch?: <T>(fetchedData: T) => void,
    ) => {
      if (activateLoading) {
        setIsLoading(true);
      }

      try {
        const response = await getAllData();

        resultCache[key] = JSON.stringify(response);

        if (onSuccessfulFetch) {
          onSuccessfulFetch(response);
        }
      } catch (err) {
        setError({ isError: true, message: err as string });
      }
      setIsLoading(false);
    };

    const key = `result`;

    if (resultCache[key]) {
      setData(JSON.parse(resultCache[key]));
    } else {
      runQuery(key, true, (result) => setData(result));
    }
  }, []);

  return {
    data: {},
    isLoading: isLoading,
    isError: error.isError,
    error: error,
  };
};

export default useFetchFromApi;
