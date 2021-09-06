console.log('Before');
getUser(1, function (user) {                     // Arrow funciton should be prepared in such a case
    console.log('User', user);

    // Getting the repositories 
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos', repos)
    });
});
console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'saharsh' });
        }, 2000);
    })

}

function getRepositories(usuername) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calling git hub API....');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    })

}

function getCommits(repos) {
    return new Promise((resolve, reject) => {
        console.log('Calling GitHub API....');
        resolve('Commit')
    }, 2000)
}