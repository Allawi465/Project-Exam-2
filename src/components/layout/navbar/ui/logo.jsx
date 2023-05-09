import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../../images/logo.png';

function Logo() {
  return (
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
  );
}

export default Logo;
