// as we have already seen that by using HTTP module we can create our web servers

// Below given code is an example of web server

/*
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000.... ') */

// first of all download express from node