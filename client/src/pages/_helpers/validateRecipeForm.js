export default values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'This field is required';
  } else if (values.title.length > 20) {
    errors.title = 'Must be 15 characters or less';
  } else if (values.title.length < 3) {
    errors.title = 'Must be more then 3 characters';
  }

  if (!values.text) {
    errors.text = 'This field is required';
  } else if (values.text.length > 2000) {
    errors.text = 'Must be 2000 characters or less';
  } else if (values.text.length < 3) {
    errors.text = 'Must be more then 3 characters';
  }

  return errors;
};
