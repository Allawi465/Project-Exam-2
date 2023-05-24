import Spinner from 'react-bootstrap/Spinner';

/**
 * Component that displays an spinner using the Spinner component from bootstrap
 * @component
 * @returns {React.ReactElement} return Loading component
 * @example
 * {
 * <Spinner animation="border" role="status"></Spinner>
 * }
 */

function Loading() {
  return (
    <div>
      <Spinner animation="border" role="status"></Spinner>
    </div>
  );
}

export default Loading;
