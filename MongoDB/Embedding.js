const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Embedding')
    .then(() => console.log('Connected to MongoDB......'))
    .catch(err => console.error('could not connect to MongoDB..', err));

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    author: authorSchema
}));

async function createCourse(name, author) {
    const course = new Course({
        name,
        author
    });

    const result = await course.save();
    console.log(result)
}

async function listCourses() {
    const courses = await Course.find();
    console.log(courses);
}

async function updateAuthor( courseID ) {
    const course = await Course.findById(courseID);
    course.author.name = 'Saharsh Gupta';
    course.save();
}

// createCourse('Node Course', new Author({name: 'Saharsh'})); 
updateAuthor('6139fcc76e348ecbe4e98ceb');