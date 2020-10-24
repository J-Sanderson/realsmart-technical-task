import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders panels and buttons', () => {
  const { getByTestId, getByText } = render(<App />);

  const unused = getByTestId('unused');
  const used = getByTestId('used');
  const addUsed = getByText(/Add to used/i);
  const addUnused = getByText(/Add to used/i);

  expect(unused).toBeInTheDocument();
  expect(used).toBeInTheDocument();
  expect(addUsed).toBeInTheDocument();
  expect(addUnused).toBeInTheDocument();
});
