import { LoginBtn, SignUpBtn } from '../../../../style/buttons';
import LoginModel from '../../../models/login';
import SignUpModel from '../../../models/sign-up';
import useModal from '../../../../hooks/model/useModel';

function UnAuthUi() {
    const {
        showLoginModel,
        showSignUpModel,
        handleLoginModel,
        handleCloseLoginModel,
        handleSignUpModel,
        handleCloseSignUpModel,
    } = useModal();
    return (
        <div >
            <LoginBtn onClick={handleLoginModel} className='me-1'>
                Login
            </LoginBtn>
            <SignUpBtn onClick={handleSignUpModel}>Sign up</SignUpBtn>
            <LoginModel show={showLoginModel} onClose={handleCloseLoginModel} onSignUpClick={handleSignUpModel} />
            <SignUpModel show={showSignUpModel} onClose={handleCloseSignUpModel} onSignUpClick={handleLoginModel} />
        </div>
    )
}

export default UnAuthUi;