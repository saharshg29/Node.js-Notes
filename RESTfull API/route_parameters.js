// Here in this code we will be setting a route parameter.

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);            // In this code block :id is the route parameters
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params)           // In this code block :year and :month are the route parameters
    // along with route parameters we also have query parameters 
    // The only difference between route parameters and query parameter is that query parameter is optional whereas route parameter is compulsory
    // Remember that query parameter in web address is always followed by a question (?) mark
    // Query parameter gives additional information and is very useful in backend
    // Route parameter is an esential part of your web address
    res.send(req.query)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

