import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { AuthContext } from '../../../../api';
import { load } from '../../../../utils/localStorage';
import { useModel } from '../../../../hooks/index';
import { SettingsModel } from '../../../index';
import defaultAvatar from '../../../../images/defaultAvatar.jpg';

function NavbarDropdown() {
  const { showSettings, handleCloseSettings, handleOpenSettings } = useModel();

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
        {!avatar && (
          <img
            src={defaultAvatar}
            alt={name}
            width={42}
            height={42}
            className="rounded-circle me-2"
          />
        )}
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
