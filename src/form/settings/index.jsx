import React, { useContext, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SettingsSchema from './schema';
import { AuthContext } from '../../api';
import { load, save } from '../../utils/localStorage';
import { LoadingBtn } from '../../components/index';
import { useApiActions } from '../../hooks/index';

/**
 * Renders a change avatar form component with validation and error handling
 * @component
 * @param {object} props Component props
 * @param {function} props.onClose Callback function to close the modal
 * @property {function} OnFormSubmit A function to handle inputs through API call
 * @property {function} AuthContext getting the authentication state from AuthContext
 * @property {function} useApiActions A hook for fetching data from an API endpoint and handling loading state
 * @property {boolean} isLoading True if API request is loading, false otherwise
 * @property {function} fetchData Function to fetch data from an API endpoint
 * @property {function} save Saves data to local storage
 * @property {function} load Gets the data from local storage
 * @returns {React.ReactElement} change avatar form component
 * @example
 * <ChangeAvatarForm onClose={onClose} />
 */

function ChangeAvatarForm({ onClose }) {
  // Authentication and API data handling
  const { setDataLogin, dataLogin } = useContext(AuthContext);
  const { isLoading, fetchData } = useApiActions();

  // getting the user name from context and local storage
  const user = dataLogin || load('user');
  const { name } = user;

  // Form validation using React Hook Form and Yup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(SettingsSchema),
  });

  // State for error message
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * Handler form submission
   * @async
   * @param {object} formData Form data
   */

  const OnFormSubmit = async (formData) => {
    // Call API to change avatar url
    const user = await fetchData(`/profiles/${name}/media`, {
      method: 'Put',
      body: JSON.stringify(formData),
    });
    // Set error message if API response haves an error
    if (user.isError) {
      setErrorMessage(user.isError);
    } else {
      // Set user data and avatar in context and local storage
      const { avatar, ...userData } = user.data;
      setDataLogin({
        ...userData,
        avatar: avatar,
      });
      save('avatar', avatar);
      // Close modal and reset form
      setErrorMessage('');
      reset();
      onClose();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(OnFormSubmit)}>
        {errorMessage && (
          <p style={{ color: 'var(--color-red)' }}>{errorMessage}</p>
        )}
        <FloatingLabel label="Avatar" className="my-3">
          <Form.Control
            {...register('avatar')}
            type="url"
            name="avatar"
            placeholder="avatar"
          />
          <p className="form-text mx-1">{errors.avatar?.message}</p>
        </FloatingLabel>
        <div className="d-grid">
          <LoadingBtn
            buttonText="Save Changes"
            type="submit"
            isValid={isValid}
            Loading={isLoading}
          />
        </div>
      </form>
    </>
  );
}

export default ChangeAvatarForm;
