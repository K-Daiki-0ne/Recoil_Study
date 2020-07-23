import React from 'react';
import { TodoListItem } from '../components/TodoListItem/TodoListItem';
import Enzyme, { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

// describe('Redering Test', () => {
//   test('Reders Test for TodoItemCreater for TodoItemCreater Component', () => {
//     const wrapper = shallow(<TodoListItem />);
//     expect(wrapper).toMatchSnapshot();
//   })
// })