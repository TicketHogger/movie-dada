// NOTES:
// 

const faker = require('faker');
const fs = require('fs');

const randomInt = max => Math.floor(Math.random() * max + 1);

const randNum = max => Math.floor(Math.random() * max);

fs.writeFile('database/movie.csv', 'id,title,year,image,genre', (err) => {
  if (err) throw err;
});

const genres = ['action', 'romance', 'comedy', 'horror', 'documentary'];

for (let i = 1; i < 1000000; i += 1) {
  let year = faker.date.future();
  year = Number(JSON.stringify(year).slice(1, 5));

  const movie = {
    // add + i to title to ensure all titles are unique 
    title: faker.lorem.words() + i,
    year,
    image: `https://s3.us-east-2.amazonaws.com/ticket-hogger/movie-posters/movieImg${randomInt(299)}.png`,
    genre: genres[randNum(genres.length)],
  };

  fs.appendFile('database/movie.csv', `\n"${i}","${movie.title}",${movie.year},"${movie.image}","${movie.genre}"`, (err) => {
    if (err) throw err;
    console.log(`saved! now at ${i / 1000000}%`);
  });
}
