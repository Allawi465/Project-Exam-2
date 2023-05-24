import Alert from 'react-bootstrap/Alert';

/**
 * Component that displays an error message using the Alert component from bootstrap
 * @component
 * @param {Object} props The component props
 * @param {string} props.variant The variant is the color of the Alert component
 * @param {string} props.text The error message text show when error occurs
 * @returns {React.ReactElement} return ErrorMessage component
 * @example
 * {
 * return <Alert variant={variant}>{text}</Alert>;
 * }
 */
function ErrorMessage({ variant, text }) {
  return <Alert variant={variant}>{text}</Alert>;
}

export default ErrorMessage;
