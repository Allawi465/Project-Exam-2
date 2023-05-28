import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModelLoadingBtn } from '../../../style/buttons';
import { useModel } from '../../../hooks/index';
import { LoginModel, SignUpModel } from '../../../components/index';
import { AuthContext } from '../../../api';
import { useApiActions } from '../../../hooks/index';
import { load } from '../../../utils/localStorage';

/**
 * Renders the input details and showing the price of the selected dates
 * @component
 * @param {Object} props The component props
 * @param {function} props.handleShowForm The function to handle showing the form
 * @param {Date} props.date The selected dates
 * @param {number} props.guests The number of guests
 * @param {number} props.price The price of the venue
 * @param {function} props.calculatePrice The function to calculate the total price.
 * @param {string} props.id The venue ID
 * @property {function} AuthContext getting the authentication state from AuthContext
 * @property {function} load authentication state from local Storage
 * @property {function} useModel A custom hook that provides the functionality for showing the login and sign up modals
 * @property {boolean} showLoginModel A boolean that determines whether to show the login modal
 * @property {boolean} showSignUpModel A boolean that determines whether to show the sign up modal
 * @property {function} handleLoginModel A function to handle showing the login modal
 * @property {function} handleCloseLoginModel A function to handle closing the login modal
 * @property {function} handleSignUpModel A function to handle showing the sign up modal
 * @returns {JSX.ReactElement} The rendered input details component
 */

function IsSubmitted({
  handleShowForm,
  date,
  guests,
  price,
  calculatePrice,
  id,
}) {
  const { isLoading, fetchData } = useApiActions();
  const { dataLogin } = useContext(AuthContext);
  const token = dataLogin ? dataLogin : load('token');
  const name = (dataLogin && dataLogin.name) || load('user')?.name;
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const {
    showLoginModel,
    showSignUpModel,
    handleLoginModel,
    handleCloseLoginModel,
    handleSignUpModel,
    handleCloseSignUpModel,
  } = useModel();

  const handleBookingRequest = async () => {
    const formData = {
      dateFrom: date[0].toISOString(),
      dateTo: date[1].toISOString(),
      guests: guests,
      venueId: id,
    };
    if (!token) {
      handleLoginModel(true);
    } else {
      const bookVenue = await fetchData(`/bookings`, {
        method: 'post',
        body: JSON.stringify(formData),
      });
      console.log(formData);
      if (bookVenue.isError) {
        setErrorMessage(bookVenue.isError);
      } else {
        navigate(`/profile/${name}`, { replace: true });
      }
    }
  };

  return (
    <div className="input-details">
      {errorMessage && (
        <p style={{ color: 'var(--color-red)' }}>{errorMessage}</p>
      )}
      <div className="input-details-title mt-2">
        <h1 className="h5 mb-0 mx-2">Your input details</h1>
        <p className="mx-2" onClick={handleShowForm}>
          Edit
        </p>
      </div>
      <div className="guests-dates mt-2 mx-2">
        <p className="my-0 input-details-light">Date</p>
        <div className="d-flex">
          <p className="my-0">{date[0].toLocaleDateString()} -</p>
          <p className="my-0">{date[1].toLocaleDateString()} </p>
        </div>
      </div>
      <div className="guests-dates mt-2 mx-2">
        <p className="my-0 input-details-light">Guests count</p>
        <div className="d-flex">
          <p className="my-0">{guests} guests</p>
        </div>
      </div>
      <div className="input-details-price mt-5 mx-2">
        <h2 className="h5 mb-0 mx-2">Price details</h2>
        <div className="guests-dates mt-2 mx-2">
          <p className="my-0 input-details-light">Staying duration (24 days)</p>
          <div className="d-flex">
            <p className="my-0">${price}</p>
          </div>
        </div>
        <div className="guests-dates mt-2 mx-2">
          <p className="my-0 input-details-light">Service fee</p>
          <div className="d-flex">
            <p className="my-0">$200</p>
          </div>
        </div>
        <div className="guests-dates mt-2 mx-2">
          <p style={{ fontWeight: 'bold' }}>Total price</p>
          <div>
            <p className="my-0" style={{ color: '#673BBF' }}>
              ${calculatePrice()}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <ModelLoadingBtn onClick={handleBookingRequest} Loading={isLoading}>
          Place booking request
        </ModelLoadingBtn>
      </div>
      <LoginModel
        show={showLoginModel}
        onClose={handleCloseLoginModel}
        onSignUpClick={handleSignUpModel}
      />
      <SignUpModel
        show={showSignUpModel}
        onClose={handleCloseSignUpModel}
        onLoginClick={handleLoginModel}
      />
    </div>
  );
}

export default IsSubmitted;
