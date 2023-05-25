import * as yup from 'yup';

const createSchema = yup
  .object({
    name: yup.string().trim().required('Please enter venue name'),
    description: yup
      .string()
      .trim()
      .required('Please enter venue description')
      .min(10, 'You description should be at least 10 characters.'),
    country: yup.string().trim().required('Please enter country'),
    address: yup.string().trim().required('Please enter address'),
    city: yup.string().trim().required('Please enter city'),
    zip: yup.string().trim().required('Please enter zip'),
    media: yup
      .string()
      .trim()
      .url('Please enter a valid URL')
      .required('Please enter images url of the venue'),
    price: yup.number().typeError('Please enter price').min(1),
    maxGuests: yup.number().typeError('Please enter guests').min(1).max(100),
    rating: yup.number().typeError('Please enter rating').max(5).min(1),
    wifi: yup.boolean().oneOf([true, false]),
    parking: yup.boolean().oneOf([true, false]),
    breakfast: yup.boolean().oneOf([true, false]),
    pets: yup.boolean().oneOf([true, false]),
  })
  .required();

export default createSchema;
