const express = require('express');

const path = require('path');

const db = require('../database/connection.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/movies/:movieid/relatedmovies', (req, res) => {
  db.getAll((error, results) => {
    if (error) {
      res.status(500).send(error.message);
    }
    res.send(results);
  });
});

module.exports = app;
