import NavDropdown from 'react-bootstrap/NavDropdown';
import useModal from '../../hooks/model/useModel';
import SettingsModel from '../models/settings';

function NavbarDropdown() {
    const {
        showSettings,
        handleCloseSettings,
        handleOpenSettings
      } = useModal();
      
  return (
      <NavDropdown id="basic-nav-dropdown" title="dropdown">
            <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Host your place</NavDropdown.Item>
              <NavDropdown.Item onClick={handleOpenSettings}>Settings</NavDropdown.Item>
              <SettingsModel show={showSettings} onClose={handleCloseSettings} />
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sign out</NavDropdown.Item>
            </NavDropdown>
  );
}

export default NavbarDropdown;