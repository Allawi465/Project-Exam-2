import React, { useState, useContext } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import LoadingButton from '../../components/LoadingButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginSchema from './schema';
import { AuthContext } from '../../api';
import { save } from '../../utils/localStorage';


function LoginForm({ onClose }) {
    const { login, isLoading } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(LoginSchema),
    });

    const [errorMessage, setErrorMessage] = useState("");

    async function OnFormSubmit(formData) {
        const data = await login(formData);
        if (data.isError) {
          setErrorMessage(data.isError);
        } else {
          const {accessToken: token, ...user} = data.data;
          save("token", token);
          save("user", user);
          onClose();
          reset();
          setErrorMessage("");
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