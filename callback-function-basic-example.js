console.log("Before");
getUser(1, (user) => {
  console.log("User", user);
  getRepositories(user.gitHubUsername, (repos) => {
    console.log("Repos", repos);
  });
});
console.log("After");

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
