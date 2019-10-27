import {
  GET_RECIPES_SUCCESS,
  CREAT_RECIPE_SUCCESS,
  GET_RECIPE_BY_ID_SUCCESS,
  REMOVE_RECIPE_SUCCESS,
} from '../types';

const initialState = {
  recipesList: [],
  currentRecipe: null,
};

const recipeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES_SUCCESS:
      return {
        ...state,
        recipesList: [...payload],
      };

    case CREAT_RECIPE_SUCCESS:
      return {
        recipesList: [payload, ...state.recipesList],
        currentRecipe: null,
      };

    case GET_RECIPE_BY_ID_SUCCESS:
      return {
        ...state,
        currentRecipe: payload,
      };

    case REMOVE_RECIPE_SUCCESS:
      return {
        ...state,
        recipesList: state.recipesList.filter(({ id }) => id !== payload),
      };

    default:
      return state;
  }
};

export default recipeReducer;
