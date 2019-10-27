import axios from 'axios';
import { toast } from 'react-toastify';
import {
  GET_RECIPES_SUCCESS,
  CREAT_RECIPE_SUCCESS,
  GET_RECIPE_BY_ID_SUCCESS,
  REMOVE_RECIPE_SUCCESS,
} from '../types';

export const getRecipesAction = () => dispatch => {
  axios
    .get(`/api/recipe`)
    .then(({ data }) => dispatch({ type: GET_RECIPES_SUCCESS, payload: data }))
    .catch(({ msg }) => toast.error(msg || 'Something went wrong. Try again.'));
};

export const getRecipeById = id => dispatch => {
  axios
    .get(`/api/recipe/${id}`)
    .then(({ data }) =>
      dispatch({ type: GET_RECIPE_BY_ID_SUCCESS, payload: data }),
    )
    .catch(({ msg }) => toast.error(msg || 'Something went wrong. Try again.'));
};

export const createRecipeAction = recipe => dispatch => {
  axios
    .post(`/api/recipe`, recipe)
    .then(({ data }) => {
      dispatch({ type: CREAT_RECIPE_SUCCESS, payload: data });
      toast.success('Recipe saved successfully!');
    })
    .catch(({ msg }) => toast.error(msg || 'Something went wrong. Try again.'));
};

export const editRecipeAction = recipe => dispatch => {
  axios
    .put(`/api/recipe`, recipe)
    .then(() => toast.success('Recipe saved successfully!'))
    .catch(({ msg }) => toast.error(msg || 'Something went wrong. Try again.'));
};

export const removeRecipeAction = id => dispatch => {
  axios
    .delete(`/api/recipe/${id}`)
    .then(({ data }) => {
      dispatch({ type: REMOVE_RECIPE_SUCCESS, payload: data.id });
      toast.success('Recipe removed!');
    })
    .catch(({ msg }) => toast.error(msg || 'Something went wrong. Try again.'));
};
