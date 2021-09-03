const Joi = require('joi')
const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send([1,2,3,4,5,6])
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given id could not be found')

    const { error } = validateCourse(req.body);
    if (error)  return res.status(400).send(error.details[0].message);
        
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given id could not be found')

    const index = course.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found')
    res.send(course);
});


app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with given id could not be found');
    res.send(course);
});

const port = process.env.PPORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}....`))