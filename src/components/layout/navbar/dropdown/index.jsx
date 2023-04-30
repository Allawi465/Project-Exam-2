import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import useModal from '../../../../hooks/model/useModel';
import SettingsModel from '../../../models/settings';
import { load } from '../../../../utils/localStorage';
import { CgProfile } from 'react-icons/cg';
import { AuthContext } from '../../../../api';

function NavbarDropdown() {
  const {
    showSettings,
    handleCloseSettings,
    handleOpenSettings
  } = useModal();


  const { dataLogin, logout } = useContext(AuthContext);

  const user = dataLogin ? dataLogin : load('user');
  const { name, avatar } = user;

  return (
    <Dropdown className="d-inline">
      <Dropdown.Toggle id="dropdown-autoclose-true" variant='Link' className='dropdown-btn'>
        {avatar && <img src={avatar} alt={name} width={20} height={20} />}
        {!avatar && <CgProfile size={20} />}
        <span className='mx-1'>{name}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#action/3.3">Profile</Dropdown.Item>
        <Dropdown.Item href="#action/3.1">Host your place</Dropdown.Item>
        <Dropdown.Item onClick={handleOpenSettings}>Settings</Dropdown.Item>
        <SettingsModel show={showSettings} onClose={handleCloseSettings} />
        <Dropdown.Divider />
        <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}


export default NavbarDropdown;