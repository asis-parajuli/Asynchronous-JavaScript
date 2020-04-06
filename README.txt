# Asynchronous-JavaScript

Promise:

Holds the eventual result of an asynchronous operation.

3 States in Promise:

When we create a promise object , it will be in the pending state.

At this point it will kick some async operation, and when the result is ready the promise can either be fulfilled or resolved ( will get a value) (Async operation completed successfully)

When something gets wrong during the execution of async operation, our promise will be in the rejected state, this means we are getting an error.
