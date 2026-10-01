// one of the ways to create an object is to use the OBJECT LITERAL syntax
const object1 = {
    name: "Arto Hellas",
    age: 35,
    education: "PhD",
};

const object2 = {
    name: "Full Stack web application development",
    level: "intermediate studies",
    size: 5,
};

const object3 = {
    name: {
        first: "Dan",
        last: "Abramov",
    },
    grades: [2, 3, 5, 3],
    department: "Stanford University",
};

// Accessing object properties
console.log(object1.name); // Arto Hellas
console.log(object1["name"]); // Arto Hellas
console.log(object3.name.first); // Dan
const fieldName = "age";
console.log(object1[fieldName]); // 35

// Adding new properties to an object
object1.address = "Helsinki";
object1["secret number"] = 12341; // property names can also contain spaces, but then they must be accessed with the bracket notation
console.log(object1); // { name: 'Arto Hellas', age: 35, education: 'PhD', address: 'Helsinki', 'secret number': 12341 }
