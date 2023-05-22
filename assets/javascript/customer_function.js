const loggedUser = localStorage.getItem("LogUser");
let users = JSON.parse(localStorage.getItem("users"));
let loggedUserObj = users.find((e) => {
  if (e["user_id"] == loggedUser) {
    return true;
  }
});

let showName = document.getElementById("userName");
showName.innerText = "Hi..!      " + loggedUserObj["name"];
