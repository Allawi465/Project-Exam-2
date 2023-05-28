import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import LoadingButton from '../../components/LoadingButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './register';
import useApiActions from '../../hooks/api/useApiActions';

/**
 * Renders a register form component with validation and error handling
 * @component
 * @param {object} props Component props
 * @param {function} props.onSignUpClick Callback function to close the register model and opens login model
 * @property {function} OnFormSubmit A function to handle inputs through API call
 * @property {function} useApiActions A hook for fetching data from an API endpoint and handling loading state
 * @property {boolean} isLoading True if API request is loading, false otherwise
 * @property {function} fetchData Function to fetch data from an API endpoint
 * @property {function} save Saves data to local storage
 * @returns {React.ReactElement} register form component
 * @example
 * <ChangeAvatarForm onSignUpClick={onSignUpClick} />
 */

function SignUpForm({ onLoginClick }) {
  // Authentication and API data handling
  const { isLoading, fetchData } = useApiActions();
  // Form validation using React Hook Form and Yup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // State for error message
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * Handler form submission
   * @async
   * @param {object} formData Form data
   */

  const OnFormSubmit = async (formData) => {
    // Call API to register a user
    const newUser = await fetchData('/auth/register', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    // Set error message if API response haves an error
    if (newUser.isError) {
      setErrorMessage(newUser.isError);
    } else {
      // Close modal, opens login form and reset form
      setErrorMessage('');
      onLoginClick();
      reset();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(OnFormSubmit)}>
        {errorMessage && (
          <p style={{ color: 'var(--color-red)' }}>{errorMessage}</p>
        )}
        <FloatingLabel label="Name" className="my-3">
          <Form.Control
            {...register('name')}
            type="text"
            name="name"
            placeholder="name"
          />
          <p className="form-text mx-1">{errors.name?.message}</p>
        </FloatingLabel>

        <FloatingLabel label="Email address" name="email" className="my-3">
          <Form.Control
            {...register('email')}
            type="email"
            name="email"
            placeholder="name@stud.noroff.no"
          />
          <p className="form-text mx-1">{errors.email?.message}</p>
        </FloatingLabel>

        <FloatingLabel label="Avatar" className="my-3">
          <Form.Control
            {...register('avatar')}
            type="url"
            name="avatar"
            placeholder="avatar"
          />
          <p className="form-text mx-1">{errors.avatar?.message}</p>
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

        <div className="d-flex mb-3 mx-1">
          <label htmlFor="switch" className="me-2">
            Become a host
          </label>
          <Form.Check
            {...register('venueManager')}
            type="switch"
            id="custom-switch"
            defaultChecked={true}
            name="venueManager"
          />
        </div>

        <div className="d-grid">
          <LoadingButton
            buttonText="Sign up"
            type="submit"
            isValid={isValid}
            Loading={isLoading}
          />
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
