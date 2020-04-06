console.log("Before");
setTimeout(() => {
  console.log("Reading a user from the database ...");
}, 2000);
console.log("After");

// here setTimeout defines a asynchronous function as it schedule the task and pass the function to after and then loads after 2 sec
