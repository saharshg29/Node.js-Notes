const express = require('express');
const app = express();

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

// This will give us all the courses in the list
app.get('/api/courses', (req, res) => {
    res.send([1,2.3,4]);
});

// This will give us only the courses whose id is given as parameter of get method
// For this we need to write some logic
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send(`The course with the given id ${id} was not found`)
        res.send(course);
    } // 404 is used by convention to display that objct is not found
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
