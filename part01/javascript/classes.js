// Defining a "class" and creating instances of it as object in JavaScript.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const adam = new Person("Adam Ondra", 33);
adam.greet(); // Hello, my name is Adam Ondra

const janja = new Person("Janja Garnbret", 27);
janja.greet(); // Hello, my name is Janja Garnbret
