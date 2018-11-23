const fs = require('fs');
const request = require('request');

const download = (uri, filename, callback) => {
  request.head(uri, (err, res, body) => {
    for (var i = 0; i < 1000; i++) {
      var sum = i + i + 1;
    }
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
    request(uri).pipe(fs.createWriteStream(filename)).on('finish', callback);
  });
};

for (var i = 901; i < 1001; i++) {
  download(`https://loremflickr.com/130/190/filmposter`, `/Users/marymatthews/SDC/related_movies/database/images9/movieImg${i}.png`, () => {
    console.log(`image #${i} downloaded`);
  });
}
