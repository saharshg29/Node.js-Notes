const Joi = require('joi');
const express = require('express');
const logger = require('./logger');
const authentication = require('./authentication');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(logger);
app.use(authentication);

const courses = [   
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]

app.get('/', (req, res) => {
    res.send('Hello World');
});
