import React from 'react';

export interface RouteDefinition {
  path: string;
  anchor: string;
  content: JSX.Element
}

export interface RouteDefinitionDictionary {
  [key: string]: RouteDefinition;
}

export default {
  home: {
    path: '/',
    anchor: 'Homepage',
    content: (
      <h1>Hello home</h1>
    )
  },
  about: {
    path: '/about',
    anchor: 'About',
    content: (
      <h1>Hello about</h1>
    )
  },
} as RouteDefinitionDictionary;
