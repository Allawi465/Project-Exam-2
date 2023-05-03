import * as yup from 'yup';

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
