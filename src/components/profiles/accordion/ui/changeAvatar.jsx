import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useModel } from '../../../../hooks/index';
import { SettingsModel } from '../../../index';

/**
 * A component that renders the settings avatar button
 * @component
 * @property {function} useModel A custom hook that provides the functionality for showing the setting avatar model
 * @property {function} handleOpenSettings A function to handle showing the setting model
 * @property {function} handleCloseSettings A function to handle closing setting model
 * @returns {React.ReactElement} The settings avatar button component
 * @example
 * <SettingsAvatarBtn />
 */

function SettingsAvatarBtn() {
  const { showSettings, handleCloseSettings, handleOpenSettings } = useModel();

  return (
    <>
      <div
        className="profile-avatar-container-settings"
        onClick={handleOpenSettings}
      >
        <AiOutlinePlusCircle size={25} />
      </div>
      <SettingsModel show={showSettings} onClose={handleCloseSettings} />
    </>
  );
}

export default SettingsAvatarBtn;
