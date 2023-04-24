import React from 'react';
import { LoginBtn, SignUpBtn } from '../../../style/buttons';
import LoginModel from './login';
import SignUpModel from './sign-up';
import useModal from '../../../hooks/model/useModel';
    
function ModelCall() {
  const {
    showLoginModel,
    showSignUpModel,
    handleLoginModel,
    handleCloseLoginModel,
    handleSignUpModel,
    handleCloseSignUpModel,
  } = useModal();

  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
      <LoginBtn onClick={handleLoginModel}>
        Login
      </LoginBtn>
      <SignUpBtn onClick={handleSignUpModel}>Sign up</SignUpBtn>
      <LoginModel show={showLoginModel} onClose={handleCloseLoginModel} onSignUpClick={handleSignUpModel} />
      <SignUpModel show={showSignUpModel} onClose={handleCloseSignUpModel} onSignUpClick={handleLoginModel} />
    </div>
  )
}

export default ModelCall;