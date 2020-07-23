import React from 'react';
import { TodoListItem } from '../components/TodoListItem/TodoListItem';
import Enzyme, { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

import { Todo } from '../types/todo';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('Redering Test', () => {
  test('Reders Test for TodoItemCreater for TodoItemCreater Component', () => {
    const TestData: Todo = {
      id: '1',
      title: 'This is test data',
      completed: true
    };
    const wrapper = shallow(<TodoListItem todo={TestData}/>);
    expect(wrapper).toMatchSnapshot();
  })
})