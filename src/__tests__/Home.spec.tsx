import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../page/Home';

describe('pages/Home', () => {
  test('Rendering test Home', () => {
    render(<Home />);
  })
})