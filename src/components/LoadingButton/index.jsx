import { useEffect, useState } from 'react';
import { ModelLoadingBtn } from '../../style/buttons';
import Spinner from 'react-bootstrap/Spinner';

function LoadingButton({ buttonText }) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 3000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
     <ModelLoadingBtn
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
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
