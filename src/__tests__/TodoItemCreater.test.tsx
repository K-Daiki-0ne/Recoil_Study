import React from 'react';
import { TodoItemCreater } from '../components/TodoItemCreater/TodoItemCreater';
import Enzyme, { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('Redering Test', () => {
  test('Reders Test for TodoItemCreater for TodoItemCreater Component', () => {
    const wrapper = shallow(<TodoItemCreater />);
    expect(wrapper).toMatchSnapshot();
  })
})