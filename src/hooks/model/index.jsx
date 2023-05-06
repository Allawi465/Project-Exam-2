import { useState } from 'react';

function useModel() {
  const [showLoginModel, setShowLoginModel] = useState(false);
  const [showSignUpModel, setShowSignUpModel] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  const handleLoginModel = () => {
    console.log('handleLoginModel called');
    console.log(showLoginModel);
    setShowLoginModel(true);
    setShowSignUpModel(false); // close the sign up model if it's open
  };

  const handleCloseLoginModel = () => {
    setShowLoginModel(false);
  };

  const handleSignUpModel = () => {
    setShowSignUpModel(true);
    setShowLoginModel(false); // close the login model if it's open
  };

  const handleCloseSignUpModel = () => {
    setShowSignUpModel(false);
  };

  return {
    setShowLoginModel,
    showLoginModel,
    showSignUpModel,
    showSettings,
    handleLoginModel,
    handleCloseLoginModel,
    handleSignUpModel,
    handleCloseSignUpModel,
    handleOpenSettings,
    handleCloseSettings,
  };
}

export default useModel;
