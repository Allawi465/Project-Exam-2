import React, { useState, useContext } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import LoadingButton from '../../components/LoadingButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginSchema from './schema';
import { AuthContext } from '../../api/auth';


function LoginForm({ onClose }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(LoginSchema),
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const { login, isLoading } = useContext(AuthContext);

    async function OnFormSubmit(formData) {
        console.log(formData);
        setFormSubmitted(true);
        const user = await login(formData);
        reset();
        if (user && user.errors) {
            setErrorMessage(user.errors[0].message);
        } else {
            onClose();
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(OnFormSubmit)}>
                {errorMessage && <p style={{ color: 'var(--color-red)' }}>{errorMessage}</p>}
                <FloatingLabel label="Email address" name="email" className="my-3">
                    <Form.Control
                        {...register('email')}
                        type="email"
                        name="email"
                        placeholder="name@stud.noroff.no"
                    />
                    <p className='form-text mx-1'>{errors.email?.message}</p>
                </FloatingLabel>

                <FloatingLabel label="Password"
                    className="my-3">
                    <Form.Control
                        {...register('password')}
                        type="password"
                        name="password"
                        placeholder="password"
                    />
                    <p className='form-text mx-1'>{errors.password?.message}</p>
                </FloatingLabel>

                <div className="d-grid">
                    <LoadingButton buttonText="Login" type="submit" isValid={isValid} loading={isLoading} />
                </div>
            </form>
        </>
    );
}

export default LoginForm;