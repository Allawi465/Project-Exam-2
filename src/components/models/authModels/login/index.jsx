import Modal from 'react-bootstrap/Modal';
import { ModelBtn } from '../../../../style/buttons';
import LoginForm from '../../../../form/login';

function LoginModel(props) {

    const { show, onClose, onSignUpClick  } = props;

  return (
    <>
      <Modal show={show} onHide={onClose}  animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm/>
        </Modal.Body>
        <Modal.Footer>
        <Modal.Title>Login</Modal.Title>
        <ModelBtn onClick={onSignUpClick}>Sign up</ModelBtn>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModel;