import React, { useState, createContext } from 'react';
import { remove } from '../utils/localStorage';

export const AuthContext = createContext();

const ApiProvider = ({ children }) => {
  const [data, setData] = useState(false);
  const [dataLogin, setDataLogin] = useState(false);

  const logout = () => {
    remove('token');
    remove('user');
    remove('avatar');
    setDataLogin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        data,
        setData,
        dataLogin,
        setDataLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );

};

export default ApiProvider;