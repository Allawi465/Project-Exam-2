import * as yup from 'yup';

/**
 * Validation schema for user registration form
 */

const schema = yup
  .object({
    name: yup
      .string()
      .trim()
      .required('Please enter your name')
      .matches(
        /^[\w]+$/,
        'Your name should not contain punctuation except underscore (_)'
      )
      .min(2, 'You name should be at least 2 characters.'),
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
    avatar: yup.string().trim().url('Please enter a valid URL'),
    venueManager: yup
      .boolean()
      .oneOf([true, false], 'Please select a valid option'),
  })
  .required();

export default schema;
