import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import NavbarDropdown from '../dropdown';
import { AuthContext } from '../../../../api';
import { load } from '../../../../utils/localStorage';
import { useModel } from '../../../../hooks';
import { VenueMangerModel } from '../../../index';

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
    (dataLogin && dataLogin.venueManger) || load('venueManger');
  const { name } = dataLogin ? dataLogin : load('user');
  const { handleCloseVenueManger, showVenueManger, handleOpenVenueManger } =
    useModel();
  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end flex-grow-1">
          <Nav.Link as={NavLink} to={'/'}>
            Home
          </Nav.Link>
          {venueManger === false && (
            <Nav.Link onClick={handleOpenVenueManger}>Become a host</Nav.Link>
          )}
          <Nav.Link as={NavLink} to={`/profile/${name}`}>
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
      <VenueMangerModel
        show={showVenueManger}
        onClose={handleCloseVenueManger}
      />
    </>
  );
}

export default UserNavbar;
