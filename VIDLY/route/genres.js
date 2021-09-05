const express = require('express');
const router = express.Router();

var genres = [
    {id: 1, genre: 'Action'},
    {id: 1, genre: 'Comedy'},
    {id: 1, genre: 'Thriller'},
    {id: 1, genre: 'Drama'},
    {id: 1, genre: 'Fiction'},
    {id: 1, genre: 'Science Fiction'}
];

router.get('/', (req, res) => {
    res.send(genres);
});

router.get('/', (req, res) => {
    console.log('Welcome to the world of VIDLY.');
    res.send('Hello World!');
});

router.get('/', (req, res) => {
    res.send(genres);
});

router.get('/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('Given genre does not exist');
    res.send(genre)
});

router.post('/', (req,res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = {
        id: genre.length + 1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
});

router.put('/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with given id could not be found.');

    const {error} = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    genre.name = req.body.name;
    res.send(genre);
});

router.delete('/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('Given genre could not be found')

    const index = genres.indexOf(genre);
    genres.slice(index, 1)

    res.send(genres)
});

function validateGenre() {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);
};

module.exports = router;