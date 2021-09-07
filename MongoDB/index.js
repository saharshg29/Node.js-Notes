// Connecting to mongoDb

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('Connection successfull '))
.catch(err => console.error('Could not connect ot MongoDB..', err))