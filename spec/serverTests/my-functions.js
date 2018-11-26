'use strict';

// Make sure to "npm install faker" first.
const Faker = require('faker');

const randomInt = max => Math.floor(Math.random() * max + 1);
const randNum = max => Math.floor(Math.random() * max);


function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const title = Faker.lorem.words();
  const date = Faker.date.between('1970-01-01', '2019-01-01');
  const year = Number(JSON.stringify(date).slice(1, 5));
  const image = `https://s3.us-east-2.amazonaws.com/ticket-hogger/movie-posters/movieImg${randomInt(299)}.png`;
  const actor = `${Faker.name.firstName()} ${Faker.name.lastName()}`;

  // add variables to virtual user's context:
  userContext.vars.title = title;
  userContext.vars.year = year;
  userContext.vars.image = image;
  userContext.vars.actor = actor;

  // continue with executing the scenario:
  return done();
}


module.exports = { generateRandomData };
