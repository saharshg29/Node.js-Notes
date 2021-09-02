// This is our first web server


const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})


// An environment variable is basically a variable in the environment  in which the application runs
// Its value is set outside the application
// Here we are using port PORT as environment variable

//PORT 
const port = process.env.PORT || 3000 ;
app.listen(port, () => {
    console.log(`Listening on port ${port} ....`)
})

app.get('/api/core', (req, res) => {
    res.send([1,2,3])
});

// app.post()

// app.put()

// app.post()