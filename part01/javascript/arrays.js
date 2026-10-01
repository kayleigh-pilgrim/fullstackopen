// ARRAYS
const t = [1, -1, 3]; // Define array with 3 value
// Even though it is a constant, the contents of the object it references can change.
// Think of it as changing the furniture in a house, while its address stays the same.
t.push(5); // Add 5 at the end of the same array
console.log(t); // [1, -1, 3, 5]
console.log(t.length); // 4
console.log(t[1]); // -1
t.forEach((value) => {
    console.log(value); // Prints each value in the array
});

// CONCAT
const t2 = t.concat(5); // Creates a new array with 5 added at the end, ensuring the original array is unchanged
console.log(t2); // [1, -1, 3, 5, 5]

// MAP
const m1 = t.map((value) => value * 2); // Creates a new array with each value multiplied by 2
console.log(m1); // [2, -2, 6, 10]
// Map can also transform the array into something completely different:
const m2 = t.map((value) => "<li>" + value + "</li>"); // Creates a new array with each value wrapped in <li> tags
console.log(m2); // ['<li>1</li>', '<li>-1</li>', '<li>3</li>', '<li>5</li>']

// DESTRUCTURING
const [first, second, ...rest] = t; // Destructuring assignment to extract values from the array
console.log(first); // 1
console.log(second); // -1
console.log(rest); // [3, 5]
