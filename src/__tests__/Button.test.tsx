import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import { Button } from '../components/Button';
import App from '../App'

test('renders learn react link', () => {
  render(<App />);
  const button = screen.getByTestId('button');
  expect(button).toBeInTheDocument()

});
