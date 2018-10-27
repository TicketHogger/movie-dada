const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  database: 'related_movies',
});

const getAll = (callback) => {
  connection.query('SELECT * from movies', (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

module.exports.getAll = getAll;
