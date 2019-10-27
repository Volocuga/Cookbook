import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Input from './Fields/Input';
import Textarea from './Fields/Textarea';
import style from './FormField.module.scss';

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

FormField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  field: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

FormField.defaultProps = {
  label: '',
  className: '',
  field: '',
};

export default FormField;
