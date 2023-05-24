import { Modal } from 'react-bootstrap';

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
