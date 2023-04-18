import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RxAvatar } from 'react-icons/rx'
import Logo from './logo';
import { Login, SignUp } from '../../../style/buttons';
import LoginModel from '../../models/login';
import SignUpModel from '../../models/sign-up';

function NavBar() {
  const [showLoginModel, setShowLoginModel] = useState(false);
  const [showSignUpModel, setShowSignUpModel] = useState(false);

  const handleLoginModel = () => {
    setShowLoginModel(true);
    setShowSignUpModel(false) // close the sign up model if it's open
  };
  
  const handleCloseLoginModel = () => {
    setShowLoginModel(false);
  };
  
  const handleSignUpModel = () => {
    setShowSignUpModel(true);
    setShowLoginModel(false); // close the login model if it's open
  };
  
  const handleCloseSignUpModel = () => {
    setShowSignUpModel(false);
  };

  return (
    <Navbar variant="light" expand="sm" style={{ background: 'white' }}>
      <Container>
        <Logo/>
        <Nav style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <Login onClick={handleLoginModel}>
            Login
          </Login>
          <SignUp onClick={handleSignUpModel}>Sign up</SignUp>
          <LoginModel show={showLoginModel} onClose={handleCloseLoginModel} onSignUpClick={handleSignUpModel} />
          <SignUpModel show={showSignUpModel} onClose={handleCloseSignUpModel} onSignUpClick={handleLoginModel}/>
        </Nav>
      </Container>
    </Navbar>
  );
}

/* function NavBar() {
  return (
    <Navbar variant="light" expand="sm" style={{ background: 'white' }}>
      <Container>
      <Logo/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
            <Nav.Link as={NavLink} to={"/profile"}>Profile</Nav.Link>
            <NavDropdown title={<RxAvatar size={25}/>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Host your place</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sign out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} */

export default NavBar;