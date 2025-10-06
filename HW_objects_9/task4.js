const person = {
  firstName: "Bob",
  lastName: "Jameson",
  age: 60,
};

person.email = "bob@gmail.com";

delete person.age;
console.log(person);
