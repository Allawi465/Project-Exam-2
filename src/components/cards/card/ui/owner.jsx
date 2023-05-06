import { useContext } from 'react';
import { BsFillChatSquareTextFill } from 'react-icons/bs';
import defaultAvatar from '../../../../images/defaultAvatar.jpg';
import { useModel } from '../../../../hooks';
import { LoginModel, SignUpModel } from '../../../index';
import { AuthContext } from '../../../../api';
import { load } from '../../../../utils/localStorage';

function Owner({ avatar, ownerName, email }) {
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
          onSignUpClick={handleLoginModel}
        />
      </div>
    </div>
  );
}

export default Owner;
