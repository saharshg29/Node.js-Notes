
const p = Promise.resolve({id: 1});
p.then(result => console.log(result));
const e = Promise.reject(new Error('Reason for rejection....'));
e.catch(error => console.log('rejected because of'), error);