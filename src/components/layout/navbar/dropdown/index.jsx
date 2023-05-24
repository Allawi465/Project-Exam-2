import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { AuthContext } from '../../../../api';
import { load } from '../../../../utils/localStorage';
import { useModel } from '../../../../hooks/index';
import { SettingsModel, VenueMangerModel } from '../../../index';
import defaultAvatar from '../../../../images/defaultAvatar.jpg';

/**
 * Renders a dropdown component containing user information and settings when user login
 * @component
 * @property {function} useModel A custom hook that provides the functionality for showing the setting avatar model
 * @property {function} handleOpenSettings A function to handle showing the setting model
 * @property {function} handleCloseSettings A function to handle closing setting model
 * @property {function} AuthContext getting the authentication state from AuthContext
 * @property {function} logout Logout the user and clear the user token and Information
 * @property {function} load authentication state from local Storage
 * @returns {React.ReactElement} return dropdown component
 * @example
 * <NavbarDropdown />
 */

function NavbarDropdown() {
  const {
    showSettings,
    handleCloseSettings,
    handleOpenSettings,
    handleCloseVenueManger,
    showVenueManger,
    handleOpenVenueManger,
  } = useModel();
  const { dataLogin, logout } = useContext(AuthContext);
  const venueManger =
    (dataLogin && dataLogin.venueManger) || load('venueManger');
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
            src={avatar || defaultAvatar}
            alt={name}
            width={30}
            height={30}
            className="rounded-circle"
            onError={(e) => {
              e.target.src = defaultAvatar;
            }}
          />
        )}
        {!avatar && (
          <img
            src={defaultAvatar}
            alt={name}
            width={30}
            height={30}
            className="rounded-circle me-2"
          />
        )}
        <span className="mx-1">{name}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as={NavLink} to={`/profile/${name}`}>
          Profile
        </Dropdown.Item>
        {venueManger === true && (
          <Dropdown.Item as={NavLink} to={'/create'}>
            Host your place
          </Dropdown.Item>
        )}
        {venueManger === false && (
          <Dropdown.Item onClick={handleOpenVenueManger}>
            Become a host
          </Dropdown.Item>
        )}
        <Dropdown.Item onClick={handleOpenSettings}>
          Change avatar
        </Dropdown.Item>

        <SettingsModel show={showSettings} onClose={handleCloseSettings} />
        <VenueMangerModel
          show={showVenueManger}
          onClose={handleCloseVenueManger}
        />
        <Dropdown.Divider />
        <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavbarDropdown;
