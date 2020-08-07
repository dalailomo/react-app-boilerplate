import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../components/App';
import rootReducer from '../reducers';

test('renders app', () => {
  const { getByText } = render(<Provider store={ createStore(rootReducer) }><App /></Provider>);
  const linkElement = getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
