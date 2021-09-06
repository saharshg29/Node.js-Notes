const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async Operation.. 1');
        resolve(1);
    }, 3000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async Operation.. 2');
        resolve(2);
    }, 2000);
});

Promise.race([p1, p2])
    .then(result => console.log(result));

// Await method is even more easy and a way better for converting a synchronus code to asynchronus code

