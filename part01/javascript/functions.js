// Defining an arrow function
const sum = (p1, p2) => {
    console.log("Calculating the sum of", p1, "and", p2);
    return p1 + p2;
};

// Calling the function
const result = sum(5, 3);
console.log("The result is", result); // The result is 8

// If there is just a single parameter, the parentheses can be omitted (but my linter adds them automatically)
// const square = p => {
const square = (p) => {
    console.log("Calculating the square of", p);
    return p * p;
};

// If the function only contains a single expression, the curly braces and the return statement can also be omitted
const square2 = (p) => p * p;
// This form is handy when manipulating arrays, for example with the map function:
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map((n) => n * n);
console.log(squaredNumbers); // [1, 4, 9, 16]
const listItems = numbers.map((n) => `<li>${n}</li>`);
console.log(listItems); // ["<li>1</li>", "<li>2</li>", "<li>3</li>", "<li>4</li>"]

/* During this course, we will define all functions using the arrow syntax, however these are other ways:
// Defining a function with a function declaration
function product(a, b) {
    return a * b;
}
const result2 = product(5, 3);
console.log("The result is", result2); // The result is 15

// Defining a function with a function expression
// In this case, there is no need to give the function a name and the definition may reside among the rest of the code:
const average = function (a, b) {
    return (a + b) / 2;
};
const result3 = average(2, 5);
console.log("The result is", result3); // The result is 3.5
*/
