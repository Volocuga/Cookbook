import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({ input, label, className }) => (
  <textarea {...input} placeholder={label} className={className} />
);

Textarea.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

Textarea.defaultProps = {
  label: '',
  className: '',
};

export default Textarea;
