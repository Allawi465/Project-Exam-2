import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { load } from '../../utils/localStorage';
import hero from '../../images/hero.jpg';
import { HeroBtn } from '../../style/buttons';
import { useModel } from '../../hooks/index';
import { SignUpModel, LoginModel } from '../index';
import { AuthContext } from '../../api';
import { Link } from 'react-router-dom';

/**
 * A component that render a hero section with a call-to-action to become a host.
 * @component
 * @property {function} useModel A custom hook that provides the functionality for showing the login and sign up modals
 * @property {boolean} showLoginModel A boolean that determines whether to show the login modal
 * @property {boolean} showSignUpModel A boolean that determines whether to show the sign up modal
 * @property {function} handleLoginModel A function to handle showing the login modal
 * @property {function} handleCloseLoginModel A function to handle closing the login modal
 * @property {function} handleSignUpModel A function to handle showing the sign up modal
 * @property {function} handleCloseSignUpModel A function to handle closing the sign up modal
 * @returns {React.ReactElement} return Hero component
 * @example
 * <Hero />
 */

function Hero() {
  const { dataLogin } = useContext(AuthContext);
  const user = dataLogin ? dataLogin : load('user');
  const venueManger =
    load('venueManger') || (dataLogin && dataLogin.venueManger);
  console.log(venueManger);
  const {
    showLoginModel,
    showSignUpModel,
    handleLoginModel,
    handleCloseLoginModel,
    handleSignUpModel,
    handleCloseSignUpModel,
  } = useModel();
  const renderContent = () => {
    if (!user) {
      // Content for non-logged in user
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
      // Content for venue manager
      return (
        <div className="hero-text-container">
          <h1>Want to host your own place?</h1>
          <p>Earn passive income by renting properties!</p>
          <div className="hero-text-button">
            <HeroBtn as={Link} to={'/create'}>
              Host your place
            </HeroBtn>
          </div>
        </div>
      );
    } else {
      // Content for regular user
      return (
        <div className="hero-text-container">
          <h1>Need a place to stay during your trip?</h1>
          <p>Discover and book latest venues hosted with us!</p>
        </div>
      );
    }
  };
  return (
    <Container className="hero my-4">
      <div className="hero-lead">
        <div className="hero-text">{renderContent()}</div>
        <div className="hero-img">
          <img src={hero} alt="House located in the north" />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
