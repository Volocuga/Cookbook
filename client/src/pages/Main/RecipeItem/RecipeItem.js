import React from 'react';
import { Button, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './RecipeItem.module.scss';

const RecipeItem = ({ recipe: { id, title, text }, removeRecipe }) => {
  const handleRemoveRecipe = () => {
    removeRecipe(id);
  };
  return (
    <ListGroupItem key={id} className={style.root}>
      <p>title: {title}</p>
      <p>text: {text}</p>
      <Button type="button">
        <Link to={`/recipe/${id}/edit`}>Edit</Link>
      </Button>
      <Button type="button" className="m-2">
        <Link to={`/recipe/${id}`}>Details</Link>
      </Button>
      <Button type="button" onClick={handleRemoveRecipe}>
        Delete
      </Button>
    </ListGroupItem>
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
