// Our index.js is independent on two packages
// Joi and Express

const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

var genres = [
    {id: 1, genre: 'Action'},
    {id: 1, genre: 'Comedy'},
    {id: 1, genre: 'Thriller'},
    {id: 1, genre: 'Drama'},
    {id: 1, genre: 'Fiction'},
    {id: 1, genre: 'Science Fiction'}
];

// HTTP's GET method

app.get('/', (req, res) => {
    console.log('Welcome to the world of VIDLY.');
    res.send('Hello World!');
});

app.get('/genres', (req, res) => {
    res.send(genres);
});

app.get('/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('Given genre does not exist');
    res.send(genres[req.params.id]);
});

// HTTP's delete method

app.delete('/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('Given genre could not be found')

    const index = genres.indexOf(genre);
    genres.slice(index, 1)

    res.send(genres)
})

// HTTP's put method



// HTTP's post method



function validateGenre() {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);
}

const port = process.env.PORT || 5000;
app.listen(port, () => `Application is running on port ${port}....`);