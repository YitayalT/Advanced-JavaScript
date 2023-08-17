// function currying is the process of transforming a function with multiple arguments
// into a sequence of nesting function that take one argument each time.It does not call a function
// simply it transforms it.

function sum(a, b, c) {
  return a + b + c;
}

// console.log(sum(1, 2, 3));

function curried(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedCall = curried(sum);
console.log(curriedCall(2)(4)(3));