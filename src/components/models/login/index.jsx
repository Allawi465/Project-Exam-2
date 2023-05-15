import Modal from 'react-bootstrap/Modal';
import { ModelBtn } from '../../../style/buttons';
import { LoginForm } from '../../../form/index';

/**
 * Renders a modal for logging in with an option button to sign up
 * @component
 * @param {Object} props The component props
 * @param {boolean} props.show Whether the modal should be displayed
 * @param {function} props.onClose The function to call when the modal is closed
 * @param {function} props.onSignUpClick The function to call when the "Sign up" button is clicked
 * @property {function} LoginForm A form that handles user input
 * @returns {React.ReactElement} The LoginModel component
 * @example
 * <LoginModel show={props.show} onClose={props.onClose} onSignUpClick={props.onSignUpClick} />
 */

function LoginModel({ show, onClose, onSignUpClick }) {
  return (
    <>
      <Modal show={show} onHide={onClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm onClose={onClose} />
        </Modal.Body>
        <Modal.Footer>
          <Modal.Title>Sign up</Modal.Title>
          <ModelBtn onClick={onSignUpClick}>Sign up</ModelBtn>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModel;
