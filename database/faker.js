const faker = require('faker');
const fs = require('fs');


for (var i = 0; i < 5; i++) {

  let year = faker.date.future();
  year = Number(JSON.stringify(year).slice(1, 5));

  let movie = {
    title: faker.name.findName(),
    year: year,
    image: faker.image.avatar()
  };

  fs.appendFile('schema.sql', `insert into movies (title, year, image) values ("${movie.title}", ${movie.year}, "${movie.image}");\n`, function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 

}
