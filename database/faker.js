const faker = require('faker');
const fs = require('fs');

const randomInt = (max) => {
  return Math.floor(Math.random() * max + 1);
}


for (var i = 0; i < 20; i++) {

  let year = faker.date.future();
  year = Number(JSON.stringify(year).slice(1, 5));

  let movie = {
    title: faker.name.findName(),
    year: year,
    image: `https://s3-us-west-1.amazonaws.com/moovi-images/${randomInt(20)}.jpeg`
  };

  fs.appendFile('database/schema.sql', `insert into movies (title, year, image) values ("${movie.title}", ${movie.year}, "${movie.image}");\n`, function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 

}
