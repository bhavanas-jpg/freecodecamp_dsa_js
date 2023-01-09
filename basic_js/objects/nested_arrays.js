//Accessing nested arrays in objects
/**
 * Here we created ourPets is array of objects
 * Below is example of how to access property in nested array of object.
 */
const ourPets = [
    {
        animalType: "cat",
        names: [
            "Fluffy",
            "Kit-Cat"
        ]
    },{
        animalType: "dog",
        names: [
            "Spot",
            "Bowser"
        ]
    }
];
console.log(ourPets[0].names[1])