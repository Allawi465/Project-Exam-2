import * as yup from 'yup';

const SettingsSchema = yup
    .object({
        avatar: yup
        .string().trim().url('Please enter a valid URL'),
    })
    .required();

export default SettingsSchema;