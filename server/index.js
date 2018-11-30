const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const db = require('../database/mySQL/connection.js'); // for mySQL database
const db = require('../database/postgres/connection.js');
const redis = require('../database/redis/connection.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.get('/api/movies/:actor/relatedmovies', (req, res) => {
  const param = req.params.actor.split('+').join(' ');
  // res.send(param);

  // check redis,
  redis.getAll(param, (error, results) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      console.log('results from server/redis line25', results);
      if (results.length > 0) {
        // if there, return data
        res.status(200).send(results);
      } else {
        // if not there, get from postgres database,
        db.getAll(param, (err, dbresults) => {
          if (error) {
            res.status(500).send(err.message);
          } else {
            // before sending database results back, add them to redis
            redis.cacheMovies(param, JSON.stringify(dbresults.rows), (error, results) => {
              if (error) {
                res.send(error.message);
              }
            });
            res.send(dbresults.rows);
          }
        });
      }
    }
  });

});

app.get('/loaderio-1fed563cf707d73598934ed38adeabe5/', (req, res) => {
  res.send('loaderio-1fed563cf707d73598934ed38adeabe5');
});

app.post('/api/movies', (req, res) => {
  // console.log('req from index.js line 30>>>>>>>>>>>>>>>>>', req.body);
  db.addMovie(req.body.title, req.body.year, req.body.image, req.body.actor, (error, results) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(201).send();
    }
  });
});

// no longer querying by genre...
// app.get('/api/movies/:genre/relatedmovies', (req, res) => {
//   const param = req.params.genre;

//   db.getAll(param, (error, results) => {
//     if (error) {
//       res.status(500).send(error.message);
//     } else {
//       res.send(results);
//     }
//   });
// });

// ** for postgres, below db methods are not yet written

// app.get('/api/movies/:movieId', (req, res) => {
//   const movieId = req.params.movieId;

//   db.getOne(movieId, (error, results) => {
//     if (error) {
//       res.status(500).send(error.message);
//     } else {
//       res.send(results);
//     }
//   });
// });


// app.put('/api/movies', (req, res) => {

//   // console.log(req.body);
//   db.updateMovieData(req.body.movieId, req.body.title, req.body.year, req.body.image, req.body.genre, (error, results) => {
//     if (error) {
//       res.status(500).send(error.message);
//     } else {
//       res.status(202).send();
//     }
//   });
// });

// app.delete('/api/movies', (req, res) => {
//   // console.log(req.body);
//   db.deleteMovie(req.body.movieId, (error, results) => {
//     if (error) {
//       res.status(500).send(error.message);
//     } else {
//       res.status(200).send();
//     }
//   });
// });

module.exports = app;
