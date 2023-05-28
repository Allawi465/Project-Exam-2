import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useApiActions from '../../hooks/api/useApiActions';
import CreateForm from './createForm';

/**
 * Renders a create form component with validation and error handling
 * @component
 * @property {function} OnFormSubmit A function to handle inputs through API call
 * @property {function} useApiActions A hook for fetching data from an API endpoint and handling loading state
 * @property {boolean} isLoading True if API request is loading, false otherwise
 * @property {function} fetchData Function to fetch data from an API endpoint
 * @property {function} CreateForm Function to render form fields
 * @returns {React.ReactElement} create form component
 * @example
 * <CreateVenueForm />
 */

function CreateVenueForm() {
  // Authentication and API data handling
  const { isLoading, fetchData } = useApiActions();
  // Form validation using React Hook Form and Yup
  const navigate = useNavigate();
  // State for error message
  const [errorMessage, setErrorMessage] = useState('');
  // creating empty object for default values
  const defaultValues = {};

  /**
   * Handler form submission
   * @async
   * @param {object} formData Form data
   */

  const OnFormSubmit = async (formData, media) => {
    const {
      name,
      description,
      price,
      maxGuests,
      rating,
      wifi,
      parking,
      breakfast,
      pets,
      address,
      city,
      zip,
      country,
    } = formData;

    const venueData = {
      name: name,
      description: description,
      media: [...media, formData.media],
      price: parseInt(price),
      maxGuests: parseInt(maxGuests),
      rating: parseInt(rating),
      meta: {
        wifi: wifi,
        parking: parking,
        breakfast: breakfast,
        pets: pets,
      },
      location: {
        address: address,
        city: city,
        zip: zip,
        country: country,
      },
    };

    // Call API to change avatar url
    const create = await fetchData(`/venues`, {
      method: 'Post',
      body: JSON.stringify(venueData),
    });
    // Set error message if API response haves an error
    if (create.isError) {
      setErrorMessage(create.isError);
    } else {
      // Set user data and avatar in context and local storage
      const { id } = create.data;
      navigate(`/venue/${id}`, { replace: true });
      // Close modal and reset form
      setErrorMessage('');
    }
  };

  return (
    <>
      <CreateForm
        OnFormSubmit={OnFormSubmit}
        isLoading={isLoading}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        defaultValues={defaultValues}
        btnText={'Host now'}
      />
    </>
  );
}

export default CreateVenueForm;
