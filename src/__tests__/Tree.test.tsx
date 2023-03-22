import React from 'react';
import '@testing-library/jest-dom';
import Tree from "../components/tree";
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'
import { emptyRoot } from '../__mocks__/empty-root';
import { veryFullRoot } from '../__mocks__/very-full';

describe('<Tree />', () => {

  test('loads a tree with an empty root', async () => {
    render(<Tree {...emptyRoot}/>)

    const nodes = screen.getAllByRole('textbox');
    expect(nodes).toHaveLength(1);

  });

  test('adds a child to the tree', async () => {
    render(<Tree {...emptyRoot}/>)

    const user = userEvent.setup()
    const rootInput = screen.getByRole('textbox');
    await user.type(rootInput, 'New node!');
    await user.type(rootInput, '{Enter}')

    const allInputs = screen.getAllByRole('textbox');
    expect(allInputs).toHaveLength(2);

  })

  test('adds a nested child to the tree', async () => {
    render(<Tree {...emptyRoot}/>)

    const user = userEvent.setup()
    const rootInput = screen.getByRole('textbox');
    await user.type(rootInput, 'New node!');
    await user.type(rootInput, '{Enter}')

    const newNodeText = screen.getByText('New node!');
    const newNodeInput = newNodeText.nextElementSibling
    if (newNodeInput !== null) {
      await user.type(newNodeInput, 'Another!');
      await user.type(newNodeInput, '{Enter}')
    }
    
    expect(newNodeInput?.parentElement?.parentElement?.parentElement?.parentElement?.previousSibling?.firstChild?.nextSibling === rootInput)
    const allInputs = screen.getAllByRole('textbox');
    expect(allInputs).toHaveLength(3);

  })

  test('loads a tree with an empty root', async () => {
    render(<Tree {...veryFullRoot}/>)

    const nodes = screen.getAllByRole('textbox');
    expect(nodes).toHaveLength(12);

  });
})
