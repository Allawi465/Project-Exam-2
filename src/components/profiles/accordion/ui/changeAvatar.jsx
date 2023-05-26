import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useModel } from '../../../../hooks/index';
import { SettingsModel } from '../../../index';

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
