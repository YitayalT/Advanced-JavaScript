// A closure is created when a function is created and returned from another function.
// Inner function can access the variables defined in the outer function even after the outer function finishes its execution.
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

const fn = outer();
fn();
fn();
