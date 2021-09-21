import React from 'react';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import App from '../../App'

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

  test('change amount to increase interest rate', () => {
    render(<App />);
    const slider = screen.getByTestId('amount-slider');
    fireEvent.change(slider, { target: { value: "7500" } });
    const subject = screen.getByTestId('interest');
    expect(subject).toHaveTextContent('10%');
  });

  test('change length of loan to adjust monthly repayments', () => {
    render(<App />);
    const slider = screen.getByTestId('years-slider');
    fireEvent.change(slider, { target: { value: "100" } });
    const subject = screen.getByTestId('repayments');
    expect(subject).toHaveTextContent('£31.50');
  });
})
