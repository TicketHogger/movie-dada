
DROP DATABASE IF EXISTS related_movies;

CREATE DATABASE related_movies with owner = marymatthews;

\connect related_movies;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  year SMALLINT NOT NULL,
  image TEXT NOT NULL,
  genre TEXT NOT NULL
);

COPY movies("title", "year", "image", "genre") FROM '/Users/marymatthews/SDC/related_movies/database/movie2.csv' 
WITH DELIMITER ',' CSV HEADER;
