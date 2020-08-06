import React from 'react';
import Home from './components/Home';
import About from './components/About';

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
      <Home />
    )
  },
  about: {
    path: '/about',
    anchor: 'About',
    content: (
      <About />
    )
  },
} as RouteDefinitionDictionary;
