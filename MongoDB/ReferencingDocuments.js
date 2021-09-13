const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Referencing')
    .then(() => console.log('Connected Sucessfully to mongoDB'))
    .catch(err => console.error(err));

const Author = mongoose.model('Author', new mongoose.Schema({
    name: String,
    bio: String,
    websit: String
}));

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String
}));

async function createAuthor(name, bio, website) {
    const author = new Author({
        name,
        bio,
        website
    });

    const result = await author.save();
    console.log(result);
}

async function createCourse(name, author) {
    const course = new Course({
        name,
        author
    });

    const result = await course.save();
    console.log(result);
}

async function listCourse() {
    const courses = await Course
        .find()
        .select('name');
    console.log(courses)
}

// createAuthor('Saharsh', 'My bio', 'my website');

// createCourse('Node Course', 'authorID');

listCourse();