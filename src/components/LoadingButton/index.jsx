import { useEffect, useState } from 'react';
import { ModelLoadingBtn } from '../../style/buttons';
import Spinner from 'react-bootstrap/Spinner';

/**
 * A button component with loading state
 * @component
 * @param {Object} props The component props.
 * @param {string} props.buttonText The text to display in the button.
 * @param {boolean} props.isValid Whether the button should be enabled or disabled
 * @param {boolean} props.loading Whether the button is currently in a loading state
 * @returns {React.ReactElement} A loading button component
 * @example
 * <LoadingButton
 * buttonText="Login"
 * type="submit"
 * isValid={isValid}
 * loading={isLoading}
 * />
 */

function LoadingButton({ buttonText, isValid, loading }) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading, loading, isValid]);

  useEffect(() => {
    if (!loading) {
      setLoading(false);
    }
  }, [loading]);

  const handleClick = () => setLoading(true);

  return (
    <ModelLoadingBtn
      variant="primary"
      disabled={loading}
      onClick={!isLoading && isValid ? handleClick : null}
    >
      {isLoading ? (
        <>
          <Spinner animation="border" size="sm" />
        </>
      ) : (
        buttonText
      )}
    </ModelLoadingBtn>
  );
}

export default LoadingButton;
