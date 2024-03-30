// let checkboxes = document.getElementById("checkboxes");
// let buttonAdd = document.getElementById("button-add");
// let listTask = document.getElementById("list-task");
// let add = document.getElementById("add");

// Click add button -> open where to write new task -> add new task to list

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    console.log(username.innerText);
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value} and password of ${password.value}`
    );

    username.value = "";
    password.value = "";
  }
});

// var button = document.getElementById("my-button");
// button.addEventListener("click", changeColor);

// function changeColor() {
//   document.getElementById("my-div").style.backgroundColor = "green";
// }
