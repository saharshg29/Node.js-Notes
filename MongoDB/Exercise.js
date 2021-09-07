const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercise')
    .then(() => console.log('Connection successfull'))
    .catch(err => console.log('An error Occured...', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    return await Course
        .find({ isPublished: true, tags: 'backend' })
        .sort({ name: 1 })
        .select({ name: 1, author: 1 })

}

getCourses();