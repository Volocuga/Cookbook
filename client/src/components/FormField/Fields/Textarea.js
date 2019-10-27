import React from 'react';

const Textarea = ({ input, label, className }) => (
  <textarea {...input} placeholder={label} className={className} />
);
export default Textarea;
