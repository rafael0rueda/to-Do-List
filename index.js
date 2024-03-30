// Click add button -> open where to write new task -> add new task to list

let newTask = document.getElementById("new-task");
let buttonAdd = document.getElementById("button-list");
let listTask = document.getElementById("list-task");

buttonAdd.addEventListener("click", () => {
  let task = document.createElement("li");
  task.classList.add("circle");
  task.appendChild(document.createTextNode(newTask.value));
  listTask.appendChild(task);
  newTask.value = "";
});
