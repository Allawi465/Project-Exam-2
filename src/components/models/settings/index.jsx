import Modal from 'react-bootstrap/Modal';
import ChangeAvatarForm from '../../../form/settings';

function SettingsModel(props) {

    const { show, onClose  } = props;

  return (
    <>
      <Modal show={show} onHide={onClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className="h5">Change your avatar:</p>
        <ChangeAvatarForm/>
      </Modal.Body>
      </Modal>
    </>
  );
}

export default SettingsModel;