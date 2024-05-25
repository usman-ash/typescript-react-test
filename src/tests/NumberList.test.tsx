import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NumberList from '../components/NumberList';

test('renders number list correctly', () => {
  render(<NumberList />);
  
  const input = screen.getByLabelText(/enter a number/i);
  fireEvent.change(input, { target: { value: '5' } });
  
  expect(screen.getByText('1, 2, 3, 4, 5')).toBeInTheDocument();
});
