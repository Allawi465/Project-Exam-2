import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../../images/logo.jpg';

function Logo() {
  return (
    <Navbar.Brand as={Link} to="/" className="pb-0">
      <img
        src={logo}
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="Holidaze logo"
      />
    </Navbar.Brand>
  );
}

export default Logo;
