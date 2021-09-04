// every route handler function we have is a middleware in express
// Because it take request(req) and return(res) back to client

// This middleware function can be used for login purpose or say authentication purpose

const express = require('express');
const app = express();

app.use(express.json());            // This is a middleware function

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

