import { Container } from 'react-bootstrap';

/**
 * The Footer component render the footer
 * @function
 * @property {function} NavBar render the navbar component
 * @returns {React.ReactElement} return Footer component
 * @example
 *   <Footer />
 */

function Footer() {
  return (
    <footer className="footer mt-3">
      <Container>
        <div className="footer-links">
          <p className="mt-2 mb-1">&copy; 2023 HOLIDAZE</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
