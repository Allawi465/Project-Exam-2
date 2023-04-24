import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo';
import ModelCall from '../../models/authModels';
import NavbarDropdown from '../../dropdown';

function NavBar() {

  return (
    <Navbar variant="light" expand="sm" style={{ background: 'white' }}>
      <Container>
        <Logo/>
        <Nav style={{display: 'flex', flexDirection: 'row'}}>
         <ModelCall />
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
            <Nav.Link as={NavLink} to={"/profile"}>Host you place</Nav.Link>
            <Nav.Link as={NavLink} to={"/profile"}>Profile</Nav.Link>
            <NavbarDropdown />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}  */

export default NavBar;