import { LoginBtn, SignUpBtn } from '../../../../style/buttons';
import { SignUpModel, LoginModel } from '../../../index';
import { useModel } from '../../../../hooks';

function UnAuthUi() {
  const {
    showLoginModel,
    showSignUpModel,
    handleLoginModel,
    handleCloseLoginModel,
    handleSignUpModel,
    handleCloseSignUpModel,
  } = useModel();
  return (
    <div>
      <LoginBtn onClick={handleLoginModel} className="me-1">
        Login
      </LoginBtn>
      <SignUpBtn onClick={handleSignUpModel}>Sign up</SignUpBtn>
      <LoginModel
        show={showLoginModel}
        onClose={handleCloseLoginModel}
        onSignUpClick={handleSignUpModel}
      />
      <SignUpModel
        show={showSignUpModel}
        onClose={handleCloseSignUpModel}
        onSignUpClick={handleLoginModel}
      />
    </div>
  );
}

export default UnAuthUi;
