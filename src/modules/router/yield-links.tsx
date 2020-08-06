import React from 'react';
import { Link } from 'react-router-dom';
import { RouteDefinitionDictionary } from '../../routes';

export default function* (routes: RouteDefinitionDictionary) {
for (const key of Object.keys(routes)) {
  yield (
    <li key={ key }><Link to={ routes[key].path }>{ routes[key].anchor }</Link></li>
  );
}
};
