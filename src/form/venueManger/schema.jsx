import * as yup from 'yup';

/**
 * Validation schema for user venue manager state
 */

const schema = yup
  .object({
    venueManager: yup.boolean().oneOf([true], 'Please check the box'),
  })
  .required();

export default schema;
