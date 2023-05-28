import { VenueMangerForm } from '../../../form/index';
import { CustomModal } from '..';

/**
 * Renders a modal for change user venueManager state
 * @component
 * @param {Object} props The component props
 * @param {boolean} props.show Whether the modal should be displayed
 * @param {function} props.onClose The function to call when the modal is closed
 * @property {function} CustomModal The function that return the custom model
 * @property {function} VenueMangerForm A form that handles user input
 * @returns {React.ReactElement} The SettingsModel component
 * @example
 * <VenueMangerModel show={props.show} onClose={props.onClose}/>
 */

function VenueMangerModel({ show, onClose, onSignUpClick }) {
  return (
    <>
      <CustomModal
        show={show}
        onHide={onClose}
        title="Settings"
        body="Want to host your own place?"
        content={<VenueMangerForm onClose={onClose} />}
        onSignUpClick={onSignUpClick}
      />
    </>
  );
}

export default VenueMangerModel;
