import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import yieldLinks from './modules/router/yield-links';
import yieldMatchedRouteContent from './modules/router/yield-matched-route-content';
import routes from './routes';

export default () => (
  <Router>
    <nav>
      { Array.from(yieldLinks(routes)) }
    </nav>

    <Switch>
      { Array.from(yieldMatchedRouteContent(routes)) }
    </Switch>
  </Router>
);
