const faker = require('faker');
const fs = require('fs');

const randomInt = (max) => {
  return Math.floor(Math.random() * max + 1);
}

fs.writeFile('database/movie.csv', `id,title,year,image`, function (err) {
  if (err) throw err;
}); 

for (var i = 1; i < 21; i++) {

  let year = faker.date.future();
  year = Number(JSON.stringify(year).slice(1, 5));

  let movie = {
    title: faker.name.findName(),
    year: year,
    image: `https://s3-us-west-1.amazonaws.com/moovi-images/${randomInt(20)}.jpeg`
  };

  fs.appendFile('database/movie.csv', `\n"${i}","${movie.title}",${movie.year},"${movie.image}"`, function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 

}
