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


// for (var i = 1; i < 1001; i++) {

//   fetch('https://loremflickr.com/130/190/filmposter')
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error(response.statusText)  // throw an error if there's something wrong with the response
//     })
//     .then(function handleData(data) {
//       // your happy data goes here
//       fs.writeFile(`/Users/marymatthews/SDC/related_movies/database/images/movieImg${i}.png`, data, err => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('file saved!');
//         }
//       });
//       ));
//       .catch (function handleError(error) {
//     // handle errors here
//   })
// }
