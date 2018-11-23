const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  database: 'related_movies',
});

const getAll = (genre, callback) => {
  connection.query(`SELECT * from movies WHERE genre = '${genre}'`, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const getOne = (id, callback) => {
  connection.query('SELECT * from movies WHERE id = ?', [id], (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

// could also wriet get one by title, but not necessary  

const addMovie = (title, year, image, genre, callback) => {
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

const deleteMovie = (id, callback) => {
  const queryStr = 'DELETE FROM movies WHERE id = ?';
  connection.query(queryStr, [id], (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { getAll, getOne, addMovie, updateMovieData, deleteMovie };
