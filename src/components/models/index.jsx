import { Modal } from 'react-bootstrap';

/**
 * A custom modal component
 * @component
 * @param {Object} props The component props
 * @param {boolean} props.show Indicates whether the modal should be shown
 * @param {function} props.onHide Callback function to handle modal close event
 * @param {string} props.title The title of the modal
 * @param {string} props.body The body content of the modal
 * @param {React.ReactElement} props.content Additional content to be displayed in the modal body
 * @param {string} props.footerTitle The title of the modal footer
 * @param {React.ReactElement} props.footerContent Additional content to be displayed in the modal footer
 * @returns {React.ReactElement} The custom modal component
 * @example
 *  <CustomModal
 *   show={show}
 *   onHide={onClose}
 *   title="Settings"
 *   body="Want to host your own place?"
 *   content={<VenueMangerForm onClose={onClose} />}
 *   onSignUpClick={onSignUpClick}
 *   />
 */

export function CustomModal({
  show,
  onHide,
  title,
  body,
  content,
  footerTitle,
  footerContent,
}) {
  return (
    <Modal show={show} onHide={onHide} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="h6">{body}</div>
        {content}
      </Modal.Body>
      {footerTitle && footerContent && (
        <Modal.Footer>
          <Modal.Title>{footerTitle}</Modal.Title>
          {footerContent}
        </Modal.Footer>
      )}
    </Modal>
  );
}
