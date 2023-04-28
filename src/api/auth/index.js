import React, { useState, createContext } from 'react';
import { save, remove } from '../../utils/localStorage';
import { API_SOCIAL_URL } from '../constants';
import { fetchWToken } from '../headers';

export const AuthContext = createContext();

const ApiProvider = ({ children }) => {
  const baseUrl = API_SOCIAL_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const login = async (userInput) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetchWToken(`${baseUrl}/auth/login`, {
        method: 'POST',
        body: JSON.stringify(userInput),
      });

      const { accessToken: token, ...user } = await response.json();

      save('token', token);
      save('user', user);

      setData(user);
      return user;
    } catch (error) {
      setIsError(true);
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (userData) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetchWToken(`${baseUrl}/auth/register`, {
        method: 'POST',
        body: JSON.stringify(userData),
      });

      const user = await response.json();
      return user;
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const read = async (path = '') => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(`${baseUrl}${path}`);
      const data = await response.json();
      setData(data);
      return data;
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    remove('token');
    remove('user');
    setData(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        login,
        logout,
        read,
        isLoading,
        isError,
        data,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default ApiProvider;