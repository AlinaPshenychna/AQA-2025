// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні
//  властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи
//  масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
  {
    name: "James",
    email: "mio@gmail.com",
    age: 40,
  },
  {
    name: "Mick",
    email: "miolord@gmail.com",
    age: 46,
  },
  {
    name: "Jeck",
    email: "jeck@gmail.com",
    age: 56,
  },
];

for (let { name, email, age } of users) {
  console.log(`Name: ${name}, email: ${email}, age: ${age}`);
}
