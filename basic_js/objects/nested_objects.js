// accessing nested objects::
/**
 * In the object below , we are accessing "glove box"
 */

const myStorage = {
    "car":{
        "inside":{
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
         outside:{
         "trunk": "jack"
        }
    }
}
// different ways in accessing property
/**note: we have to use bracket notation while accessing
* the property which as space in them,
here either "glove box" and "passenger seat" has spaces
**/
console.log(myStorage.car.inside["glove box"])
console.log(myStorage.car["inside"]["glove box"]);