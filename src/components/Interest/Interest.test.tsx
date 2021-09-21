import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import App from '../../App'
import { Amount } from '../enums/Enums';

describe("Intrest" , () => {
  test('checks default monthly payments', () => {
    render(<App />);
    const subject = screen.getByTestId('repayments');
    expect(subject).toHaveTextContent('£47.04');
  });
  
  test('checks default interest rate', () => {
    render(<App />);
    const subject = screen.getByTestId('interest');
    expect(subject).toHaveTextContent('5%');
  });
})
