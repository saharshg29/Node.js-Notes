const Joi = require('joi');         // joi package here in this line is returning a Class so therefore we are using here Pascal convention
const express = require('express');
const app = express();

app.use(express.json());

var courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses/', (req, res) => {
    res.send(courses)
})

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    console.log(result);

    if (result.error) {
        // 400 is conventionally used for bad request
        res.status(400).send(result.error.details[0].message('name is required'));
        return;
    }

    const course = {
        id: course.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});