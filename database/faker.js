const faker = require('faker');
const fs = require('fs');

const randomInt = max => Math.floor(Math.random() * max + 1);
const randNum = max => Math.floor(Math.random() * max);
const genres = ['action', 'romance', 'comedy', 'horror', 'documentary'];

const file = fs.createWriteStream('database/movie2.csv');
file.write('title,year,image,genre\n');

function writeOneMillionTimes() {
  let i = 10000001;

  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 1) {
        // last time!

        let year = faker.date.between('1970-01-01', '2019-01-01');
        year = Number(JSON.stringify(year).slice(1, 5));
        const movie = {
          title: faker.lorem.words() + i,
          year,
          image: `https://s3.us-east-2.amazonaws.com/ticket-hogger/movie-posters/movieImg${randomInt(299)}.png`,
          genre: genres[randNum(genres.length)],
        };

        file.write(`"${movie.title}",${movie.year},"${movie.image}","${movie.genre}"\n`, () => {
          console.log('wrote one');
          console.clear();
        });
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.

        let year = faker.date.between('1970-01-01', '2019-01-01');
        year = Number(JSON.stringify(year).slice(1, 5));
        const movie = {
          title: faker.lorem.words() + i,
          year,
          image: `https://s3.us-east-2.amazonaws.com/ticket-hogger/movie-posters/movieImg${randomInt(299)}.png`,
          genre: genres[randNum(genres.length)],
        };

        ok = file.write(`"${movie.title}", ${movie.year}, "${movie.image}","${movie.genre}"\n`);
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