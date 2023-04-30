import React, { useState, createContext } from 'react';
import { remove } from '../utils/localStorage';
import { API_SOCIAL_URL } from "./constants";
import useApi from '../hooks/api/useApi';

export const AuthContext = createContext();

const ApiProvider = ({ children }) => {
  const baseUrl = API_SOCIAL_URL;
  const [dataLogin, setDataLogin] = useState(false);
  const { data, isLoading, fetchData, isError } = useApi(baseUrl);

  const login = async (userInput) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(userInput),
    };
    const { data, isError } = await fetchData('/auth/login', options);
    setDataLogin(data);
    return { data, isError };
  };

  const post = async (userInput, path = '') => {
    const options = {
      method: 'POST',
      body: JSON.stringify(userInput),
    };
    const { data, isError } = await fetchData(path, options);
    return { data, isError };
  };

  const read = async (path = '') => {
    const { data, isError } = await fetchData(path);
    return { data, isError };
  };

  const logout = () => {
    remove('token');
    remove('user');
    setDataLogin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        post,
        login,
        logout,
        read,
        isLoading,
        data,
        isError,
        dataLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );

};

export default ApiProvider;