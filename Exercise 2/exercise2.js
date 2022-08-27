// Exercise #2: Intermediate
// Aim: Create a function that returns the number of true values in an array.

// Examples

// countTrue([true, false, false, true, false])    ➞    2

// countTrue([false, false, false, false])    ➞    0

// countTrue([])    ➞    0
// Notes

// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

function countTrue(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++)
    if (arr[i] === true) {
      count++;
    }
  return count;
}

console.log(countTrue([true, false, false, true, false])); //  2
console.log(countTrue([])); //  0
console.log(countTrue([false, false, false, false])); //  0
