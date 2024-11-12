import { useEffect, useState } from 'react';
import getAllData from '../services/vedPal.service';

const resultCache: Record<string, string> = {};

export const useFetchFromApi = <T> () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setData] = useState<null| T>(null);
  const [error, setError] = useState({ isError: false, message: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const runQuery = async (
      key: string,
      activateLoading: boolean,
      onSuccessfulFetch?: <U>(fetchedData: U) => void,
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

    const key = 'result';

    if (resultCache[key]) {
      setData(JSON.parse(resultCache[key]));
    } else {
      runQuery(key, true, (result) => setData(result as unknown as T));
    }
  }, []);

  return {
    data: {},
    isLoading,
    isError: error.isError,
    error,
  };
};

export default useFetchFromApi;
