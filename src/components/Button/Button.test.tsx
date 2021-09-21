import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import App from '../../App'

describe('Button', () => {
  test('renders button', () => {
    render(<App />);
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
  });
})
