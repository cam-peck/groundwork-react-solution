import React from 'react';
import '@testing-library/jest-dom';
import Header from "../components/header";
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'

test('loads all header elements', async () => {
  render(<Header />)

  const heading = screen.getByText('React Recursive Tree Challenge');
  const notes = screen.getByText('Notes!');
  const note1 = screen.getByText('Type in an input box and press enter to add children.');
  const note2 = screen.getByText('All children are drag/droppable within their nested level.')

  expect(heading).toBeInTheDocument();
  expect(notes).toBeInTheDocument();
  expect(note1).toBeInTheDocument();
  expect(note2).toBeInTheDocument();

})
