const person = { firstName: "Dima", lastName: "Denysenko", age: 32 };
person.email = "dimadenysenko@gmail.com";

delete person.age;
console.log(person);
