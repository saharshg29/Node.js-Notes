const Joi = require('joi');         // joi package here in this line is returning a Class so therefore we are using here Pascal convention
const express = require('express');
const app = express();

app.use(express.json());

var courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses/', (req, res) => {
    res.send(courses)
})

app.post('/api/courses', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        // 400 is conventionally used for bad request
        res.status(400).send('Name is required and should be minimum 3 charachters');
        return; 
    }
})