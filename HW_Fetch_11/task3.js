async function getFullData() {
  try {
    const [toDoResponse, userResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      fetch("https://jsonplaceholder.typicode.com/users/1"),
    ]);
    const toDoResult = await toDoResponse.json();
    const userResult = await userResponse.json();
    console.log("To Do:", toDoResult);
    console.log("User:", userResult);

    const firstResponse = await Promise.race([
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      fetch("https://jsonplaceholder.typicode.com/users/1"),
    ]);
    const firstResult = await firstResponse.json();
    console.log(firstResult);
  } catch (error) {
    console.log(error);
  }
}

getFullData();
