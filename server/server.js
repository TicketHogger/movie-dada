const express = require('express');

const path = require('path');

const db = require('../database/connection.js');

const app = express();
const port = 3003;

app.use('/static', express.static(path.join(__dirname, '../public')));

app.get('/api/movies/:movieid/relatedmovies', (req, res) => {
  db.getAll((error, results) => {
    if (error) {
      res.status(500).send(error.message);
    }
    res.send(results);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
