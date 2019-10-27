import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button, Form, FormGroup, Label } from 'reactstrap';
import {
  editRecipeAction,
  getRecipeById,
} from '../../redux/actions/recipeAction';
import validate from '../_helpers/validateRecipeForm';
import FormField from '../../components/FormField/FormField';
import { getCurrentRecipeSelector } from '../../redux/selectors/recipeSelector';
import fields from '../_helpers/formFields';
import style from './EditRecipe.module.scss';

const EditRecipe = ({ match, history, handleSubmit }) => {
  const dispatch = useDispatch();
  const recipe = useSelector(getCurrentRecipeSelector);
  const { id } = match.params;

  useEffect(() => {
    if (id) dispatch(getRecipeById(id));
  }, [id, dispatch]);

  const onSubmit = formValues => {
    if (recipe.title !== formValues.title || recipe.text !== formValues.text) {
      dispatch(editRecipeAction(formValues));
    }
    history.push(`/recipe/${id}`);
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

EditRecipe.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  initialValues: state.recipes.currentRecipe,
});

export default connect(mapStateToProps)(
  reduxForm({
    form: 'editRecipe',
    enableReinitialize: true,
    validate,
  })(withRouter(EditRecipe)),
);
