import * as yup from 'yup';

/**
 * Validation schema for user registration form
 * @typedef {object} UserRegistrationSchema
 * @property {string} name The user's name, required, with a length of at least 2 characters, containing only letters, numbers, and underscores
 * @property {string} email The user's email, required, from the stud.noroff.no or noroff.no domain
 * @property {string} password The user's password, required, with a length of at least 8 characters
 * @property {string} avatar The URL of the user's avatar, optional, must be a valid URL
 * @property {boolean} venueManager Whether the user is a venue manager, optional, with a value of true or false.
 * @throws {Error} Throws an error if email, name and password are missing or invalid
 */

const schema = yup
  .object({
    venueManager: yup.boolean().oneOf([true], 'Please check the box'),
  })
  .required();

export default schema;
