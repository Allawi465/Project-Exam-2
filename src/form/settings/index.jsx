import { FloatingLabel, Form } from 'react-bootstrap';
import LoadingButton from '../../components/LoadingButton';

function ChangeAvatarForm() {

    return (
        <>
            <form>
                <FloatingLabel label="Avatar"
                    className="my-3 text-black">
                    <Form.Control
                        type="url"
                        name="avatar"
                        placeholder="avatar"
                    />
                </FloatingLabel>
                <div className="d-grid">
                    <LoadingButton buttonText="Save Changes"/>
                </div>
            </form>
        </>
    );
}

export default ChangeAvatarForm;