async function getFullData() {
  const toDoData = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const toDoResult = await toDoData.json();
  console.log(toDoResult);

  const userData = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const userResult = await userData.json();
  console.log(userResult);

  Promise.all([toDoResult, userResult]).then((data) => {
    console.log("To Do:", toDoResult);
    console.log("User:", userResult);
  });

  Promise.race([toDoResult, userResult])
    .then((first) => {
      console.log(first);
    })
    .catch((error) => console.log(error));
}

getFullData();
