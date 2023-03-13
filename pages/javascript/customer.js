const cus = JSON.parse(localStorage.getItem("oneUser"));
let customers = JSON.parse(localStorage.getItem("users"));
let log_cus = customers.find(function (e) {
  if (e["u_id"] == cus) {
    return true;
  }
});
let index = customers.indexOf(log_cus);
function openprofile(serviceName, bId) {
  var ser_cont, i, button;
  ser_cont = document.getElementsByClassName("container");
  for (i = 0; i < ser_cont.length; i++) {
    ser_cont[i].style.display = "none";
  }
  button = document.getElementsByClassName("button");
  for (i = 0; i < button.length; i++) {
    button[i].style.backgroundColor = "";
    button[i].style.color = "black";
  }
  document.getElementById(serviceName).style.display = "flex";
  document.getElementById(bId).style.backgroundColor = "black";
  document.getElementById(bId).style.color = "white";
  // document.getElementById(bId).style.color = "black";
}
