import { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useApiActions } from '../../../hooks/index';
import { AuthContext } from '../../../api';
import { DeletingBtn } from '../../../style/buttons';

function DeleteVenuesModel({ show, onClose, id }) {
  const { fetchData, isError } = useApiActions();
  const [errorMessage, setErrorMessage] = useState('');
  const { setVenues } = useContext(AuthContext);

  const OnFormSubmit = async () => {
    // Call API to change avatar url
    await fetchData(`/venues/${id}`, {
      method: 'delete',
    });
    // Set error message if API response haves an error
    if (isError) {
      setErrorMessage(isError);
    } else {
      setVenues((prevVenues) => prevVenues.filter((venue) => venue.id !== id));
      onClose();
    }
  };

  return (
    <>
      <Modal show={show} onHide={onClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Venue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage && isError && (
            <p style={{ color: 'var(--color-red)' }}>{errorMessage}</p>
          )}
          <p>Are you sure you want to delete your venue?</p>
          <DeletingBtn onClick={OnFormSubmit}>Delete the venue</DeletingBtn>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteVenuesModel;
