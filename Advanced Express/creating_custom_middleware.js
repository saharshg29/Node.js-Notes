const Joi = require('joi');
const express = require('express');
const app = express();
const authentication = require('./authentication');
const logger = require('./logger')

app.use(express.json());

app.use(logger);

app.use(authentication);

const courses = [
    {id: 1, naem:'course1'},
    {id: 3, naem:'course3'},
    {id: 2, naem:'course2'}
];

app.get('/', (req,res) => {
    res.send('Hello World')
});

app.get('/courses', (req, res) => {
    console.log('working on port 3000');
    res.send(courses)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));