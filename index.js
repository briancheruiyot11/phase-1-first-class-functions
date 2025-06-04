// receivesAFunction(callback)
function receivesAFunction(callback) {
  callback();
}

// returnsANamedFunction()
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I am a named function");
  };
}

// returnsAnAnonymousFunction()
function returnsAnAnonymousFunction() {
  return function () {
    console.log("I am an anonymous function");
  };
}