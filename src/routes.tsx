import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

// -- pages
import Home from './pages/home';
import DetailsPage from './pages/details';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastrar" component={DetailsPage} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
