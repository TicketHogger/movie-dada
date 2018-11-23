const faker = require('faker');
const fs = require('fs');

const randomInt = max => Math.floor(Math.random() * max + 1);
const randNum = max => Math.floor(Math.random() * max);

const file = fs.createWriteStream('database/movie4.csv');
file.write('title,year,image,actor\n');

// want to have 10 movies per actor
// have 10 million movies, so need 1 million different names
// every 10 movies, update the name of the actor

const actors = [];

while (actors.length < 1000001) {
  actors.push(faker.name.findName());
}

function writeOneMillionTimes() {

  let i = 10000001;
  // let i = 1000;

  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 1) {
        // last time!

        const date = faker.date.between('1970-01-01', '2019-01-01');
        const year = Number(JSON.stringify(date).slice(1, 5));

        const movie = {
          title: faker.lorem.words() + i,
          year,
          image: `https://s3.us-east-2.amazonaws.com/ticket-hogger/movie-posters/movieImg${randomInt(299)}.png`,
          actor: actors[randNum(actors.length)],
        };

        file.write(`"${movie.title}",${movie.year},"${movie.image}","${movie.actor}"\n`, () => {
          console.log('wrote one');
          console.clear();
        });
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.

        const date = faker.date.between('1970-01-01', '2019-01-01');
        const year = Number(JSON.stringify(date).slice(1, 5));

        const movie = {
          title: faker.lorem.words() + i,
          year,
          image: `https://s3.us-east-2.amazonaws.com/ticket-hogger/movie-posters/movieImg${randomInt(299)}.png`,
          actor: actors[randNum(actors.length)],
        };

        ok = file.write(`"${movie.title}", ${movie.year}, "${movie.image}","${movie.actor}"\n`);
      }
    } while (i > 1 && ok);
    if (i > 1) {
      // had to stop early!
      // write some more once it drains
      file.once('drain', write);
    }
  }
}

writeOneMillionTimes();