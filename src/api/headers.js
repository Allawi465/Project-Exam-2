import { load } from '../utils/localStorage';

/**
 * Setting headers as a function
 * @param {token} get token from local storage
 * @param {Authorization} authorization the token
 */

export function headers() {
  const token = load('token');
  return {
    'Content-Type': 'application/json; charset=utf-8 ',
    Authorization: `Bearer ${token}`,
  };
}

/**
 * adding our fetch Method as function
 * @param {headers} getting headers from a function
 * @param {adding} adding url and options as argument
 */

export async function fetchWToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
