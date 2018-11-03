/* eslint-env jest */

import React from 'react';
import { shallow, render } from 'enzyme';
import PosterRow from '../client/src/PosterRow';
import Poster from '../client/src/Poster';

const movies = require('./mockData.json');

test('it checks to see if PosterRow wrapper is defined', () => {
  const wrapper = shallow(<PosterRow movies={movies} currIndex={movies[0].year} />);
  expect(wrapper).toBeDefined();
});

test('it checks if map returns 8 items', () => {
  // const wrapper = mount(<PosterRow />);
  // expect(wrapper.find(Poster).render().find('.frame')).to.have.lengthOf(1);
  const wrapper = shallow(
    <PosterRow movies={movies} currIndex={0} />,
  );
  console.log(wrapper.find('.posters').children());
  // console.log(wrapper.find(Poster).render().find('.frame').length);
  expect(wrapper.children()).toHaveLength(8);
});
