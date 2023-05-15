import * as yup from 'yup';

/**
 * Validation schema for login form
 * @typedef {Object} LoginSchema
 * @property {string} email The user's email, required, from the stud.noroff.no or noroff.no domain
 * @property {string} password The user's password, required, with a length of at least 8 characters
 * @throws {Error} Throws an error if email or password are missing or invalid
 */

const LoginSchema = yup
  .object({
    email: yup
      .string()
      .trim()
      .required('Please enter your email')
      .matches(
        /[\w\-.]+@(stud\.)?noroff\.no$/,
        'Email must be from stud.noroff.no or noroff.no domain'
      ),
    password: yup
      .string()
      .trim()
      .required('Please enter your password')
      .min(8, 'Your password should be at least 8 characters'),
  })
  .required();

export default LoginSchema;
