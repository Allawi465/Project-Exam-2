import { CustomModal } from '..';
import { ModelBtn } from '../../../style/buttons';
import { SignUpForm } from '../../../form/index';

/**
 * Renders a modal for signing up with an option button to login
 * @component
 * @param {Object} props The component props
 * @param {boolean} props.show Whether the modal should be displayed
 * @param {function} props.onClose The function to call when the modal is closed
 * @param {function} props.onLoginClick The function to call when the "Login" button is clicked
 * @property {function} SignUpForm A form that handles user input
 * @returns {React.ReactElement} The LoginModel component
 * @example
 * <SignUpModel show={props.show} onClose={props.onClose} onLoginClick={props.onLoginClick} />
 */

function SignUpModel({ show, onClose, onLoginClick }) {
  return (
    <CustomModal
      show={show}
      onHide={onClose}
      title="Sign up"
      content={<SignUpForm onLoginClick={onLoginClick} />}
      onLoginClick={onLoginClick}
      footerTitle={'login'}
      footerContent={<ModelBtn onClick={onLoginClick}>Login</ModelBtn>}
    />
  );
}

export default SignUpModel;
