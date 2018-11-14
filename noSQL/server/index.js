const express = require('express');

const path = require('path');

const db = require('../database/connection.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/movies/:genre/relatedmovies', (req, res) => {
  const param = req.params.genre.slice(1);
  db.getAll(param, (error, results) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.send(results);
    }
  });
});

module.exports = app;
