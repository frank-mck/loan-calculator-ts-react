import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import App from '../../App'
import { Amount } from '../enums/Enums';

test('checks default borrowing input values', () => {
  render(<App />);
  const slider = screen.getByTestId('borrow-slider');
  expect(slider).toHaveValue(Amount.Minimum.toString());
});

test('checks default input values for borrowing years ', () => {
  render(<App />);
  const slider = screen.getByTestId('years-slider');
  expect(slider).toHaveValue('50');
});