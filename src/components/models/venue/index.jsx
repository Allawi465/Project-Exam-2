import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomModal } from '..';
import { useApiActions } from '../../../hooks/index';
import { load } from '../../../utils/localStorage';
import { AuthContext } from '../../../api';
import { DeletingBtn } from '../../../style/buttons';

function DeleteVenuesModel({ show, onClose, id }) {
  const { dataLogin, setVenues } = useContext(AuthContext);
  const { fetchData, isError } = useApiActions();
  const [errorMessage, setErrorMessage] = useState('');
  const name = (dataLogin && dataLogin.name) || load('user')?.name || '';

  const navigate = useNavigate();

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
