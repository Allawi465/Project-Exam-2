import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import useModal from '../../../../hooks/model/useModel';
import SettingsModel from '../../../models/settings';
import { load } from '../../../../utils/localStorage';
import { CgProfile } from 'react-icons/cg';
import { AuthContext } from '../../../../api';

function NavbarDropdown() {
  const { showSettings, handleCloseSettings, handleOpenSettings } = useModal();

  const { dataLogin, logout } = useContext(AuthContext);

  const { name } = dataLogin ? dataLogin : load('user');
  const avatar = load('avatar') || dataLogin;

  return (
    <Dropdown className="d-inline">
      <Dropdown.Toggle
        id="dropdown-autoclose-true"
        variant="Link"
        className="dropdown-btn"
      >
        {avatar && (
          <img
            src={avatar}
            alt={name}
            width={30}
            height={30}
            className="rounded-circle"
          />
        )}
        {!avatar && <CgProfile size={20} />}
        <span className="mx-1">{name}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Host your place</Dropdown.Item>
        <Dropdown.Item onClick={handleOpenSettings}>Settings</Dropdown.Item>
        <SettingsModel show={showSettings} onClose={handleCloseSettings} />
        <Dropdown.Divider />
        <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavbarDropdown;
