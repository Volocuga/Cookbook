import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from '../../components/Header/Header';
import CreateRecipe from '../CreateRecipe/CreateRecipe';
import EditRecipe from '../EditRecipe/EditRecipe';
import RecipesList from './RecipesList/RecipesList';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import Footer from '../../components/Footer/Footer';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import style from './Main.module.scss';

const Main = () => (
  <div className={style.root}>
    <Header />
    <Breadcrumbs />
    <main className={style.main}>
      <Switch>
        <Route exact path="/" component={RecipesList} />
        <Route exact path="/recipe/:id" component={RecipeDetails} />
        <Route path="/recipe/:id/edit" component={EditRecipe} />
        <Route path="/create" component={CreateRecipe} />
        <Redirect to="/" />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default Main;
