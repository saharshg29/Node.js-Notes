// Our index.js is independent on two packages
// Joi and Express

// const morgan = require('morgan');

const debug = require('debug')('app:startup');
// const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('../Advanced Express/logger');
const authentication = require('../Advanced Express/authentication');
const genres = require('./route/genres')
const home = require('./route/home')
const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api/courses', genres);

const port = process.env.PORT || 3000;
app.listen(port, () => `Application is running on port ${port}....`);