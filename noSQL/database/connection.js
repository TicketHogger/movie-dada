const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  database: 'related_movies',
});

const getAll = (query, callback) => {
  connection.query(`SELECT * from movies WHERE genre = '${query}'`, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const addOne = (title, year, image, genre, callback) => {

  // console.log('year>>>>>>>>>>>>>>>>>>>>>>', year);
  const queryStr = `INSERT INTO movies (title, year, image, genre) VALUES (?, ?, ?, ?)`;

  connection.query(queryStr, [title, year, image, genre], (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });

};

const updateMovieData = (id, title, year, image, genre, callback) => {

  // UPDATE movies SET genre = 'romance' WHERE genre = 'mary';
  if (title) {
    connection.query(`UPDATE movies SET title = ? WHERE genre = ?`, [id, title], (err, results) => {

    })
  }


};

module.exports = { getAll, addOne, updateMovieData };
