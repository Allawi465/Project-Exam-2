import { useContext } from 'react';
import { load } from '../../utils/localStorage';
import { HeroBtn } from '../../style/buttons';
import { useModel } from '../../hooks/index';
import { SignUpModel, LoginModel, VenueMangerModel } from '../index';
import { AuthContext } from '../../api';
import { Link } from 'react-router-dom';

/**
 * A component that renders different content when based user token and role
 * @component
 * @property {function} AuthContext getting the authentication state from AuthContext
 * @property {function} load authentication state from local Storage
 * @property {function} useModel A custom hook that provides the functionality for showing the login and sign up modals
 * @property {boolean} showLoginModel A boolean that determines whether to show the login modal
 * @property {boolean} showSignUpModel A boolean that determines whether to show the sign up modal
 * @property {function} handleLoginModel A function to handle showing the login modal
 * @property {function} handleCloseLoginModel A function to handle closing the login modal
 * @property {function} handleSignUpModel A function to handle showing the sign up modal
 * @property {function} handleCloseSignUpModel A function to handle closing the sign up modal
 * @property {function} handleCloseVenueManger A function to handle closing the setting VenueManger modal
 * @property {function} handleOpenVenueManger A function to handle showing the setting VenueManger modal
 * @returns {React.ReactElement} return Hero component
 * @example
 * <Hero />
 */

export function RenderDifferentContent() {
  const { dataLogin } = useContext(AuthContext);
  const {
    showLoginModel,
    showSignUpModel,
    handleLoginModel,
    handleCloseLoginModel,
    handleSignUpModel,
    handleCloseSignUpModel,
    handleCloseVenueManger,
    showVenueManger,
    handleOpenVenueManger,
  } = useModel();
  const user = dataLogin ? dataLogin : load('user');
  const venueManger =
    (dataLogin && dataLogin.venueManger) || load('venueManger');
  if (!user) {
    return (
      <div className="hero-text-container">
        <h1>Want to host your own place?</h1>
        <p>Earn passive income by renting properties!</p>
        <div className="hero-text-button">
          <HeroBtn onClick={handleSignUpModel}>Become a host</HeroBtn>
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
  } else if (venueManger === true) {
    return (
      <div className="hero-text-container">
        <h1>Want to host your own place?</h1>
        <p>Earn passive income by renting properties!</p>
        <div className="hero-text-button">
          <HeroBtn as={Link} to="/create">
            Host your place
          </HeroBtn>
        </div>
      </div>
    );
  } else {
    return (
      <div className="hero-text-container">
        <h1>Want to host your own place?</h1>
        <p>Earn passive income by renting properties!</p>
        <HeroBtn onClick={handleOpenVenueManger}>Become a host</HeroBtn>
        <VenueMangerModel
          show={showVenueManger}
          onClose={handleCloseVenueManger}
        />
      </div>
    );
  }
}
