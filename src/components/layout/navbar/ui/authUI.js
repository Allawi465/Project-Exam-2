import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import NavbarDropdown from '../dropdown';
import { AuthContext } from '../../../../api';
import { load } from '../../../../utils/localStorage';

/**
 * The UserNavbar component render the navigation bar for login users
 * @component
 * @property {function} AuthContext getting the authentication state from AuthContext
 * @returns {React.ReactElement} return UserNavbar component
 * @example
 * <UserNavbar />
 */

function UserNavbar() {
  const { dataLogin } = useContext(AuthContext);
  const venueManger =
    load('venueManger') || (dataLogin && dataLogin.venueManger);
  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end flex-grow-1">
          <Nav.Link as={NavLink} to={'/'}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to={'/profile'}>
            Profile
          </Nav.Link>
          {venueManger === true && (
            <Nav.Link as={NavLink} to={'/create'}>
              Host your place
            </Nav.Link>
          )}
          <NavbarDropdown />
        </Nav>
      </Navbar.Collapse>
    </>
  );
}

export default UserNavbar;
