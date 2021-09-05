console.log('Before');
getUser(1, function(user) {                     // Arrow funciton should be prepared in such a case
    console.log('User', user);

    // Getting the repositories
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos', repos)
    });
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUsername: 'saharsh'});
    }, 2000);
}

function getRepositories(usuername,callback) {
    setTimeout(() => {
        console.log('calling git hub API....') ;
        callback(['repo1', 'repo2', 'repo3']) ;
}, 2000);
}