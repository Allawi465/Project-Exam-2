import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarDropdown from '../dropdown';
import { NavLink } from 'react-router-dom';

function UserNavbar() {
  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end flex-grow-1">
          <Nav.Link as={NavLink} to={'/'}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to={'/profile'}>
            Host you place
          </Nav.Link>
          <Nav.Link as={NavLink} to={'/profile'}>
            Profile
          </Nav.Link>
          <NavbarDropdown />
        </Nav>
      </Navbar.Collapse>
    </>
  );
}

export default UserNavbar;
