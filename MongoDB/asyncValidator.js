const { Mongoose } = require('mongoose');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/asyncValidation')
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

        // trim lowercse uppercse maxlength minlength are some of the properties for string vaidation in mongoose
        // max and min are two validation property for Nnumber validation in javaScript
        type: Array,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v, callback) {
                setTimeout(() => {
                    // Do some async work
                    const result = v && v.length > 0;
                    callback(result);

                }, 4000);
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
        max: 200,
        get: v => Math.round(v),
        set: v => Math.round(v)
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

    try {
        const result = await course.save();
        console.log(result);
    } catch (ex) {
        for (field in ex.errors)
            console.log(ex.errors[field]);
    }

    // console.log(course);

    const result = await course.save();
    console.log(result)
}

createCourse();
