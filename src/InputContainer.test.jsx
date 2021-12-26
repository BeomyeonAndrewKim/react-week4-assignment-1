import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  const { getByText, getByDisplayValue } = render(<InputContainer />);

  expect(getByDisplayValue(/New Title/)).not.toBeNull();
  expect(getByText(/추가/)).not.toBeNull();

  fireEvent.click(getByText(/추가/));

  expect(dispatch).toBeCalledWith({ type: 'addTask' });
});
