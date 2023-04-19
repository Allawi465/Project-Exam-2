import { FloatingLabel, Form } from 'react-bootstrap';
import LoadingButton from '../../components/LoadingButton';

function LoginForm() {

    return (
        <>
            <form>

                <FloatingLabel label="Email address" name="email" className="my-3 text-black">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel label="Password"
                    className="my-3 text-black">
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="password"
                    />
                </FloatingLabel>

                <div className="d-grid">
                 <LoadingButton buttonText="Login" />
                </div>
            </form>
        </>
    );
}

export default LoginForm;