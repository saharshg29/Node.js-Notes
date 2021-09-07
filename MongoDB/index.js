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

// Creating a database in MonogoDB
/*

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

 createCourse();

*/

// Retrieving data from MongoDB
/*

async function getCourse() {
    const courses = await Course.find();
    console.log(courses);
}

getCourse()
    
*/

/*

Using find limit sort and select with our files

async function getCourses() {
    const courses = await Course
        .find({ isPublished: true })
        .limit(1)
        .sort({ name: -1})
        .select({name: 1, tags: 1 });
    console.log(courses)
}

getCourses();

*/
/*
async function getCourses() {

    // Comparison operators for mongoDB or Mongoose

    // eq => equal
    // ne => not equal
    // gt => greater than 
    // gte => greater than or equal to
    // lt => less than 
    // lte => less than or equal to
    // in => in
    // nin => not in

    const courses = await Course
        // .find({ author: 'Saharsh', isPublished: true})
        // .find({ price: {$gt : 10, $lte: 20} })
        .find({ price: { $in: [15, 20, 10, 30] } })
        .limit(1)
        .sort({ name: -1 })
        .select({ name: 1, tags: 1 });
    console.log(courses)
}


getCourses();
*/

/*
async function getCourses() {

    // Logical Operators in MongoDB

    // or
    // and

    const courses = await Course
        // .find({ isPublished: true })
        .find()
        .or([ {author: 'Mosh'}, {isPublished: true} ])
        .and([ {author: 'Mosh'}, {isPublished: true} ])
        .limit(1)
        .sort({ name: -1})
        .select({name: 1, tags: 1 });
    console.log(courses)
}

getCourses();
*/


async function getCourses() {

    // Regular Expression in MongoDB
    //are written within (/pattern/)
    // in order to make the pattern case insensitive use i as expressed here /pattern/i

    const courses = await Course
        // .find({ isPublished: true })

        //Starts with saharsh
        .find({ author: /^Saharsh/ })

        //Ends with Gupta
        .find({ author: /Gupta$/ })

        // Contains harsh
        .find({ author: /.*harsh*./ })

        .limit(1)
        .skip()
        .sort({ name: -1 })
        .select({ name: 1, tags: 1 })
        .count();
    console.log(courses)
}

getCourses();