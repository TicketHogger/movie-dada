const express = require('express');

const path = require('path');

const db = require('../database/connection.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

// TO DO: Extend the existing API to support all CRUD operations:
// Create / POST - create a new item
// Read / GET - read an item
// Update / PUT - update an item
// Delete / DELETE - delete an item

app.get('/api/movies/:genre/relatedmovies', (req, res) => {
  const param = req.params.genre;
  console.log(param);
  db.getAll(param, (error, results) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.send(results);
    }
  });
});

app.post('/api/movies/:movieId/relatedmovies', (req, res) => {
  const movieId = req.params.movieId;

  db.addOne(movieId, (error, results) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(201).send();
    }
  });
});



module.exports = app;
