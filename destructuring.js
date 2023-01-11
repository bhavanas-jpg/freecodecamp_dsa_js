/** Use Destructuring Assignment to Assign Variables from Nested Objects
 * 
 * 
 */

const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };

  /** how to extract the values of object properties and assign them to variables with the same name: */
  const { johnDoe: { age, email }} = user;

  /**here's how you can assign an object properties' values to variables with different names */

  const { johnDoe: { age: userAge, email: userEmail }} = user;