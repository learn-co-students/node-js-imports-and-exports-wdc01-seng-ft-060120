module.exports = function getUserArgument() {
  const userArgs = process.argv.slice(2);

  if (userArgs.length > 1) {
    console.warn(`Warning: you provided more than one argument.`);
  }

  return userArgs[0];
};

// function getUserArguments() {
//   return process.argv.slice(2);
//   // process.argv is an array of arguments passed to the node process
//   // process.argv[0] = absolute path to the node executable
//   // process.argv[1] = absolute path to the current module
//   // and any subsequent indices in process.argv point to arguments that the user has passed in
//   //
// }

// console.log(getUserArguments());

module.exports = function getUserArguments() {
  return process.argv.slice(2);
};
// important to note: all files are modules for Node.js

