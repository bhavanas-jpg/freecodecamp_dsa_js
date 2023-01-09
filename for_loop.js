// The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.

// For loops are declared with three optional expressions separated by semicolons:

// for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.

// The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

// The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.

// The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

// In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final expression.

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}

/** Iterate odd and even numbers through for loop */
//odd numbers
const myArray = [];
for( let i = 1; i <= 9; i += 2){
  myArray.push(i)
}

//even numbers
const Array = [];

for (let i = 0; i < 10; i += 2) {
  Array.push(i);
}