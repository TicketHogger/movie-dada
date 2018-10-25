CREATE DATABASE related_movies;

use related_movies;

CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title TEXT NOT NULL,
  year SMALLINT,
  image TEXT NOT NULL
);

insert into movies (title, year, image) values ("Turner Cremin", 2019, "https://s3.amazonaws.com/uifaces/faces/twitter/urrutimeoli/128.jpg");
insert into movies (title, year, image) values ("Greyson Little", 2019, "https://s3.amazonaws.com/uifaces/faces/twitter/hoangloi/128.jpg");
insert into movies (title, year, image) values ("Noah Grant", 2019, "https://s3.amazonaws.com/uifaces/faces/twitter/keryilmaz/128.jpg");
insert into movies (title, year, image) values ("Sammie Raynor", 2018, "https://s3.amazonaws.com/uifaces/faces/twitter/chaabane_wail/128.jpg");
insert into movies (title, year, image) values ("Loren Hand", 2019, "https://s3.amazonaws.com/uifaces/faces/twitter/shalt0ni/128.jpg");
