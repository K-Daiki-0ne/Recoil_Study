import React from 'react';
import { TodoFilter } from '../components/TodoFilter/TodoFilter';
import Enzyme, { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('Renders Test', () => {
  test('Redering test for TodoFilter component', () => {
    const wrapper = shallow(<TodoFilter />);
    expect(wrapper).toMatchSnapshot();
  })
});