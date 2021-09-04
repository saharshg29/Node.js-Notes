// For using third party middleware, head over to (expressjs.com) 
// The official website for getting third party middleware. 
// Click over Resources tab and then choose middleware option.
// There you will get to see all the official third party mdiddleware

// Helmet is one of the most important third party middleware.
// It helps us in securing our apps by setting various HTTP headers.

// Morgana is another important third party middleware which is used for logging in HTML requests

// Bsic code structure for using helmet is given bellow

const morgan = require('morgan');       // Here in this line we are imorting morgan module
const helmet = require('helmet');       // Here in this line we are importing helmet package
const express = require('express');     // Here in this line we are importing express package
const app = express();                  // Here we are getting express method inside our 'app' variable
app.use(helmet());                      // Here helmet method is initialized
app.use(morgan());                      // And here in this line we are are calling our morgan method

// And thats all we need to do


// For more details on how to use, any third party middleware have a look on vidly application