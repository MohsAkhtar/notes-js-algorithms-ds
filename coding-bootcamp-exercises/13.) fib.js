// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// ITERATIVE SOLUTION - O(n)
function fib1(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }

  return result[n];
}

// RECURSIVE SOLUTION - O(2^n) SLOW
function fib2(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

// MEMOIZATION SOLUTION
function memoize(fn) {
  const cache = {};

  return function(...args) {
    // ...args is defensive coding as in to say we don't know how many args will be recieved
    if (cache[args]) {
      // check if this function has ever been called with these specific args
      return cache[args]; // return if true
    }

    // if not used with these args
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  // Notice these are fib not slowFib, this is because it is referencing the fib below
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
