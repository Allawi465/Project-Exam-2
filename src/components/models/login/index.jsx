import Modal from 'react-bootstrap/Modal';
import { SignUp } from '../../../style/buttons';

function LoginModel(props) {

    const { show, onClose, onSignUpClick  } = props;

  return (
    <>
      <Modal show={show} onHide={onClose}  animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
        <SignUp onClick={onSignUpClick}>Sign up</SignUp>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModel;