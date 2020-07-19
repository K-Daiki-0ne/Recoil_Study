import React from 'react';
import { render, cleanup } from '@testing-library/react'
import App from '../root/App';

beforeEach(cleanup);

describe('App component', () => {
  test('Render Test App', () => {
    render(<App />)
  })
})