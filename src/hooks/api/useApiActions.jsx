import { useState } from 'react';
import { fetchWToken } from '../../api/headers';
import { API_SOCIAL_URL } from '../../api/constants';

/**
 * @typedef {Object} useApiActions return
 * @property {function} fetchData A function to fetch data from the API
 */

/**
 * Hook that is used for handle API actions
 * @returns {useApiActions} data, isLoading, isError, fetchData
 * @example
 * const { isLoading, fetchData } = useApiActions();
 * const UserData = await fetchData('/auth/login', {
 * method: 'POST',
 * body: JSON.stringify(formData),
 * });
 */

function useApiActions() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  /**
   * async fetches data from an API endpoint with a JSON body and sets the response data, loading state, and error state
   * @param {string} path The API endpoint path
   * @param {Object} options The request options object
   * @param {string} options.method The HTTP method of the request
   * @param {Object} options.body The JSON body of the request
   * @returns {Promise} A promise that resolves to an object with `data` or `isError`
   */

  async function fetchData(path = '', options = {}) {
    try {
      setIsLoading(true);
      setError(false);
      const { method, body } = options;
      const url = `${API_SOCIAL_URL}${path}`;
      const fetchedData = await fetchWToken(url, { method, body });
      if (fetchedData.status === 204) {
        return { success: true };
      }
      
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

  return { data, isLoading, isError, fetchData };
}

export default useApiActions;
