import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../images/logo.jpg"

function Logo() {
    return (
        <Navbar.Brand href="#home">
        <img
          src={logo}
          width="65"
          height="65"
          className="d-inline-block align-top"
          alt="Holidaze logo"
        />
      </Navbar.Brand>
    )
}

export default Logo;