// Promises means to hold the eventual result of an asynchronus operation

const p = new Promise((resolve, reject) => {
    // Kick off some async work
    resolve(1);                                     // pending => resolved, fulfilled
    setTimeout(() => {
        reject(new Error('message'));               //pending => rejected
    }, 120);
})

p
    .then(result => console.log('Result', result))
    .catch(err => console.log('Error', err.message));