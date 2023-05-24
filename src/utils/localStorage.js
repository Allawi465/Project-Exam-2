/**
 * save to local storage
 * @param {key} the key for setItem
 * @param {value} the value for setItem
 */

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * load the value from save
 * @param {value} load the value
 * @param {return} returning null if the value do not exists
 */

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

/**
 * deleting the key from local Storage
 * @param {key} remove the key
 */

export function remove(key) {
  localStorage.removeItem(key);
}
