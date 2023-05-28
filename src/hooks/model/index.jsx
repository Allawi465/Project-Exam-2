import { useState } from 'react';

/**
 * @typedef {Object} useModel return
 * @property {function} handleOpenSettings A function to handle showing the setting model
 * @property {function} handleCloseSettings A function to handle closing setting model
 * @property {function} handleLoginModel A function to handle showing the login modal
 * @property {function} handleCloseLoginModel A function to handle closing the login modal
 * @property {function} handleSignUpModel A function to handle showing the sign up modal
 * @property {function} handleCloseSignUpModel A function to handle closing the sign up modal
 * @property {function} handleOpenDelete A function to handle showing the delete modal
 * @property {function} handleCloseDelete A function to handle closing the delete modal
 * @property {function} handleOpenVenueManger A function to handle showing venueManger model
 * @property {function} handleCloseVenueManger A function to handle closing venueManger model
 */

/**
 *  A custom hook that provides the functionality for showing and close modals
 *  @returns {useModel}
 *  @example
 *  const { showSettings, handleCloseSettings, handleOpenSettings } = useModel();
 */

function useModel() {
  const [showLoginModel, setShowLoginModel] = useState(false);
  const [showDeleteModel, setDeleteModel] = useState(false);
  const [showSignUpModel, setShowSignUpModel] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showVenueManger, setVenueManger] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleOpenVenueManger = () => {
    setVenueManger(true);
  };

  const handleCloseVenueManger = () => {
    setVenueManger(false);
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  const handleOpenDelete = (id) => {
    setDeleteId(id);
    setDeleteModel(true);
  };

  const handleCloseDelete = () => {
    setDeleteModel(false);
  };

  const handleLoginModel = () => {
    setShowLoginModel(true); // opens the login model
    setShowSignUpModel(false); // close the sign up model if it's open
  };

  const handleCloseLoginModel = () => {
    setShowLoginModel(false);
  };

  const handleSignUpModel = () => {
    setShowSignUpModel(true); // opens the sign up model
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
    handleOpenDelete,
    handleCloseDelete,
    showDeleteModel,
    deleteId,
    showVenueManger,
    handleOpenVenueManger,
    handleCloseVenueManger,
  };
}

export default useModel;
