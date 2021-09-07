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

    // Comparison operators for Mongoose

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

/*
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
*/

async function updateCourse(id) {
    // Updating a document in mongoDB

    // Approach: Query first
    // findByID()
    // Modify its properties
    // save

    const course = await Course.findById(id);
    if (!course) return;
    course.isPublished = true;
    course.author = 'Another author';

    const result = await course.save();
    console.log(result);

    // Approach: Update first
    // Update: directly
    // Optionally: get the updated document

    course.set({
        isPublished: true,
        author: 'Another Author'
    })
    
}

updateCourse('613753f1dd0e111008c555a5');


async function removeCourse(id,num) {
    const result = await Course.deleteOne( { _id: id });
    const course = await Course.findByIdAndRemove(num);
    console.log(result);
    console.log(course);
}

removeCourse('613754d890dce31464493f7f', '613755dae7a69b26c09f5a9f');
