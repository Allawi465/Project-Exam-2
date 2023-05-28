import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillChatSquareTextFill } from 'react-icons/bs';
import defaultAvatar from '../../../../images/defaultAvatar.jpg';
import { useModel } from '../../../../hooks';
import { LoginModel, SignUpModel } from '../../../index';
import { AuthContext } from '../../../../api';
import { load } from '../../../../utils/localStorage';

/**
 * A component that render the information about the owner of a property
 *
 * * This component can also handle displaying a login modal if the user is not login
 * @component
 * @param {Object} props The component props
 * @param {string} props.avatar The URL of the owner's avatar image
 * @param {string} props.ownerName The name of the owner
 * @param {string} props.email The email address of the owner
 * @property {function} AuthContext getting the authentication state from AuthContext
 * @property {function} load authentication state from local Storage
 * @property {function} useModel A custom hook that provides the functionality for showing the login and sign up modals
 * @property {boolean} showLoginModel A boolean that determines whether to show the login modal
 * @property {boolean} showSignUpModel A boolean that determines whether to show the sign up modal
 * @property {function} handleLoginModel A function to handle showing the login modal
 * @property {function} handleCloseLoginModel A function to handle closing the login modal
 * @property {function} handleSignUpModel A function to handle showing the sign up modal
 * @property {function} handleCloseSignUpModel A function to handle closing the sign up modal
 * @returns {React.ReactElement} return owner component
 * @example
 * <Owner avatar={avatar} ownerName={name} email={email} />
 */

function Owner({ avatar, ownerName, email }) {
  const navigate = useNavigate();
  const { dataLogin } = useContext(AuthContext);
  const token = dataLogin ? dataLogin : load('token');
  const {
    showLoginModel,
    showSignUpModel,
    handleLoginModel,
    handleCloseLoginModel,
    handleSignUpModel,
    handleCloseSignUpModel,
  } = useModel();

  const handleOwnerVisit = () => {
    if (!token) {
      handleLoginModel(true);
    } else {
      navigate(`/profile/${ownerName}`);
    }
  };

  return (
    <div className="venue-owner my-4">
      <div className="venue-owner-container d-flex">
        <div
          onClick={handleOwnerVisit}
          style={{ width: '42px', height: '42px' }}
          className="me-2"
        >
          {avatar && (
            <img
              src={avatar}
              alt={ownerName}
              width={42}
              height={42}
              className="rounded-circle me-2"
            />
          )}
          {!avatar && (
            <img
              src={defaultAvatar}
              alt={ownerName}
              width={42}
              height={42}
              className="rounded-circle me-2"
            />
          )}
        </div>
        <div className="venue-owner-info">
          <div onClick={handleOwnerVisit}>
            <p className="my-0 text-capitalize">{ownerName}</p>
            <p className="mt-1" style={{ color: 'var(--color-lightgray)' }}>
              Property owner
            </p>
          </div>
          <a className="venue-owner-info-mail mt-1" href={`mailto:${email}`}>
            <BsFillChatSquareTextFill />
          </a>
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
    </div>
  );
}

export default Owner;
