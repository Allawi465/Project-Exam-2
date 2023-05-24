import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import { AuthContext } from '../../../api';
import { load } from '../../../utils/localStorage';
import { UnAuthUi, UserNavbar } from './ui/index';

/**
 * Renders the navigation bar component
 * @component
 * @property {function} AuthContext getting the authentication state from AuthContext
 * @property {function} load authentication state from local Storage
 * @property {function} UserNavbar render the User navbar from a component if authentication state is true
 * @property {function} UnAuthUi render the global navbar from a component if authentication state is false
 * @returns {React.ReactElement} return NavBar component
 * @example
 * <NavBar />
 */

function NavBar() {
  const { dataLogin } = useContext(AuthContext);
  const user = dataLogin ? dataLogin : load('user');

  return (
    <Navbar
      variant="light"
      expand="sm"
      fixed="top"
      style={{ background: 'white' }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo my-0 pt-0">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Holidaze logo"
          />
          Holidaze
        </Navbar.Brand>
        {user ? <UserNavbar /> : <UnAuthUi />}
      </Container>
    </Navbar>
  );
}

export default NavBar;
