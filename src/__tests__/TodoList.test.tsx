import React from 'react';
import { TodoList } from '../components/TodoList/TodoList';
import Enzyme, { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('Redering Test', () => {
  test('Reders Test for TodoList Component', () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper).toMatchSnapshot();
  })
})