console.log('Before');
getUser(1, (user) => {                     // Arrow funciton should be preffered in such a case
    console.log('User', user);

    // Getting the repositories 
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos', repos)
    });
});

getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => (getCommits(repos[0])))
    .then(commits => console.log('Commits', commits))
    .catch(err => console.log('Error', err.message));
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

getUser(1)