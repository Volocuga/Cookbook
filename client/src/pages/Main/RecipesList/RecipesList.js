import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'reactstrap';
import {
  getRecipesAction,
  removeRecipeAction,
} from '../../../redux/actions/recipeAction';
import { getRecipesSelector } from '../../../redux/selectors/recipeSelector';
import RecipeItem from '../RecipeItem/RecipeItem';

const RecipesList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(getRecipesSelector);

  useEffect(() => {
    dispatch(getRecipesAction());
  }, [dispatch]);

  const removeRecipe = id => {
    dispatch(removeRecipeAction(id));
  };

  if (!recipes.length) return null;

  return (
    <ListGroup>
      {recipes.map(recipe => (
        <RecipeItem
          key={recipe.id}
          removeRecipe={removeRecipe}
          recipe={recipe}
        />
      ))}
    </ListGroup>
  );
};

export default RecipesList;
