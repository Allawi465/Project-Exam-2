import * as yup from 'yup';

/**
 * Validation schema for user avatar
 * @typedef {Object}  SettingsSchema
 * @property {String} avatar.url User's avatar string must be a valid URL
 * @throws {Error} If validation fails
 */

const SettingsSchema = yup.object({
  avatar: yup
    .string()
    .trim()
    .url('Please enter a valid URL')
    .required('Please enter your url image of the avatar'),
});

export default SettingsSchema;
