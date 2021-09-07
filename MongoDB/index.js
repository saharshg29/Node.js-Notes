// Connecting to mongoDb

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connection successfull '))
    .catch(err => console.error('Could not connect ot MongoDB..', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);
// console.log(Course);

async function createCourse() {
    const course = new Course({
        name: 'Anggulaar Course',
        author: 'Saharsh',
        tags: ['Anggulaar', 'backend'],
        isPublished: true
    });

    // console.log(course);

    const result = await course.save();
    console.log(result)
}

// createCourse();

// Retrieving data from MongoDB

async function getCourse() {
    const courses = await Course.find();
    console.log(courses);
}

getCourse()