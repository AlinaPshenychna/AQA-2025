async function getToDo(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const todo = await response.json();
  return todo;
}

async function getUser(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();
  return user;
}

async function getFullData() {
  try {
    const [todo, user] = await Promise.all([getToDo(1), getUser(1)]);
    console.log("To Do task 3:", todo);
    console.log("User task 3:", user);

    const first = await Promise.race([getToDo(1), getUser(1)]);
    console.log(first);
  } catch (error) {
    console.log(error);
  }
}

getFullData();
