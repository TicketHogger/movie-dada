const faker = require('faker');
const fs = require('fs');

const randomInt = (max) => {
  Math.floor(Math.random() * max + 1);
};

fs.writeFile('database/movie.csv', 'id,title,year,image', (err) => {
  if (err) throw err;
});

for (let i = 1; i < 101; i += 1) {
  let year = faker.date.future();
  year = Number(JSON.stringify(year).slice(1, 5));

  const movie = {
    title: faker.lorem.words(),
    year,
    image: `https://s3-us-west-1.amazonaws.com/moovi-images/${randomInt(20)}.jpeg`,
  };

  fs.appendFile('database/movie.csv', `\n"${i}","${movie.title}",${movie.year},"${movie.image}"`, (err) => {
    if (err) throw err;
    console.log('Saved!');
  });
}
