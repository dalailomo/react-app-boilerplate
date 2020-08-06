import React from 'react';
import { Route } from 'react-router-dom';
import { RouteDefinitionDictionary } from '../../routes';

export default function* (routes: RouteDefinitionDictionary) {
  for (const key of Object.keys(routes)) {
    yield (
      <Route key={ key } exact path={ routes[key].path }>
        { routes[key].content }
      </Route>
    );
  }
};
