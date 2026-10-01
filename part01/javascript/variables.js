// Constants can't change later in the code
const x = 1;
// Let defines a regular variable that can change later in the code
let y = 5;

console.log(x, y); // 1 5
y += 10;
console.log(x, y); // 1 15
y = "sometext"; // a variables data type can change
console.log(x, y); // 1 sometext
x = 4; // error
