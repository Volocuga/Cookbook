import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Collapse,
} from 'reactstrap';
import { getRecipeById } from '../../redux/actions/recipeAction';
import { getCurrentRecipeSelector } from '../../redux/selectors/recipeSelector';
import DefaultRecipeImg from '../../assets/img/default-recipe.svg';

const RecipeDetails = ({ match }) => {
  const [openRecipe, setOpenRecipe] = useState(null);
  const dispatch = useDispatch();
  const recipe = useSelector(getCurrentRecipeSelector);
  const { id } = match.params;

  useEffect(() => {
    dispatch(getRecipeById(id));
  }, [dispatch, id]);

  const showRecipe = ({ target: { name } }) => {
    setOpenRecipe(name === openRecipe ? null : name);
  };

  if (!recipe) return null;

  return (
    <div>
      <Card>
        <CardImg
          top
          src={DefaultRecipeImg}
          alt="Card image cap"
          className="w-25"
        />
        <CardBody>
          <CardTitle>{recipe.title}</CardTitle>
          <CardText>{recipe.text}</CardText>
          <Button type="button">
            <Link to={`/recipe/${id}/edit`}>Edit</Link>
          </Button>
        </CardBody>
      </Card>
      {recipe.history.length > 0 &&
        recipe.history.map(history => {
          if (history.text === recipe.text && history.title === recipe.title) {
            return null;
          }
          return (
            <div key={history.date}>
              <Button color="primary" name={history.date} onClick={showRecipe}>
                {history.date}
              </Button>

              <Collapse isOpen={openRecipe === history.date}>
                <Card>
                  <CardBody>
                    <CardTitle>{history.title}</CardTitle>
                    <CardText>{history.text}</CardText>
                  </CardBody>
                </Card>
              </Collapse>
            </div>
          );
        })}
    </div>
  );
};

export default withRouter(RecipeDetails);
