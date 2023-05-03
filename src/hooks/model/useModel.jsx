import { useState } from 'react';

export default function useModal() {
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
