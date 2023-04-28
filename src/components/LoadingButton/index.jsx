import { useEffect, useState } from 'react';
import { ModelLoadingBtn } from '../../style/buttons';
import Spinner from 'react-bootstrap/Spinner';

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