import React from 'react';
import { render } from '@testing-library/react'
import App from '../root/App';

describe('App component', () => {
  test('Render Test App', () => {
    render(<App />)
  })
})