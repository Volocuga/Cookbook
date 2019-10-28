import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Collapse,
  Row,
  Col,
  CardFooter,
} from 'reactstrap';

import { getRecipeById } from '../../redux/actions/recipeAction';
import { getCurrentRecipeSelector } from '../../redux/selectors/recipeSelector';
import style from './RecipeDetails.module.scss';

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

  const isOldRecipe = ({ title, text }) => {
    return title !== recipe.title || text !== recipe.text;
  };

  if (!recipe) return null;

  return (
    <Row className={style.root}>
      <Col md="8" lg="6">
        <div>
          <Card className={style.card}>
            <CardBody>
              <CardTitle className={style.cardTitle}>{recipe.title}</CardTitle>
              <CardText>{recipe.text}</CardText>
            </CardBody>
            <CardFooter className="py-4">
              <Button type="button" color="secondary" className={style.editBtn}>
                <Link to={`/recipe/${id}/edit`}>Edit</Link>
              </Button>
            </CardFooter>
          </Card>

          {recipe.history.length > 0 &&
            recipe.history.map(history => {
              if (!isOldRecipe(history)) return null;

              return (
                <div key={history.date}>
                  <Button
                    className={style.historyBtn}
                    name={history.date}
                    onClick={showRecipe}
                    outline
                    color="secondary"
                  >
                    {dayjs(history.date).format('YYYY-MM-DD hh:mm')}
                  </Button>

                  <Collapse isOpen={openRecipe === history.date}>
                    <Card>
                      <CardBody>
                        <CardTitle className={style.cardTitle}>
                          {history.title}
                        </CardTitle>
                        <CardText>{history.text}</CardText>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              );
            })}
        </div>
      </Col>
    </Row>
  );
};

RecipeDetails.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(RecipeDetails);
