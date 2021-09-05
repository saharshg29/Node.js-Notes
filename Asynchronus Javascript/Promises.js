// Promises means to hold the eventual result of an asynchronus operation

const p = new Promise((resolve, reject) => {
    // Kick off some async work
    setTimeout(() => {
        reject(new Error('message'));
    }, 120);
})

p.then(result => console.log('Result', result));
p.catch(err => console.log('Error', err.message));