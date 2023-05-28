import { useState, createContext } from 'react';
import { remove } from '../utils/localStorage';

/**
 * A context provider that handle authentication state with save or remove from local storage.
 * @module ApiProvider
 */

/**
 * Context object for authentication state management
 * @type {React.Context<Props>}
 */
export const AuthContext = createContext();

/**
 * A context provider that handle authentication state with save or remove from local storage.
 * @function ApiProvider
 * @param {Object} children The component children
 * @param {Props} children.children The component children as props
 * @property {boolean} useState dataLogin and setDataLogin in the useState
 * @property {Function} logout A function to log the user out
 * @property {Function} setDataLogin A function to update the login data
 * @property {setBookings} setBookings A function to update the user bookings
 * @property {setVenues} setVenues A function to update the user venues
 * @returns {value} ErrorMessage, dataLogin, setDataLogin and logout functions
 * @example
 * return (
 * <AuthContext.Provider
 * value={{
 * dataLogin,
 * setDataLogin,
 * logout,
 * }}
 * >
 * {children}
 * </AuthContext.Provider>
 * );
 */

const ApiProvider = ({ children }) => {
  const [dataLogin, setDataLogin] = useState(false);
  const [viewBookings, setBookings] = useState([]);
  const [viewVenues, setVenues] = useState([]);

  /**
   * Logs the user out and removing the user's token, user data, and avatar from local storage
   * @function logout
   * @property {function} remove local storage
   * @property {boolean} setDataLogin setDataLogin to null
   * @returns {void}
   * @example
   * const logout = () => {
   * remove('token');
   * remove('user');
   * remove('avatar');
   * setDataLogin(null);
   * };
   */

  const logout = () => {
    remove('token');
    remove('user');
    remove('avatar');
    remove('venueManger');
    setDataLogin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        dataLogin,
        setDataLogin,
        logout,
        viewBookings,
        setBookings,
        viewVenues,
        setVenues,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default ApiProvider;
