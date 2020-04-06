// promise that is already resolved
// const p = Promise.resolve({ id: 1 });
// p.then((result) => console.log(result));

// promise that is already rejected
// in place of new Error if we write only 'reason for rejection' we wont get error stack
// const p = Promise.reject(new Error("reason for rejection..."));
// p.catch((error) => console.log(error));

// running promises in parallel
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 1 ...");
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2 ...");
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log("Error", err.message));

// Promise.race reserves first asynchronous operation completed
Promise.race([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log("Error", err.message));
