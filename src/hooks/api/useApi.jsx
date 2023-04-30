import { useState } from 'react';
import { fetchWToken } from '../../api/headers';

function useApi(baseUrl) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  async function fetchData(path = '', options = {}) {
    try {
      setIsLoading(true);
      setError(false);
      const response = await fetchWToken(`${baseUrl}${path}`, options);
      console.log(response);
      const data = await response.json();
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

  return { data, isLoading, isError, fetchData };
}

export default useApi;