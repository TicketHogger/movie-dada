import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../client/src/App.jsx';

const wrapper = shallow(<App />);

test('it checks to see if an h2 exists', () => {
  expect(wrapper.find('h2').length !== 0).toBe(true); 
});

test('it checks to see if an li does not', () => {
  expect(wrapper.find('li').length !== 0).toBe(false); 
});
