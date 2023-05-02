// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments, ouput an error message if not.

// takes in an unlimited number of command line arguments
const args = process.argv.slice(2); // extracting the command line arguments
console.log('args:', args);

// Edge case: We need at least 2 arguments
if (args.length < 2) {
  console.log('Please, enter at least 2 arguments');
  // we should stop the execution
  process.exit(); // it's clearly showing our intention (exit the program)
  // return; // return works, but should we use it? => return a value out of a function (exit the function => side effect)
}

// iterate throught the arguments
// forEach
// why not a while?
// c-style loop
// reduce ?
// for of
let total = 0;

for (let arg of args) {
  // Convert the string to number first

  // Edge case: parse arguments to find out if they're whole number
  // arg % 1 === 0
  // Math.floor
  // ?Number.isInteger()
  const convertedNum = Number(arg);
  // Edge case: If any argument is not a number, output an error message

  if (isNaN(convertedNum)) {
    console.log('Please, enter only numbers');
    // return;
    process.exit();
  }

  if (Number.isInteger(convertedNum)) {
    // add the numbers
    total += convertedNum;
  }

  // console.log('arg:', arg, typeof arg, 'total:', total);
}

// print out the result
console.log('Total:', total);
