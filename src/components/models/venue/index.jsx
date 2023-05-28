import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomModal } from '..';
import { useApiActions } from '../../../hooks/index';
import { load } from '../../../utils/localStorage';
import { AuthContext } from '../../../api';
import { DeletingBtn } from '../../../style/buttons';

/**
 * Renders a modal for deleting a venue
 * @component
 * @param {Object} props The component props
 * @param {boolean} props.show Whether the modal should be displayed
 * @param {function} props.onClose The function to call when the modal is closed
 * @property {function} OnFormSubmit A form that handles user input
 * @property {function} CustomModal The function that return the custom model
 * @returns {React.ReactElement} The DeleteVenuesModel component
 * @example
 * <DeleteVenuesModel show={show} onClose={onClose} id={id} />
 */

function DeleteVenuesModel({ show, onClose, id }) {
  const { dataLogin, setVenues } = useContext(AuthContext);
  const { fetchData, isError } = useApiActions();
  const [errorMessage, setErrorMessage] = useState('');
  const name = (dataLogin && dataLogin.name) || load('user')?.name || '';

  const navigate = useNavigate();

  /**
   * Handles form submission asynchronously.
   * @async
   * @returns {Promise} A Promise that resolves when the form submission is completed
   */

  const OnFormSubmit = async () => {
    try {
      // Call API to delete the venue
      const deleteVenue = await fetchData(`/venues/${id}`, {
        method: 'delete',
      });

      // Set error message if API response has an error
      if (deleteVenue.isError) {
        setErrorMessage(deleteVenue.isError);
      } else {
        // Updates the venues array by filtering out the venue with the specified id
        setVenues((prevVenues) =>
          prevVenues.filter((venue) => venue.id !== id)
        );
        onClose();
        navigate(`/profile/${name}`);
      }
    } catch (error) {
      // An error occurred during the API call, set the error message
      setErrorMessage(error.message);
    }
  };

  return (
    <CustomModal
      show={show}
      onHide={onClose}
      title="Venue"
      body={
        <>
          {errorMessage && isError && (
            <p style={{ color: 'var(--color-red)' }}>{errorMessage}</p>
          )}
          <p>Are you sure you want to delete your venue?</p>
        </>
      }
      content={
        <DeletingBtn onClick={OnFormSubmit}>Delete the venue</DeletingBtn>
      }
    />
  );
}

export default DeleteVenuesModel;
