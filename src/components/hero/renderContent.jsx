import { useContext } from 'react';
import { load } from '../../utils/localStorage';
import { HeroBtn } from '../../style/buttons';
import { useModel } from '../../hooks/index';
import { SignUpModel, LoginModel, VenueMangerModel } from '../index';
import { AuthContext } from '../../api';
import { Link } from 'react-router-dom';

export function RenderDifferentContent() {
  const { dataLogin } = useContext(AuthContext);
  const {
    showLoginModel,
    showSignUpModel,
    handleLoginModel,
    handleCloseLoginModel,
    handleSignUpModel,
    handleCloseSignUpModel,
    showSettings,
    handleCloseSettings,
    handleOpenSettings,
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
        <HeroBtn onClick={handleOpenSettings}>Become a host</HeroBtn>
        <VenueMangerModel show={showSettings} onClose={handleCloseSettings} />
      </div>
    );
  }
}
