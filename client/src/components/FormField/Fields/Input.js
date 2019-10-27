import React from 'react';

const Input = ({ input, label, className }) => (
  <input {...input} placeholder={label} type="text" className={className} />
);

export default Input;
