import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import createSchema from './schema';
import { FloatingLabel, Form } from 'react-bootstrap';
import LoadingButton from '../../components/LoadingButton';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { confirmUrl } from '../../utils/regExImageUrl';

/**
 * Renders a create form for a venue with input fields
 * @component
 * @param {Object} props The component props
 * @param {boolean} props.isLoading Indicates if the form is in a loading state.
 * @param {function} props.OnFormSubmit The callback function to handle form submission.
 * @param {string} props.errorMessage The error message to display
 * @param {Object} props.defaultValues The default values for the form fields
 * @param {string} props.btnText The text for the form submit button
 * @returns {JSX.ReactElement} The create form component
 * @example
 * <CreateForm
 *  OnFormSubmit={OnFormSubmit}
 *  isLoading={isLoading}
 *  errorMessage={errorMessage}
 *  setErrorMessage={setErrorMessage}
 *  defaultValues={defaultValues}
 *  btnText={'Host now'}
 *  />
 */

function CreateForm({
  isLoading,
  OnFormSubmit,
  errorMessage,
  defaultValues,
  btnText,
}) {
  const {
    name = '',
    price = '',
    rating = '',
    description = '',
    maxGuests = '',
    location: { country = '', address = '', city = '', zip = '' } = {},
  } = defaultValues;
  const [media, setMedia] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setError,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(createSchema),
    defaultValues: defaultValues,
  });
  const handleAddImage = () => {
    const formData = getValues();
    const imageUrl = formData.media;
    if (confirmUrl(imageUrl)) {
      reset({ media: '' });
      setMedia((prevMedia) => [...prevMedia, imageUrl]);
      setError('media', { message: '' });
    } else {
      setError('media', { message: 'Please enter a valid URL' });
    }
  };

  const handleRemoveImages = (index) => {
    setMedia((prevMedia) => {
      const updatedMedia = prevMedia.filter((_, i) => i !== index);
      return updatedMedia;
    });
  };

  return (
    <form
      className="create-form mt-3"
      onSubmit={handleSubmit((formData) => OnFormSubmit(formData, media))}
    >
      {errorMessage && (
        <p style={{ color: 'var(--color-red)' }}>{errorMessage}</p>
      )}
      <FloatingLabel label="Name" className="my-3">
        <Form.Control
          {...register('name')}
          type="text"
          name="name"
          placeholder="name"
          defaultValue={name}
        />
        <p className="form-text mx-1">{errors.name?.message}</p>
      </FloatingLabel>

      <FloatingLabel label="Description" name="description" className="my-3">
        <Form.Control
          {...register('description')}
          as="textarea"
          name="description"
          placeholder="Leave a description here"
          style={{ height: '100px' }}
          defaultValue={description}
        />
        <p className="form-text mx-1">{errors.description?.message}</p>
      </FloatingLabel>

      <div className="create-form-media">
        <FloatingLabel label="Images" className="create-form-media-floating">
          <Form.Control
            {...register('media')}
            type="url"
            name="media"
            placeholder="images"
          />
          <p className="form-text mx-1">{errors.media?.message}</p>
        </FloatingLabel>
        <div className="create-form-media-plus">
          {media.length < 7 && <AiOutlinePlus onClick={handleAddImage} />}
          {media.length === 7 && <p className="mb-0">(Max 8)</p>}
        </div>
      </div>

      {media.length > 0 && (
        <div className="create-form-images mb-3">
          <div className="create-form-images-container">
            {media.map((url, index) => (
              <div key={index} className="create-form-images-container-delete">
                <div className="create-form-images-container-images">
                  <img
                    src={url}
                    alt={`${index} added`}
                    width={48}
                    height={48}
                    className="rounded float-left my-1 mx-2"
                  />
                  <p className="mt-3 mx-1">image nr {index + 1}</p>
                </div>
                <RiDeleteBin2Line
                  className="mx-2"
                  onClick={() => handleRemoveImages(index)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <FloatingLabel label="Country" className="mb-3">
        <Form.Control
          {...register('country')}
          type="text"
          name="country"
          placeholder="Norway"
          defaultValue={country}
        />
        <p className="form-text mx-1">{errors.country?.message}</p>
      </FloatingLabel>

      <FloatingLabel label="Address" className="my-3">
        <Form.Control
          {...register('address')}
          type="text"
          name="address"
          placeholder="korsgata 30"
          defaultValue={address}
        />
        <p className="form-text mx-1">{errors.address?.message}</p>
      </FloatingLabel>

      <div className="create-form-address">
        <FloatingLabel label="City">
          <Form.Control
            {...register('city')}
            type="text"
            name="city"
            placeholder="Oslo"
            defaultValue={city}
          />
          <p className="form-text mx-1">{errors.city?.message}</p>
        </FloatingLabel>

        <FloatingLabel label="Zip">
          <Form.Control
            {...register('zip')}
            type="text"
            name="zip"
            placeholder="0418"
            defaultValue={zip}
          />
          <p className="form-text mx-1">{errors.zip?.message}</p>
        </FloatingLabel>
      </div>

      <Row>
        <Col xs>
          <FloatingLabel label="price" className="my-1">
            <Form.Control
              {...register('price')}
              type="number"
              name="price"
              placeholder="100"
              min={1}
              defaultValue={price}
            />
            <p className="form-text mx-1">{errors.price?.message}</p>
          </FloatingLabel>
        </Col>
        <Col xs>
          <FloatingLabel label="Guests" className="my-1">
            <Form.Control
              {...register('maxGuests')}
              type="number"
              name="maxGuests"
              placeholder="2"
              min={1}
              max={100}
              defaultValue={maxGuests}
            />
            <p className="form-text mx-1">{errors.maxGuests?.message}</p>
          </FloatingLabel>
        </Col>
        <Col xs>
          <FloatingLabel label="rating" className="my-1">
            <Form.Control
              {...register('rating')}
              type="number"
              name="rating"
              placeholder="5"
              min={1}
              max={5}
              defaultValue={rating}
            />
            <p className="form-text mx-1">{errors.rating?.message}</p>
          </FloatingLabel>
        </Col>
      </Row>

      <div className="create-form-checkbox">
        <Form.Check
          {...register('wifi')}
          label="wifi"
          name="wifi"
          type={'checkbox'}
          id={`checkbox-1`}
          defaultChecked={defaultValues.meta?.wifi}
        />
        <Form.Check
          {...register('parking')}
          label="parking"
          name="parking"
          type={'checkbox'}
          id={`checkbox-2`}
          defaultChecked={defaultValues.meta?.parking}
        />
        <Form.Check
          {...register('breakfast')}
          label="breakfast"
          name="breakfast"
          type={'checkbox'}
          id={`checkbox-3`}
          defaultChecked={defaultValues.meta?.breakfast}
        />
        <Form.Check
          {...register('pets')}
          label="pets"
          name="pets"
          type={'checkbox'}
          id={`checkbox-4`}
          defaultChecked={defaultValues.meta?.pets}
        />
      </div>

      <div className="d-grid mt-4">
        <LoadingButton
          buttonText={btnText}
          type="submit"
          isValid={isValid}
          Loading={isLoading}
        />
      </div>
    </form>
  );
}

export default CreateForm;
