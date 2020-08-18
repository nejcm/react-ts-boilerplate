import {render} from '@testing-library/react';
import React from 'react';
import App from '.';

test('renders learn react link', () => {
  const {getByText} = render(<App />);
  const linkElement = getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
