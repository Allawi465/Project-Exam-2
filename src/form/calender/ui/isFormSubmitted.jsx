import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModelLoadingBtn } from '../../../style/buttons';
import { useModel } from '../../../hooks/index';
import { LoginModel, SignUpModel } from '../../../components/index';
import { AuthContext } from '../../../api';
import { useApiActions } from '../../../hooks/index';
import { load } from '../../../utils/localStorage';

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
        navigate('/profile', { replace: true });
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
