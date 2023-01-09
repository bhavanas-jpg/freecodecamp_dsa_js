//Testing objects for properties::
/** there is hasOwnProperty() to check whether the object contains the 
 * property or not
 * If property exists it returns true, if doesn't exist it returns false .
 */
 const person = {
    name: "Bhavana",
    age: 25,
    height: 5.3
 }
 console.log(person.hasOwnProperty("weight")); //output: false
