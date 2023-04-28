import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './ui/logo';
import UnAuthUi from './ui/unautUi';
import { AuthContext } from '../../../api/auth';
import UserNavbar from './ui/authUI';
import { load } from '../../../utils/localStorage';

function NavBar() {
  const { data } = useContext(AuthContext);
  const user = data ? data : load('user');
  return (
    <Navbar variant="light" expand="sm" style={{ background: 'white' }}>
      <Container>
        <Logo />
        {user ? <UserNavbar /> : <UnAuthUi />}
      </Container>
    </Navbar>
  );
}

export default NavBar;