import React, { useMemo } from 'react';
import style from './FormField.module.scss';
import Input from './Fields/Input';
import Textarea from './Fields/Textarea';

const FormField = props => {
  const {
    meta: { touched, error },
    field,
  } = props;

  const Field = useMemo(() => {
    switch (field) {
      case 'input':
        return Input;
      case 'textarea':
        return Textarea;
      default:
        return Input;
    }
  }, [field]);

  return (
    <div>
      <Field {...props} />
      {touched &&
        (error && <span className={style.errorMessage}>{error}</span>)}
    </div>
  );
};

export default FormField;
