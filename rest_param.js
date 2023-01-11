/**
 * To create the more flexible function,ES6 introduces the rest parameter for function parameters. 
 * With the rest parameter, you can create functions that take a variable number of arguments
 * These arguments are stored in an array that can be accessed later from inside the function.
 * The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.
 */

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2));
  console.log(howMany("string", null, [1, 2, 3], { }));