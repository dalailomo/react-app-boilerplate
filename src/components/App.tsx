import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('./Loadables/Home'));
const About = loadable(() => import('./Loadables/About'));

const ROUTE = {
  HOME: '/',
  ABOUT: '/about',
};

export default () => (
  <BrowserRouter>
    <nav>
      <li><Link to={ ROUTE.HOME }>Homepage</Link></li>
      <li><Link to={ ROUTE.ABOUT }>About</Link></li>
    </nav>

    <Switch>
      <Route exact path={ ROUTE.HOME }><Home /></Route>
      <Route exact path={ ROUTE.ABOUT }><About /></Route>
    </Switch>
  </BrowserRouter>
);
