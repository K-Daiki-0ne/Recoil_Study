import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Home } from '../page/Home';

beforeEach(cleanup);

describe('pages/Home', () => {
  test('Rendering test Home', () => {
    render(<Home />);
  })
})