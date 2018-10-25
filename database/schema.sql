DROP DATABASE IF EXISTS related_movies;

CREATE DATABASE related_movies;

use related_movies;

CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title TEXT NOT NULL,
  year SMALLINT,
  image TEXT NOT NULL
);

insert into movies (title, year, image) values ("Aisha Fadel", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/19.jpeg");
insert into movies (title, year, image) values ("Sammie Cronin", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/11.jpeg");
insert into movies (title, year, image) values ("Berenice Becker III", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/10.jpeg");
insert into movies (title, year, image) values ("Oswaldo Botsford", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/5.jpeg");
insert into movies (title, year, image) values ("Monserrate Witting", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/13.jpeg");
insert into movies (title, year, image) values ("Amos Jacobson", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/11.jpeg");
insert into movies (title, year, image) values ("Lizeth Langworth", 2018, "https://s3-us-west-1.amazonaws.com/moovi-images/2.jpeg");
insert into movies (title, year, image) values ("Megane Mills", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/16.jpeg");
insert into movies (title, year, image) values ("Eve Jaskolski", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/16.jpeg");
insert into movies (title, year, image) values ("Ms. Chadd McGlynn", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/18.jpeg");
insert into movies (title, year, image) values ("Americo Renner", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/14.jpeg");
insert into movies (title, year, image) values ("Angelina Stokes", 2018, "https://s3-us-west-1.amazonaws.com/moovi-images/10.jpeg");
insert into movies (title, year, image) values ("Talia Hilll", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/20.jpeg");
insert into movies (title, year, image) values ("Lazaro Gorczany", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/18.jpeg");
insert into movies (title, year, image) values ("Sydney Kihn", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/18.jpeg");
insert into movies (title, year, image) values ("Brennon Lind", 2018, "https://s3-us-west-1.amazonaws.com/moovi-images/1.jpeg");
insert into movies (title, year, image) values ("Mertie Graham", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/14.jpeg");
insert into movies (title, year, image) values ("Hassie Ortiz", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/4.jpeg");
insert into movies (title, year, image) values ("Antonina Keeling", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/14.jpeg");
insert into movies (title, year, image) values ("Miss Margarete Haley", 2019, "https://s3-us-west-1.amazonaws.com/moovi-images/1.jpeg");
