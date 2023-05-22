import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useApiActions from '../../hooks/api/useApiActions';
import CreateForm from './createForm';

function CreateVenueForm() {
  // Authentication and API data handling
  const { isLoading, fetchData } = useApiActions();
  // Form validation using React Hook Form and Yup
  const navigate = useNavigate();
  // State for error message
  const [errorMessage, setErrorMessage] = useState('');

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
      />
    </>
  );
}

export default CreateVenueForm;
