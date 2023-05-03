import { useState } from 'react';
import { fetchWToken } from '../../api/headers';
import { API_SOCIAL_URL } from '../../api/constants';

function useApiActions() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  async function fetchData(path = '', options = {}) {
    try {
      setIsLoading(true);
      setError(false);
      const { method, body } = options;
      const url = `${API_SOCIAL_URL}${path}`;
      const fetchedData = await fetchWToken(url, { method, body });
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

  return { data, isLoading, isError, fetchData };
}

export default useApiActions;
