import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ input, label, className }) => (
  <input {...input} placeholder={label} type="text" className={className} />
);

Input.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  className: '',
};

export default Input;
