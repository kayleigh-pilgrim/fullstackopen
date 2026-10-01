// We can assign methods to an object by defining protperties that are functons, and use `this` to refer to the object itself.
const arto = {
    name: "Arto Hellas",
    age: 35,
    education: "PhD",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
    doAddition: function (a, b) {
        console.log(a + b);
    },
};
arto.greet(); // Hello, my name is Arto Hellas
arto.doAddition(3, 4); // 7

// Methods can be assigned to objects even after the object has been created.
arto.growOlder = function () {
    this.age += 1;
};
console.log(arto.age); // 35
arto.growOlder();
console.log(arto.age); // 36

// A method can also be called by storing a method reference in a variable, and calling the method through that variable.
const addition = arto.doAddition;
addition(5, 6); // 11

// When we do this with a method that uses `this`, the method loses knowledge of what the original this was
const greet = arto.greet;
greet(); // Hello, my name is undefined
// When setTimeout is calling the method, it is the JavaScript engine that actually calls the method and, at that point, this refers to the global object.
setTimeout(arto.greet, 1000); // Hello, my name is undefined (after 1 second)
// One of the ways by wich the original this can be preserved is by using the `bind` method.
setTimeout(arto.greet.bind(arto), 1000); // Hello, my name is Arto Hellas (after 1 second)
