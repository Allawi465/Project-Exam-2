import Alert from 'react-bootstrap/Alert';

function ErrorMessage(props) {
  return <Alert variant={props.variant}>{props.text}</Alert>;
}

export default ErrorMessage;
