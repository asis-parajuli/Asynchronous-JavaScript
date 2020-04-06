console.log("Before");
getUser(1, getRepositories);
console.log("After");

// named based function to solved callback hell or christmas tree problem
function getRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
  // here we are passing a reference to the function displayCommits
  getCommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

// callback demo
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from the database ...");
    callback({ id: id, gitHubUsername: "asis-parajuli" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling the GitHub API....");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
