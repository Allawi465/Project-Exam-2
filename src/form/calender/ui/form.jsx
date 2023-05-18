import Calendar from 'react-calendar';
function FormUi({
  OnFormSubmit,
  handleSelect,
  date,
  unavailableDays,
  formError,
  removeGuests,
  addGuests,
  handleCloseForm,
  guests,
}) {
  return (
    <form onSubmit={OnFormSubmit} className="calender-form">
      <div>
        <h1 className="h5 mx-2 pt-2 mb-0">Booking Details</h1>
      </div>
      <Calendar
        className="calender-form"
        onChange={handleSelect}
        value={date}
        selectRange={true}
        tileDisabled={unavailableDays}
        minDate={new Date()}
      />
      {formError && <p className="error-message mx-2 my-0">{formError}</p>}
      {date && date[0] && date[1] && (
        <div className="guests-dates mt-2 mx-2">
          <p className="my-0">Selected dates:</p>
          <div className="d-flex">
            <p className="my-0">{date[0].toLocaleDateString()} -</p>
            <p className="my-0">{date[1].toLocaleDateString()} </p>
          </div>
        </div>
      )}
      <div className="guests me-2 mb-1">
        <p className="my-0 mx-2">Number of Guests: </p>
        <div className="guests-content">
          <button className="guests-content-btn" onClick={removeGuests}>
            -
          </button>
          <p className="guests-content-numberOfGuest mt-1 mx-2">{guests}</p>
          <button className="guests-content-btn" onClick={addGuests}>
            +
          </button>
        </div>
      </div>
      <div className="mb-2 d-flex justify-content-end">
        <button
          className="mb-1 mx-2 booking-btn"
          type="submit"
          onClick={handleCloseForm}
        >
          Done
        </button>
      </div>
    </form>
  );
}

export default FormUi;
