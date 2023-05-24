import { IsSubmitted, FormUi } from './ui/index';
import { useBookingCalendar } from '../../hooks';

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
