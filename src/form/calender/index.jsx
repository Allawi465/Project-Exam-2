import { IsSubmitted, FormUi } from './ui/index';
import { useBookingCalendar } from '../../hooks';

/**
 * Renders the booking form and handles form submission
 * @component
 * @param {Object} props The component props
 * @param {Array} props.bookings The existing bookings
 * @param {number} props.maxGuest The maximum number of guests allowed
 * @param {string} props.id The venue ID
 * @param {number} props.price The price
 * @property {function} FormUi A function to handle user input for booking
 * @property {function} IsSubmitted A function to show the selected input and handles booking requests
 * @returns {JSX.ReactElement} The booking form component
 * @example
 * <BookingForm
 *  bookings={bookings}
 *  maxGuest={maxGuests}
 *  id={id}
 *  price={price}
 *  />
 */

function BookingForm({ bookings, maxGuest, id, price }) {
  const {
    date,
    handleSelect,
    unavailableDays,
    formError,
    calculatePrice,
    handleShowForm,
    handleCloseForm,
    removeGuests,
    validateForm,
    addGuests,
    guests,
    isFormSubmitted,
  } = useBookingCalendar(bookings, maxGuest, id, price);

  const OnFormSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }
  };

  return (
    <>
      {isFormSubmitted ? (
        <IsSubmitted
          handleShowForm={handleShowForm}
          date={date}
          guests={guests}
          price={price}
          id={id}
          calculatePrice={calculatePrice}
        />
      ) : (
        <FormUi
          OnFormSubmit={OnFormSubmit}
          onChange={handleSelect}
          value={date}
          tileDisabled={unavailableDays}
          formError={formError}
          removeGuests={removeGuests}
          addGuests={addGuests}
          handleCloseForm={handleCloseForm}
          guests={guests}
          price={price}
        />
      )}
    </>
  );
}

export default BookingForm;
