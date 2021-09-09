const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learning')
    .then(() => console.log('Connected to mongoDB....'))
    .catch(err => console.log('Could not connect to mongoose'));

const Author = mongoose.model('Author', new mongoose.Schema({
    name: String,
    bio: String,
    mobile: Number
}));

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    // auhtor: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Author'
    // }
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
        // .populate('Author')
        // .select('name');
    console.log(courses);
}

// createAuthor('Mosh', 'My bio', 'My website');

// createCourse('Node Course', '6139f229f08d35de52b085ad')

listCourse();

