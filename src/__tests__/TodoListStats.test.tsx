import React from 'react';
import { TodoListStats } from '../components/TodoListStats/TodoListStats';
import Enzyme, { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('Redering Test', () => {
  test('Reders Test for TodoItemCreater for TodoItemCreater Component', () => {
    const wrapper = shallow(<TodoListStats />);
    expect(wrapper).toMatchSnapshot();
  })
})