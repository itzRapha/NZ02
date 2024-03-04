//object literals - way to define and create objects

const person = {
    firstName: " Dylan",
    lastName: "Doe",
    age: 25,
    hobbies: ["reading","coding","napping"],

    greet: function() {
        console.log("Hello, my name is"+person.firstName);
    }

}

console.log(person.firstName);
console.log(person.age);

//modify name
person.lastName = "S mith";
console.log(person.lastName);

//accessobject  methods
person.greet();

// Add more properties
person.nationality = "American";
console.log(person.nationality);

// Add more methods
person.introduce = function () {
	console.log("I am " + person.firstName + " " + person.lastName);
};
person.introduce();

// Nesting object
const address = {
	street: "123 Main St",
	city: "New York",
	country: "USA",
};

person.address = address;
console.log(person.address.city);

// destructuring to extract properties
const { firstName, lastName, age } = person;
console.log(firstName);











