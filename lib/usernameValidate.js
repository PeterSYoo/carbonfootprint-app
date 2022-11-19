export const usernameValidate = (values) => {
  const errors = {};

  if (!values.username) {
  } else if (values.username.length < 1 || values.username.length > 13) {
    errors.username = 'Must be greater than 1 and less than 13 characters.';
  }

  return errors;
};
