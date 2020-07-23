import React from 'react';
import { Home } from '../page/Home';
import Enzyme, { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe(('Render test'), () => {
  test('rendering test for Home.tsx', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  })
})