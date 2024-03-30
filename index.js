let newTask = document.getElementById("new-task");
let buttonAdd = document.getElementById("button-list");
let listTask = document.getElementById("list-task");

// Add item to the list
buttonAdd.addEventListener("click", () => {
  let task = document.createElement("li");
  task.classList.add("circle");
  task.appendChild(document.createTextNode(newTask.value));
  listTask.appendChild(task);
  newTask.value = "";
});

// Remove item from the list
listTask.addEventListener("click", (e) => {
  listTask.removeChild(e.target);
});
