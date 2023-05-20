import { Calender } from '../../../components';
function FormUi({
  OnFormSubmit,
  onChange,
  value,
  tileDisabled,
  formError,
  removeGuests,
  addGuests,
  handleCloseForm,
  defaultValue,
  guests,
}) {
  return (
    <form onSubmit={OnFormSubmit} className="calender-form">
      <div>
        <h1 className="h5 mx-2 pt-2 mt-2">Booking Details</h1>
      </div>
      <Calender
        className="calender-form"
        onChange={onChange}
        value={value}
        tileDisabled={tileDisabled}
      />
      {formError && (
        <p className="mx-2 my-0" style={{ color: 'var(--color-red)' }}>
          {formError}
        </p>
      )}
      {value && value[0] && value[1] && (
        <div className="guests-dates mt-2 mx-2">
          <p className="my-0">Selected dates:</p>
          <div className="d-flex">
            <p className="my-0">{value[0].toLocaleDateString()} -</p>
            <p className="my-0">{value[1].toLocaleDateString()} </p>
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
