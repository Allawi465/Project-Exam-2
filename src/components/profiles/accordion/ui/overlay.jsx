import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useModel } from '../../../../hooks/index';
import { SettingsModel } from '../../../index';

function SettingsAvatarBtn() {
  const { showSettings, handleCloseSettings, handleOpenSettings } = useModel();
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Change your avatar
    </Tooltip>
  );

  return (
    <>
      <OverlayTrigger
        placement="top"
        delay={{ show: 150, hide: 150 }}
        overlay={renderTooltip}
      >
        <button
          className="profile-avatar-container-svg"
          onClick={handleOpenSettings}
        >
          {' '}
          <AiOutlinePlusCircle size={25} />
        </button>
      </OverlayTrigger>
      <SettingsModel show={showSettings} onClose={handleCloseSettings} />
    </>
  );
}

export default SettingsAvatarBtn;
