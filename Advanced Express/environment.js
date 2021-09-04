// Here we will see how to get the environment in which our code is running

const express = require('express');
const app = express();

console.log(`Node_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);                  /* app.get('env') will return the current development and by default it is set to 'development'
 So we can also use this statement for debugging purpose and all*/

// process.env.NODE_ENV enables us to set a variable at runtime
// Here in the above statement NODE_ENV is the varriable we are setting

const config = require('config')                        // Is one of rare and important package which can be used very efficiently for configuration.
const rc = require('rc')                                // This is also a rare but important package

// For more details on these two packages have a look on their documentation
