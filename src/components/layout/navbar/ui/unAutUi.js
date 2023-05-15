import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { LoginBtn } from '../../../../style/buttons';
import { SignUpModel, LoginModel } from '../../../index';
import { useModel } from '../../../../hooks';

/**
 * A component that renders login and sign up button and providing login and sign-up options
 * @component
 * @property {function} useModel A custom hook that provides the functionality for showing the login and sign up modals
 * @property {function} handleLoginModel A function to handle showing the login modal
 * @property {function} handleCloseLoginModel A function to handle closing the login modal
 * @property {function} handleSignUpModel A function to handle showing the sign up modal
 * @property {function} handleCloseSignUpModel A function to handle closing the sign up modal
 * @returns {React.ReactElement} return UnAuthUi component
 * @example
 * <UnAuthUi />
 */

function UnAuthUi() {
  const {
    showLoginModel,
    showSignUpModel,
    handleLoginModel,
    handleCloseLoginModel,
    handleSignUpModel,
    handleCloseSignUpModel,
  } = useModel();
  return (
    <div className="d-flex">
      <Nav className="justify-content-end flex-grow-1">
        <Nav.Link className="me-2" as={NavLink} to={'/'}>
          Home
        </Nav.Link>
      </Nav>
      <LoginBtn onClick={handleLoginModel} className="me-1">
        Login
      </LoginBtn>
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

export default UnAuthUi;
