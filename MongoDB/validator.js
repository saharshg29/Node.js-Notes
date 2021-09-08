const { Mongoose } = require('mongoose');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/validation')
    .then(() => console.log('Connection successfull '))
    .catch(err => console.error('Could not connect ot MongoDB..', err));



const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 25
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network']
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            validator: function(v) {
                return v && v.length > 0;
            },
            message: 'Atleast one tag is required'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: true,
        min: 10,
        max: 200    
    }
});

const Course = mongoose.model('Course', courseSchema);

// Creating a database in MonogoDB

async function createCourse() {
    const course = new Course({
        name: 'Anggulaar Course',
        category: 'web',
        author: 'Saharsh',
        tags: ['Anggulaar', 'backend'],
        isPublished: true,
        price: 45
    });

    // console.log(course);

    const result = await course.save();
    console.log(result)
}

createCourse();
