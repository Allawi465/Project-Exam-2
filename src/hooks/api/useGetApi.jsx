import { useState, useEffect } from 'react';
import { API_SOCIAL_URL } from '../../api/constants';
import { fetchWToken } from '../../api/headers';

/**
 * @typedef {Object} useGetApi return
 * @property {function} getData A function to fetch data from the API
 */

/**
 * Hook that is used to fetch data from an API endpoint with GET method
 * @param {string} path The API endpoint path to fetch data from
 * @returns {useGetApi} data, isLoading, isError
 * @example
 * const { data, isLoading, isError } = useGetApi(
 *   `/venues/${id}?_owner=true&_bookings=true`
 * );
 */

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
