import Modal from 'react-bootstrap/Modal';
import { ModelBtn } from '../../../style/buttons';
import SignUpForm from '../../../form/sign-up';

function SignUpModel(props) {

    const { show, onClose, onSignUpClick } = props;

  return (
    <>
      <Modal show={show} onHide={onClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body><SignUpForm onSignUpClick={onSignUpClick} /></Modal.Body>
        <Modal.Footer>
        <Modal.Title>Sign in</Modal.Title>
        <ModelBtn onClick={onSignUpClick}>Login</ModelBtn>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUpModel;