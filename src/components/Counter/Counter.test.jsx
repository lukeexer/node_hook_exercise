import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import Counter from './Counter';

expect.extend({ toBeInTheDocument });

test('Thge default text display in view will be The current number is: 0.', () => {
    const { getByText } = render(<Counter />);

    expect(getByText('The current number is: 0.')).toBeInTheDocument();
});

test('The text of count display in view will from 0 change to 1 after we clicked \'Click Me to Add One\'', () => {
    const { getByText, queryByText } = render(<Counter />);

    fireEvent.click(getByText('Click Me to Add One'));

    expect(queryByText('The current number is: 0.')).not.toBeInTheDocument();
    expect(getByText('The current number is: 1.')).toBeInTheDocument();
});