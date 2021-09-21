import React from 'react';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import App from '../../App'
import { Amount } from '../enums/Enums';

describe('loan calculator', () => {
  test('checks default length of loan', () => {
    render(<App />);
    let icon = <span>&#189;</span>
    const years = screen.getByTestId('years');
    expect(years).toHaveTextContent(`Over 2${icon.props.children} years`);
  });
  
  test('checks default amount that is being borrowed ', () => {
    render(<App />);
    const amount = screen.getByTestId('amount');
    //value 20 is equal to 1 year
    expect(amount).toHaveTextContent('I want to borrow £1,000.00');
  });
  
  test('Change the amount that is being borrowed', () => {
    render(<App />);
    const amount = screen.getByTestId('amount')
    const slider = screen.getByTestId('amount-slider');
    fireEvent.change(slider, { target: { value: "7500" } });
    expect(amount).toHaveTextContent('I want to borrow £7,500.00')
  });

  test('Change the length of loan', () => {
    render(<App />);
    const years = screen.getByTestId('years')
    const slider = screen.getByTestId('years-slider');
    fireEvent.change(slider, { target: { value: "100" } });
    expect(years).toHaveTextContent('Over 5 years')
  });
})

