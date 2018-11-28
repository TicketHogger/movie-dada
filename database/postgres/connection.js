const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'marymatthews',
  password: 'password',
  host: '3.17.23.188',
  port: 5432,
  database: 'related_movies',
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log('error from connection.js line 11>>>', err);
  } else {
    console.log(null, res);
  }
  pool.end();
});

const client = new Client({
  user: 'marymatthews',
  password: 'password',
  host: '3.17.23.188',
  port: 5432,
  database: 'related_movies',
});
client.connect();

//***** DATABASE METHODS */

const getAll = (actor, callback) => {

  const query = {
    text: 'SELECT * FROM movies WHERE actor = $1',
    values: [actor],
  };

  client.query(query, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
    // client.end();
  });
};

const addMovie = (title, year, image, actor, callback) => {
  const query = {
    text: 'INSERT INTO movies(title, year, image, actor) VALUES($1, $2, $3, $4)',
    values: [title, year, image, actor],
  };

  client.query(query, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
    // client.end();
  });

};
module.exports = { getAll, addMovie };
