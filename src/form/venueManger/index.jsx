import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../api';
import LoadingButton from '../../components/LoadingButton';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import useApiActions from '../../hooks/api/useApiActions';
import { load, save } from '../../utils/localStorage';

/**
 * Renders a venue manger form component with validation and error handling
 * @component
 * @param {object} props Component props
 * @param {function} props.onClose Callback function to close the model
 * @property {function} OnFormSubmit A function to handle inputs through API call
 * @property {function} useApiActions A hook for fetching data from an API endpoint and handling loading state
 * @property {boolean} isLoading True if API request is loading, false otherwise
 * @property {function} fetchData Function to fetch data from an API endpoint
 * @property {function} save Saves data to local storage
 * @returns {React.ReactElement} VenueMangerForm form component
 * @example
 * <VenueMangerForm onClose={onClose} />
 */

function VenueMangerForm({ onClose }) {
  const { setDataLogin, dataLogin } = useContext(AuthContext);
  // Authentication and API data handling
  const { isLoading, fetchData } = useApiActions();
  // Form validation using React Hook Form and Yup
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const user = dataLogin || load('user');
  const { name } = user;

  const navigate = useNavigate();

  // State for error message
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * Handler form submission
   * @async
   * @param {object} formData Form data
   */

  const OnFormSubmit = async (formData) => {
    // Call API to change the venueManager state
    const venueManagerRe = await fetchData(`/profiles/${name}`, {
      method: 'put',
      body: JSON.stringify(formData),
    });
    // Set error message if API response haves an error
    if (venueManagerRe.isError) {
      setErrorMessage(venueManagerRe.isError);
    } else {
      // Set venueManager and userData in context and local storage
      const { venueManager, ...userData } = venueManagerRe.data;
      setDataLogin({
        ...userData,
        venueManager: venueManager,
      });
      save('venueManger', venueManager);
      // Close modal, reset the error message and navigate to create venue form
      setErrorMessage('');
      onClose();
      navigate('/create', { replace: true });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(OnFormSubmit)}>
        {errorMessage && (
          <p style={{ color: 'var(--color-red)' }}>{errorMessage}</p>
        )}
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
        <p className="form-text mx-1">{errors.venueManager?.message}</p>
        <div className="d-grid">
          <LoadingButton
            buttonText="Become host"
            type="submit"
            isValid={isValid}
            Loading={isLoading}
          />
        </div>
      </form>
    </>
  );
}

export default VenueMangerForm;
