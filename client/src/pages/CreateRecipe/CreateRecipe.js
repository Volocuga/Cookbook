import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types';

import { createRecipeAction } from '../../redux/actions/recipeAction';
import validate from '../_helpers/validateRecipeForm';
import fields from '../_helpers/formFields';
import FormField from '../../components/FormField/FormField';
import style from './CreateRecipe.module.scss';

const CreateRecipe = ({ history, handleSubmit }) => {
  const dispatch = useDispatch();

  const onSubmit = formValues => {
    dispatch(createRecipeAction(formValues));
    history.push('/');
  };

  return (
    <div className={style.root}>
      <Form className="w-50" onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ name, placeholder, field }) => (
          <FormGroup key={name}>
            <Label for="title">{name.toUpperCase()}</Label>
            <Field
              id={name}
              field={field}
              name={name}
              label={placeholder}
              component={FormField}
              className="form-control"
            />
          </FormGroup>
        ))}
        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
};

CreateRecipe.propTypes = {
  history: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default withRouter(
  reduxForm({
    form: 'createRecipe',
    validate,
  })(CreateRecipe),
);
