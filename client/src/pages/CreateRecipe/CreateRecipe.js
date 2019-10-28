import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { createRecipeAction } from '../../redux/actions/recipeAction';
import validate from '../../_helpers/validateRecipeForm';
import RecipeForm from '../../components/RecipeForm/RecipeForm';

const CreateRecipe = ({ history, handleSubmit }) => {
  const dispatch = useDispatch();

  const onSubmit = formValues => {
    dispatch(createRecipeAction(formValues));
    history.push('/');
  };

  return <RecipeForm onSubmit={handleSubmit(onSubmit)} />;
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
