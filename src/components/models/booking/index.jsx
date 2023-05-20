import { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useApiActions } from '../../../hooks/index';
import { AuthContext } from '../../../api';
import { DeletingBtn } from '../../../style/buttons';

/**
 * Renders a modal for change the user avatar
 * @component
 * @param {Object} props The component props
 * @param {boolean} props.show Whether the modal should be displayed
 * @param {function} props.onClose The function to call when the modal is closed
 * @property {function} ChangeAvatarForm A form that handles user input
 * @returns {React.ReactElement} The SettingsModel component
 * @example
 * <SettingsModel show={props.show} onClose={props.onClose}/>
 */

function CancelBookingsModel({ show, onClose, id }) {
  const { fetchData, isError } = useApiActions();
  const [errorMessage, setErrorMessage] = useState('');
  const { setBookings } = useContext(AuthContext);

  const OnFormSubmit = async () => {
    // Call API to change avatar url
    await fetchData(`/bookings/${id}`, {
      method: 'delete',
    });
    // Set error message if API response haves an error
    if (isError) {
      setErrorMessage(isError);
    } else {
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.id !== id)
      );
      onClose();
    }
  };

  return (
    <>
      <Modal show={show} onHide={onClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage && isError && (
            <p style={{ color: 'var(--color-red)' }}>{errorMessage}</p>
          )}
          <p>Are you sure you want to cancel your booking?</p>
          <DeletingBtn onClick={OnFormSubmit}>Cancel the booking</DeletingBtn>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CancelBookingsModel;
