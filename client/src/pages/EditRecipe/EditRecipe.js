import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  editRecipeAction,
  getRecipeById,
} from '../../redux/actions/recipeAction';
import validate from '../_helpers/validateRecipeForm';
import RecipeForm from '../../components/RecipeForm/RecipeForm';
import { getCurrentRecipeSelector } from '../../redux/selectors/recipeSelector';

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

  return <RecipeForm onSubmit={handleSubmit(onSubmit)} />;
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
