import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GridLetter from './GridLetter';

describe('<GridLetter />', () => {
  test('it should mount', () => {
    render(<GridLetter character={'E'} />);
    
    const gridLetter = screen.getByTestId('GridLetter');

    expect(gridLetter).toBeInTheDocument();
  });
});