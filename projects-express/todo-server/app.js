const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const { getConnection } = require('./services/MySQLService');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const dbRouter = require('./routes/db');
const todosRouter = require('./routes/todos');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todos', todosRouter);
app.use('/db', dbRouter);

getConnection().catch(error => console.error(`[Server 001] MySQL Error ${error}`))

module.exports = app;
