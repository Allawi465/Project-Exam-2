import React, { useContext } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../api';
import { load } from '../../../utils/localStorage';
import { UnAuthUi, Logo, UserNavbar } from './ui/index';

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
      <Container style={{ maxWidth: '1300px' }}>
        <Logo />
        {user ? <UserNavbar /> : <UnAuthUi />}
      </Container>
    </Navbar>
  );
}

export default NavBar;
