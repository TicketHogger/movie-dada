
DROP DATABASE IF EXISTS related_movies;

CREATE DATABASE related_movies with owner = marymatthews;

\connect related_movies;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL UNIQUE,
  year SMALLINT NOT NULL,
  image TEXT NOT NULL,
  actor TEXT NOT NULL
);

COPY movies("title", "year", "image", "actor") FROM '/Users/marymatthews/SDC/related_movies/database/movie4.csv' 
WITH DELIMITER ',' CSV HEADER;