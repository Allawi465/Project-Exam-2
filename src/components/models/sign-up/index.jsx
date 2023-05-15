import Modal from 'react-bootstrap/Modal';
import { ModelBtn } from '../../../style/buttons';
import { SignUpForm } from '../../../form/index';

/**
 * Renders a modal for signing up with an option button to login
 * @component
 * @param {Object} props The component props
 * @param {boolean} props.show Whether the modal should be displayed
 * @param {function} props.onClose The function to call when the modal is closed
 * @param {function} props.onLoginClick The function to call when the "Login" button is clicked
 * @property {function} SignUpForm A form that handles user input
 * @returns {React.ReactElement} The LoginModel component
 * @example
 * <SignUpModel show={props.show} onClose={props.onClose} onLoginClick={props.onLoginClick} />
 */

function SignUpModel({ show, onClose, onLoginClick }) {
  return (
    <>
      <Modal show={show} onHide={onClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm onLoginClick={onLoginClick} />
        </Modal.Body>
        <Modal.Footer>
          <Modal.Title>login</Modal.Title>
          <ModelBtn onClick={onLoginClick}>Login</ModelBtn>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUpModel;
