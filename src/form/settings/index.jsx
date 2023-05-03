import React, { useContext, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SettingsSchema from './schema';
import { AuthContext } from '../../api';
import { load, save } from '../../utils/localStorage';
import LoadingButton from '../../components/LoadingButton';
import useApiActions from '../../hooks/api/useApiActions';

function ChangeAvatarForm({ onClose }) {
  const { setDataLogin, dataLogin } = useContext(AuthContext);
  const { isLoading, fetchData } = useApiActions();
  const user = dataLogin || load('user');
  const { name } = user;
  console.log(name);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(SettingsSchema),
  });

  const [errorMessage, setErrorMessage] = useState('');
  const OnFormSubmit = async (formData) => {
    const user = await fetchData(`/profiles/${name}/media`, {
      method: 'Put',
      body: JSON.stringify(formData),
    });
    if (user.isError) {
      setErrorMessage(user.isError);
    } else {
      const { avatar, ...userData } = user.data;
      setDataLogin({
        ...userData,
        avatar: avatar,
      });
      save('avatar', avatar);
      setErrorMessage('');
      reset();
      onClose();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(OnFormSubmit)}>
        {errorMessage && (
          <p style={{ color: 'var(--color-red)' }}>{errorMessage}</p>
        )}
        <FloatingLabel label="Avatar" className="my-3">
          <Form.Control
            {...register('avatar')}
            type="url"
            name="avatar"
            placeholder="avatar"
          />
          <p className="form-text mx-1">{errors.avatar?.message}</p>
        </FloatingLabel>
        <div className="d-grid">
          <LoadingButton
            buttonText="Save Changes"
            type="submit"
            isValid={isValid}
            Loading={isLoading}
          />
        </div>
      </form>
    </>
  );
}

export default ChangeAvatarForm;
