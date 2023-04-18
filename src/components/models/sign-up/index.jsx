import Modal from 'react-bootstrap/Modal';
import { Login } from '../../../style/buttons';

function SignUpModel(props) {

    const { show, onClose, onSignUpClick } = props;

  return (
    <>
      <Modal show={show} onHide={onClose}  animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
        <Login onClick={onSignUpClick}>Login</Login>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUpModel;