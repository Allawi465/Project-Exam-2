import React, { useState, useContext, useEffect } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import LoadingButton from '../../components/LoadingButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './register';
import { AuthContext } from '../../api/auth';

function SignUpForm({ onSignUpClick }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { signUp, isLoading } = useContext(AuthContext);


    async function OnFormSubmit(formData) {
        console.log(formData);
        setFormSubmitted(true);
        const user = await signUp(formData);
        reset();
        if (user && user.errors) {
            setErrorMessage(user.errors[0].message);
        } else {
            onSignUpClick()
        }
    }

    return (

        <>
            <form onSubmit={handleSubmit(OnFormSubmit)}>
                {errorMessage && <p style={{ color: 'var(--color-red)' }}>{errorMessage}</p>}
                <FloatingLabel label="Name"
                    className="my-3">
                    <Form.Control
                        {...register('name')}
                        type="text"
                        name="name"
                        placeholder="name"
                    />
                    <p className='form-text mx-1'>{errors.name?.message}</p>
                </FloatingLabel>

                <FloatingLabel label="Email address" name="email" className="my-3">
                    <Form.Control
                        {...register('email')}
                        type="email"
                        name="email"
                        placeholder="name@stud.noroff.no"
                    />
                    <p className='form-text mx-1'>{errors.email?.message}</p>
                </FloatingLabel>

                <FloatingLabel label="Avatar"
                    className="my-3">
                    <Form.Control
                        {...register('avatar')}
                        type="url"
                        name="avatar"
                        placeholder="avatar"
                    />
                    <p className='form-text mx-1'>{errors.avatar?.message}</p>
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

                <div className='d-flex mb-3 mx-1'>
                    <label htmlFor="switch" className='me-2' >Become a host</label>
                    <Form.Check
                        {...register('venueManager')}
                        type="switch"
                        id="custom-switch"
                        defaultChecked={true}
                        name="venueManager"
                    />
                </div>

                <div className="d-grid">
                    <LoadingButton buttonText="Sign up" type="submit" isValid={isValid} Loading={isLoading} />
                </div>
            </form>
        </>
    );
}

export default SignUpForm;