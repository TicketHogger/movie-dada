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

  if (title) {
    connection.query(`UPDATE movies SET title = ? WHERE id = ?`, [title, id], (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }

  if (year) {
    connection.query(`UPDATE movies SET year = ? WHERE id = ?`, [year, id], (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }

  if (image) {
    connection.query(`UPDATE movies SET image = ? WHERE id = ?`, [image, id], (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }

  if (genre) {
    connection.query(`UPDATE movies SET genre = ? WHERE id = ?`, [genre, id], (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }


};

module.exports = { getAll, addOne, updateMovieData };
