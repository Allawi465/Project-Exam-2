import React, { useState, useContext } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import LoadingButton from '../../components/LoadingButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginSchema from './schema';
import { AuthContext } from '../../api';
import { save } from '../../utils/localStorage';
import useApiActions from '../../hooks/api/useApiActions';

/**
 * Renders a login form component with validation and error handling
 * @component
 * @param {object} props Component props
 * @param {function} props.onClose Callback function to close the modal
 * @property {function} OnFormSubmit A function to handle inputs through API call
 * @property {function} AuthContext getting the authentication state from AuthContext
 * @property {function} useApiActions A hook for fetching data from an API endpoint and handling loading state
 * @property {boolean} isLoading True if API request is loading, false otherwise
 * @property {function} fetchData Function to fetch data from an API endpoint
 * @property {function} save Saves data to local storage
 * @returns {React.ReactElement} Login form component
 * @example
 * <LoginForm onClose={onClose} />
 */

function LoginForm({ onClose }) {
  // Authentication and API data handling

  const { setDataLogin } = useContext(AuthContext);
  const { isLoading, fetchData } = useApiActions();

  // Form validation using React Hook Form and Yup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  // State for error message
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * Handler form submission
   * @async
   * @param {object} formData Form data
   */

  async function OnFormSubmit(formData) {
    // Call API to login user
    const UserData = await fetchData('/auth/login', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    // Set error message if API response haves an error
    if (UserData.isError) {
      setErrorMessage(UserData.isError);
    } else {
      // Set user data and token in context and local storage
      const {
        accessToken: token,
        avatar,
        venueManager,
        ...user
      } = UserData.data;
      setDataLogin({
        ...user,
        avatar: avatar,
        token: token,
      });
      save('token', token);
      save('venueManger', venueManager);
      save('user', user);
      save('avatar', avatar);
      // Close modal and reset form
      onClose();
      reset();
      setErrorMessage('');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(OnFormSubmit)}>
        {errorMessage && (
          <p style={{ color: 'var(--color-red)' }}>{errorMessage}</p>
        )}
        <FloatingLabel label="Email address" name="email" className="my-3">
          <Form.Control
            {...register('email')}
            type="email"
            name="email"
            placeholder="name@stud.noroff.no"
          />
          <p className="form-text mx-1">{errors.email?.message}</p>
        </FloatingLabel>

        <FloatingLabel label="Password" className="my-3">
          <Form.Control
            {...register('password')}
            type="password"
            name="password"
            placeholder="password"
          />
          <p className="form-text mx-1">{errors.password?.message}</p>
        </FloatingLabel>

        <div className="d-grid">
          <LoadingButton
            buttonText="Login"
            type="submit"
            isValid={isValid}
            loading={isLoading}
          />
        </div>
      </form>
    </>
  );
}

export default LoginForm;
