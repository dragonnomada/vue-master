create database moviesdb;

use moviesdb;

create table movies (
    movie_id int primary key auto_increment,
    title varchar(255) not null,
    descrip text,
    realase_year int not null,
    country varchar(20) default 'XX',
    imdb_score float default -1 
);

create table directors (
    director_id int primary key auto_increment,
    fullname varchar(255) not null,
    country varchar(20) default 'XX'
);

create table director_movies (
    director_movies_id int primary key auto_increment,
    director_id int not null,
    movie_id int not null unique
);