import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TriangleArea from '../components/TriangleArea';

test('calculates area of triangle correctly', () => {
  render(<TriangleArea />);
  
  const heightInput = screen.getByLabelText(/height/i);
  const widthInput = screen.getByLabelText(/width/i);

  fireEvent.change(heightInput, { target: { value: '5' } });
  fireEvent.change(widthInput, { target: { value: '10' } });
  
  expect(screen.getByText(/area of the triangle: 25.00/i)).toBeInTheDocument();
});
