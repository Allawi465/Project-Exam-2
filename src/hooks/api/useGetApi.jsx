import { useState, useEffect } from 'react';
import { API_SOCIAL_URL } from '../../api/constants';
import { fetchWToken } from '../../api/headers';

function useGetApi(path) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const url = `${API_SOCIAL_URL}${path}`;
        const fetchedData = await fetchWToken(url);
        const data = await fetchedData.json();
        console.log(data);
        if (data.errors) {
          setError(data.errors[0].message);
          return { isError: data.errors[0].message };
        } else {
          setData(data);
          return { data };
        }
      } catch (error) {
        console.log(error);
        setError(true);
        return { isError: true, error };
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [path]);
  return { data, isLoading, isError };
}

export default useGetApi;
