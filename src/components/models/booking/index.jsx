import { useState, useContext } from 'react';
import { CustomModal } from '..';
import { useApiActions } from '../../../hooks/index';
import { AuthContext } from '../../../api';
import { DeletingBtn } from '../../../style/buttons';

/**
 * Renders a modal for deleting a booking
 * @component
 * @param {Object} props The component props
 * @param {boolean} props.show Whether the modal should be displayed
 * @param {function} props.onClose The function to call when the modal is closed
 * @property {function} OnFormSubmit A form that handles user input
 * @property {function} CustomModal The function that return the custom model
 * @returns {React.ReactElement} The CancelBookingsModel component
 * @example
 * <CancelBookingsModel show={show} onClose={onClose} id={id} />
 */

function CancelBookingsModel({ show, onClose, id }) {
  const { fetchData, isError } = useApiActions();
  const [errorMessage, setErrorMessage] = useState('');
  const { setBookings } = useContext(AuthContext);

  /**
   * Handles form submission asynchronously.
   * @async
   * @returns {Promise} A Promise that resolves when the form submission is completed
   */

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
        // Updates the bookings array by filtering out the booking with the specified id
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
