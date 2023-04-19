import { FloatingLabel, Form } from 'react-bootstrap';
import LoadingButton from '../../components/LoadingButton';

function SignUpForm() {

    return (
        <>
            <form>
                <FloatingLabel label="Name"
                    className="my-3 text-black">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="name"
                    />
                </FloatingLabel>

                <FloatingLabel label="Email address" name="email" className="my-3 text-black">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com" />
                </FloatingLabel>

                <FloatingLabel label="Avatar"
                    className="my-3 text-black">
                    <Form.Control
                        type="url"
                        name="avatar"
                        placeholder="avatar"
                    />
                </FloatingLabel>

                <FloatingLabel label="Password"
                    className="my-3 text-black">
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="password"
                    />
                </FloatingLabel>

                <div className='d-flex mb-3'>
                    <label htmlFor="switch" className='me-3'>Become a host</label>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                    />
                </div>
                <div className="d-grid">
                <LoadingButton buttonText="Sign up"/>
                </div>
            </form>
        </>
    );
}

export default SignUpForm;