// Our index.js is independent on two packages
// Joi and Express

// const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());
app.use(helmet());
// app.use(morgan());

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

app.get('/api/genres', (req, res) => {
    res.send(genres);
});

app.get('/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('Given genre does not exist');
    res.send(genre)
});

// HTTP's delete method

app.delete('/api/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('Given genre could not be found')

    const index = genres.indexOf(genre);
    genres.slice(index, 1)

    res.send(genres)
})

// HTTP's put method
app.put('/api/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with given id could not be found.');

    const {error} = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    genre.name = req.body.name;
    res.send(genre);
});

// HTTP's post method
app.post('/api/geners', (req,res) => {
    const error = validateGenre(req.body);
    if(error) return res.status(400).send(error.details[0].message)

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };
    genres.push(genre);
});


function validateGenre() {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => `Application is running on port ${port}....`);