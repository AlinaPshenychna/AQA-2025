class ToDoData {
  static async getToDo() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      if (!response.ok) {
        console.log("Error");
      }
      const data = await response.json();
      console.log("Task4", data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
}

class UserData {
  static async getToDo() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      if (!response.ok) {
        console.log("Error");
      }
      const data = await response.json();
      console.log("Task4", data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
}

async function getFullData() {
  try {
    const [todo, user] = await Promise.all([
      ToDoService.getToDo(),
      UserService.getUser(),
    ]);
    console.log("ToDo:", todo);
    console.log("User:", user);

    const first = await Promise.race([
      ToDoService.getToDo(),
      UserService.getUser(),
    ]);
    console.log("First", first);
  } catch (error) {
    console.log("Error", error.message);
  }
}

getFullData();
