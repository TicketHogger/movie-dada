const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb/localhost/related_movies');

const movieSchema = new Schema({
  title: String,
  year: Number,
  image: String,
  genre: String,
});

const Movie = mongoose.model('Movie', movieSchema);



// const insertMovieData = function() {
//   Movie.create(arrOfDocuments)
//     .then(() => db.disconnect());
// };

// insertMovieData();

