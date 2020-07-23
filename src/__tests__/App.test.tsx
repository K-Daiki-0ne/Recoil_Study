import React from 'react';
import App from '../root/App';
import Enzyme, { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });


test('rendering test App.tsx', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});