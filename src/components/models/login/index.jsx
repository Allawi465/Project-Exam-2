import { CustomModal } from '..';
import { ModelBtn } from '../../../style/buttons';
import { LoginForm } from '../../../form/index';

/**
 * Renders a modal for logging in with an option button to sign up
 * @component
 * @param {Object} props The component props
 * @param {boolean} props.show Whether the modal should be displayed
 * @param {function} props.onClose The function to call when the modal is closed
 * @param {function} props.onSignUpClick The function to call when the "Sign up" button is clicked
 * @property {function} LoginForm A form that handles user input
 * @returns {React.ReactElement} The LoginModel component
 * @example
 * <LoginModel show={props.show} onClose={props.onClose} onSignUpClick={props.onSignUpClick} />
 */

function LoginModel({ show, onClose, onSignUpClick }) {
  return (
    <CustomModal
      show={show}
      onHide={onClose}
      title="Login"
      content={<LoginForm onClose={onClose} />}
      onSignUpClick={onSignUpClick}
      footerTitle={'Sign up'}
      footerContent={<ModelBtn onClick={onSignUpClick}>Sign up</ModelBtn>}
    />
  );
}

export default LoginModel;
