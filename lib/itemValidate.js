export const itemValidate = (values) => {
  const errors = {};

  // checkoutDate
  if (!values.checkoutDate) {
    errors.checkoutDate = 'Required';
  } else if (
    values.checkoutDate.length < 1 ||
    values.checkoutDate.length > 10
  ) {
    errors.checkoutDate = 'Must be greater than 1 and less than 11 characters.';
  } else if (!/^\d+(\/\d+)*$/.test(values.checkoutDate)) {
    errors.checkoutDate = 'Invalid date';
  }

  // returnDate
  if (!values.returnDate) {
    errors.returnDate = 'Required';
  } else if (values.returnDate.length < 1 || values.returnDate.length > 10) {
    errors.returnDate = 'Must be greater than 1 and less than 11 characters.';
  } else if (!/^\d+(\/\d+)*$/.test(values.returnDate)) {
    errors.returnDate = 'Invalid date';
  }

  // message
  if (!values.message) {
    errors.message = 'Required';
  } else if (values.message.length < 1 || values.message.length > 100) {
    errors.message = 'Must be greater than 1 and less than 50 characters.';
  }

  return errors;
};
