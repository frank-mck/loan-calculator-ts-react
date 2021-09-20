import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import App from '../App'

test('checks default borrowing input values', () => {
  render(<App />);
  const slider = screen.getByTestId('borrow-slider');
  expect(slider).toHaveValue('1');
});

test('checks default borrowing years input values', () => {
  render(<App />);
  const slider = screen.getByTestId('years-slider');
  expect(slider).toHaveValue('50');
});