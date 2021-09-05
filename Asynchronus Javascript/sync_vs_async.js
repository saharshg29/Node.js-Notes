/*
console.log('Before');
setTimeout(() => {
    console.log('Reading a user from database');
}, 2000);
console.log('after');
setTimeout(() => {
    console.log('Reading r from database');
}, 1000);
*/

// The above code is an example of asynchronus code

console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After')

// Callbacks, Promises and Async/await are some of the way to deal with an asynchronus code
function getUser(id) {
    setTimeout(() => {
        console.log('Reading a user from a database....');
        return {id: id, gitHubUsername: 'Saharsh'};
    }, 2000);

    return 1;
}