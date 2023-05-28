import * as yup from 'yup';

/**
 * Validation schema for user avatar
 */

const SettingsSchema = yup.object({
  avatar: yup
    .string()
    .trim()
    .url('Please enter a valid URL')
    .required('Please enter your url image of the avatar'),
});

export default SettingsSchema;
