import React from 'react';
import { Button, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const RecipeItem = ({ recipe: { id, title, text }, removeRecipe }) => {
  const handleRemoveRecipe = () => {
    removeRecipe(id);
  };
  return (
    <ListGroupItem key={id}>
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

export default RecipeItem;
