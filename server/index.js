const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/connection.js');
// when want to switch to other database, could just what db imports here

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// TO DO: Extend the existing API to support all CRUD operations:
// Create / POST - create a new item
// Read / GET - read an item
// Update / PUT - update an item
// Delete / DELETE - delete an item

app.get('/api/movies/:genre/relatedmovies', (req, res) => {
  const param = req.params.genre;

  db.getAll(param, (error, results) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.send(results);
    }
  });
});

app.get('/api/movies/:movieId', (req, res) => {
  const movieId = req.params.movieId;

  db.getOne(movieId, (error, results) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.send(results);
    }
  });
});

app.post('/api/movies', (req, res) => {
  // console.log('req from index.js line 30>>>>>>>>>>>>>>>>>', req.body);
  db.addMovie(req.body.title, req.body.year, req.body.image, req.body.genre, (error, results) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(201).send();
    }
  });
});

app.put('/api/movies', (req, res) => {

  // console.log(req.body);
  db.updateMovieData(req.body.movieId, req.body.title, req.body.year, req.body.image, req.body.genre, (error, results) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(202).send();
    }
  });
});

app.delete('/api/movies', (req, res) => {
  // console.log(req.body);
  db.deleteMovie(req.body.movieId, (error, results) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(200).send();
    }
  });
});

module.exports = app;
