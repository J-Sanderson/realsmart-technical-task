import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from '../components/App';

test('renders panels and buttons', () => {
  const { getByTestId, getByText } = render(<App />);

  const unused = getByTestId('unused');
  const used = getByTestId('used');
  const addUsed = getByText(/Add to used/i);
  const addUnused = getByText(/Add to unused/i);

  expect(unused).toBeInTheDocument();
  expect(used).toBeInTheDocument();
  expect(addUsed).toBeInTheDocument();
  expect(addUnused).toBeInTheDocument();
});

test('swaps numbers', () => {
  const { getByTestId, getByText, getByLabelText } = render(<App />);
  const unused = getByTestId('unused');
  const addUsed = getByText(/Add to used/i);
  const addUnused = getByText(/Add to unused/i);
  const blank = getByText(/There are no numbers/);
  const testNum = '100';

  expect(unused).toHaveTextContent(testNum);
  expect(blank).toBeInTheDocument();

  fireEvent.click(getByLabelText(testNum));
  fireEvent.click(addUsed);

  expect(unused).not.toHaveTextContent(testNum);
  expect(blank).not.toBeInTheDocument();

  fireEvent.click(getByLabelText(testNum));
  fireEvent.click(addUnused);

  expect(unused).toHaveTextContent(testNum);
});