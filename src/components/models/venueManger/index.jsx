import Modal from 'react-bootstrap/Modal';
import { VenueMangerForm } from '../../../form/index';

/**
 * Renders a modal for change the user avatar
 * @component
 * @param {Object} props The component props
 * @param {boolean} props.show Whether the modal should be displayed
 * @param {function} props.onClose The function to call when the modal is closed
 * @property {function} ChangeAvatarForm A form that handles user input
 * @returns {React.ReactElement} The SettingsModel component
 * @example
 * <SettingsModel show={props.show} onClose={props.onClose}/>
 */

function VenueMangerModel({ show, onClose }) {
  return (
    <>
      <Modal show={show} onHide={onClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="h6">Want to host your own place?</p>
          <VenueMangerForm onClose={onClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VenueMangerModel;
