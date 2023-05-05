import Alert from 'react-bootstrap/Alert';

function ErrorMessage({ variant, text }) {
  return <Alert variant={variant}>{text}</Alert>;
}

export default ErrorMessage;
