const users = [
    { name: "Dima", email: "dimadenysenko@gmail.com", age: 32 },
    { name: "Vlad", email: "Vlad@gmail.com", age: 36 }
];

for (const { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}