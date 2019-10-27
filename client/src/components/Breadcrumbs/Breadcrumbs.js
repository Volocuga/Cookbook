import React from 'react';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { getCurrentRecipeSelector } from '../../redux/selectors/recipeSelector';

const Breadcrumbs = ({ location: { pathname } }) => {
  const recipe = useSelector(getCurrentRecipeSelector);
  const showRecipeBreadcrumb = pathname !== '/create' && recipe && recipe.id;

  return (
    pathname !== '/' && (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          {showRecipeBreadcrumb && (
            <BreadcrumbItem>
              <Link to={`/recipe/${recipe.id}`}>Recipe</Link>
            </BreadcrumbItem>
          )}
        </Breadcrumb>
      </div>
    )
  );
};

Breadcrumbs.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }),
};

export default withRouter(Breadcrumbs);
