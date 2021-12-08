create database store;

use store;

create table items (
    item_id int primary key auto_increment,
    item_name varchar(255) not null,
    item_status int default -1
);

