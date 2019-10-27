import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'reactstrap';
import {
  getRecipesAction,
  removeRecipeAction,
} from '../../../redux/actions/recipeAction';
import { getRecipesSelector } from '../../../redux/selectors/recipeSelector';
import RecipeItem from '../RecipeItem/RecipeItem';
import style from './RecipeList.module.scss';

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
    <ListGroup className={style.root}>
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
