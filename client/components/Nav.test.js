import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

import Nav from './Nav'

it('renders on the screen', () => {
  render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  )
  const list = screen.getByRole('navigation')
  expect(list).toHaveTextContent('Africa')
})
