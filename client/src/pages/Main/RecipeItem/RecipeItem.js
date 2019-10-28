import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
} from 'reactstrap';
import style from './RecipeItem.module.scss';

const RecipeItem = ({ recipe: { id, title, text }, removeRecipe }) => {
  const handleRemoveRecipe = () => {
    removeRecipe(id);
  };

  return (
    <Col sm="6" lg="4" className="mb-4">
      <Card className={style.root}>
        <CardBody>
          <CardTitle className={style.cardTitle}>{title}</CardTitle>
          <CardText>{text.substring(0, 100)} ...</CardText>
        </CardBody>
        <CardFooter className="d-flex justify-content-around">
          <Button type="button" color="secondary" className={style.button}>
            <Link to={`/recipe/${id}/edit`}>Edit</Link>
          </Button>
          <Button type="button" color="info" className={style.button}>
            <Link to={`/recipe/${id}`}>Details</Link>
          </Button>
          <Button
            type="button"
            color="danger"
            className={style.button}
            onClick={handleRemoveRecipe}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </Col>
  );
};

RecipeItem.propTypes = {
  removeRecipe: PropTypes.func.isRequired,
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
export default RecipeItem;
