import { Container } from 'react-bootstrap';
import hero from '../../images/hero.jpg';
import { RenderDifferentContent } from './renderContent';

/**
 * A component that render a hero section with a call-to-action to become a host.
 * @component
 * @property {function} RenderDifferentContent render when the user login
 * @returns {React.ReactElement} return Hero component
 * @example
 * <Hero />
 */

function Hero() {
  return (
    <Container className="hero my-4">
      <div className="hero-lead">
        <div className="hero-text">{RenderDifferentContent()}</div>
        <div className="hero-img">
          <img src={hero} alt="House located in the north" />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
