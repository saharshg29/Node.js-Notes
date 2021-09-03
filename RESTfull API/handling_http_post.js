const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.get('/api/courses/', (req, res) => {
    res.send(courses)
});

app.post('/api/courses', (req, res) => {
    const course = {
        id: course.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.get('/api/course/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!courses) res.status(404).send('The course with this ID could not be found')
    res.send(course);
});

const port = process.env.PORT || 5000;

app.listen(port, () => `listening on port ${port}`);