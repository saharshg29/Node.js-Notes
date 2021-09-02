var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message)
}

log("hello world")

// In order to make a good web application avoid declaring varriables in global scope
// Instead use modularity. In these case those varriables with same name do not overwrite each other. 
// This is because they get encapsulated within their own level or scope