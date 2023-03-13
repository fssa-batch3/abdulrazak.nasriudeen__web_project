const cus = JSON.parse(localStorage.getItem("oneUser"));
let mechanics = JSON.parse(localStorage.getItem("mechanics"));
let log_cus = mechanics.find(function (e) {
  if (e["u_id"] == cus) {
    return true;
  }
});
let index = mechanics.indexOf(log_cus);
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
function openProServices(id) {
  let tag = document.getElementsByClassName("serviceList");
  for (let i = 0; i < tag.length; i++) {
    tag[i].style.display = "none";
  }
  document.getElementById(id).style.display = "flex";
}
