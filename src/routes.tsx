import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

// -- pages
import Home from './pages/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
