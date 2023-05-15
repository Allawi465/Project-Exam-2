import { Container } from 'react-bootstrap';
import hero from '../../images/hero.jpg';
import { HeroBtn } from '../../style/buttons';
import { useModel } from '../../hooks/index';
import { SignUpModel, LoginModel } from '../index';

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
  const {
    showLoginModel,
    showSignUpModel,
    handleLoginModel,
    handleCloseLoginModel,
    handleSignUpModel,
    handleCloseSignUpModel,
  } = useModel();
  return (
    <Container className="hero my-4">
      <div className="hero-lead">
        <div className="hero-text">
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
        </div>
        <div className="hero-img">
          <img src={hero} alt="House located in the north" />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
