function getToDo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => {
      if (!response.ok) {
        console.log("Error");
        return;
      }
      return response.json();
    }
  );
  // .then((data) => console.log(data))
  // .catch((error) => {
  //   console.log(error);
  // });
}

getToDo();

function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (response) => {
      if (!response.ok) {
        console.log("Error");
        return;
      } else {
        return response.json();
      }
    }
  );
}

getUser()
  .then((todo) => console.log(todo))
  .catch((error) => console.log(error));

Promise.all([getToDo(), getUser()])
  .then((data) => {
    const [todo, user] = data;
    console.log("Todo:", todo);
    console.log("User:", user);
  })
  .catch((error) => console.log(error));

Promise.race([getToDo(), getUser()])
  .then((first) => {
    console.log(first);
  })
  .catch((error) => console.log(error));
