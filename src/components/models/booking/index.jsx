import { useState, useContext } from 'react';
import { CustomModal } from '..';
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
    try {
      // Call API to delete the venue
      const bookVenue = await fetchData(`/bookings/${id}`, {
        method: 'delete',
      });

      // Set error message if API response has an error
      if (bookVenue.isError) {
        setErrorMessage(bookVenue.isError);
      } else {
        setBookings((prevBookings) =>
          prevBookings.filter((booking) => booking.id !== id)
        );
        onClose();
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
      title="Booking"
      body={
        <>
          {errorMessage && isError && (
            <p style={{ color: 'var(--color-red)' }}>{errorMessage}</p>
          )}
          <p>Are you sure you want to cancel your booking?</p>
        </>
      }
      content={
        <DeletingBtn onClick={OnFormSubmit}>Delete the venue</DeletingBtn>
      }
    />
  );
}

export default CancelBookingsModel;
