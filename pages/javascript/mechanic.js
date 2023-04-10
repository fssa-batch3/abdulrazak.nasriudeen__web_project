const cus = JSON.parse(localStorage.getItem("oneUser"));
let mechanics = JSON.parse(localStorage.getItem("mechanics"));
let log_cus = mechanics.find(function (e) {
  if (e["user_id"] == cus) {
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

// edit profile
let h_name = document.getElementById("h_name");
h_name.innerText = "Hi!   " + log_cus["name"];

let mechName = document.getElementById("name");
mechName.value = log_cus["name"];

let mechNum = document.getElementById("phone");
mechNum.value = log_cus["number"];

let mechpass = document.getElementById("password");
mechpass.value = log_cus["password"];

const per_mech = document.getElementById("personal_form");
per_mech.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let number = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let specialized = document.getElementById("v_type").value;
  let experience = document.getElementById("E_year").value;
  let profile_pic = document.getElementById("profilepic").value;

  let newObj = {
    name,
    number,
    email,
    password,
    specialized,
    experience,
    profile_pic,
  };
  let updatedObj = Object.assign(log_cus, newObj);
  mechanics[index] = updatedObj;
  localStorage.setItem("mechanics", JSON.stringify(mechanics));
  console.log(updatedObj);
  openprofile("Work_shop", "W_pro");
});
