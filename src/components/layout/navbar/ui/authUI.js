import { useContext, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import NavbarDropdown from '../dropdown';
import { AuthContext } from '../../../../api';
import { load } from '../../../../utils/localStorage';
import { useModel } from '../../../../hooks';
import { VenueMangerModel } from '../../../index';
import { AiOutlineClose } from 'react-icons/ai';
import { GrMenu } from 'react-icons/gr';

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
  const [collapsed, setCollapsed] = useState(true);
  let location = useLocation();
  let pathname = location.pathname;

  useEffect(() => {
    setCollapsed(true);
  }, [pathname]);

  return (
    <>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => setCollapsed((prevCollapsed) => !prevCollapsed)}
        aria-expanded={!collapsed}
      >
        {collapsed ? <GrMenu size={30} /> : <AiOutlineClose size={25} />}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" in={!collapsed}>
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
