const cus = JSON.parse(localStorage.getItem("oneUser"));
let mechanics = JSON.parse(localStorage.getItem("mechanics"));
let log_cus = mechanics.find(function (e) {
  if (e["user_id"] == cus) {
    return true;
  }
});
let workshops = JSON.parse(localStorage.getItem("workshops"));
let mechWorkshop = workshops.find((e) => {
  if (e["mechanicId"] === cus) {
    return true;
  }
});
let services = JSON.parse(localStorage.getItem("mechServices"));
let oneService = services.find((e) => {
  if (e["workshopId"] == mechWorkshop["workshopId"]) {
    return true;
  }
});

let index = mechanics.indexOf(log_cus);
let mechWorkshopIndex = workshops.indexOf(mechWorkshop);
let serviceIndex = workshops.indexOf(oneService);

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
mechNum.setAttribute("disabled", true);

let mechpass = document.getElementById("password");
mechpass.value = log_cus["password"];

const per_mech = document.getElementById("personal_form");
per_mech.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let specialized = document.getElementById("v_type").value;
  let experience = document.getElementById("E_year").value;
  let profile_pic = document.getElementById("profilepic").value;

  let newObj = {
    name,
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

// Mechqnic Workshop
const mechWorkForm = document.getElementById("workShopForm");
mechWorkForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let workshopName = document.getElementById("workshopName").value;
  let workshopNumber = document.getElementById("workshopNumber").value;
  let workshopAddress = document.getElementById("workshopAddress").value;
  let workshopCity = document.getElementById("workshopCity").value;
  let openTiming_hour = document.getElementById("openTiming_hour").value;
  let openTiming_min = document.getElementById("openTiming_min").value;
  let openTiming_period = document.getElementById("openTiming_period").value;
  let closeTiming_hour = document.getElementById("closeTiming_hour").value;
  let closeTiming_min = document.getElementById("closeTiming_min").value;
  let closeTiming_period = document.getElementById("closeTiming_period").value;
  let workshopType = document.getElementById("workshopType").value;
  let startedOn = document.getElementById("startedOn").value;
  let workshopImage = document.getElementById("workshopImage").value;
  let openTiming =
    openTiming_hour + ":" + openTiming_min + ":" + openTiming_period;
  let closeTiming =
    closeTiming_hour + ":" + closeTiming_min + ":" + closeTiming_period;

  // create obj
  let shopObject = {
    workshopName,
    workshopNumber,
    workshopAddress,
    workshopCity,
    workshopType,
    workshopImage,
    openTiming,
    closeTiming,
    startedOn,
  };

  // assign to existing object
  let update = Object.assign(mechWorkshop, shopObject);
  workshops[mechWorkshopIndex] = update;
  localStorage.setItem("workshops", JSON.stringify(workshops));
  openprofile("Services", "s_pro");
  Notify.success("Updated workshop successfully ");
});

// mechanic services
const serviceform = document.getElementById("service");
serviceform.addEventListener("submit", (e) => {
  e.preventDefault();
  let generalCost = document.getElementById("generalCost").value;
  let standardCost = document.getElementById("standardCost").value;
  let premeiumCost = document.getElementById("premeiumCost").value;
  let fullbodyCost = document.getElementById("fullbodyCost").value;
  let brkdownCost = document.getElementById("brkdownCost").value;

  let ser_obj = {
    generalCost,
    standardCost,
    premeiumCost,
    fullbodyCost,
    brkdownCost,
  };

  let update = Object.assign(oneService, ser_obj);
  services[serviceIndex] = update;

  localStorage.setItem("mechServices", JSON.stringify(services));
  alert("updated Service information");
  window.location.href = "./showMechProfile.html";
});

// validation
let valiName = document.getElementById("name");
valiName.addEventListener("change", (e) => {
  e = valiName.value;
  let check = hasnotAlphabet(e);
  if (check === true) {
    Notify.error("Only Alphabets are acceptable ");
  }
});

let valiPassword = document.getElementById("password");
valiPassword.addEventListener("change", (e) => {
  e = valiPassword.value;
  let check = hasNumber(e);
  if (check === false || e.length != 6) {
    Notify.error("password should be 6 digits and only in numbers");
  }
});
//Workshop validation
let workshopName = document.getElementById("workshopName");
workshopName.addEventListener("change", (e) => {
  e = workshopName.value;
  let check = hasnotAlphabet(e);
  if (check === true) {
    Notify.error("Only Alphabets are acceptable ");
  }
});
// number
let workshopNumber = document.getElementById("workshopNumber");
workshopNumber.addEventListener("change", (e) => {
  e = workshopNumber.value;
  let check = hasNumber(e);
  if (check === false) {
    Notify.error("Only number are acceptable ");
  }
  if (e.length <= 14 || e.length >= 10) {
    Notify.error("Only 10 to 15 digits");
  }
});
//timing
let open1 = document.getElementById("openTiming_hour");
open1.addEventListener("change", (e) => {
  e = open1.value;
  let check = hasNumber(e);
  if (check == false || e.length > 2) {
    Notify.error("Only hours should be mentioned within 2 digits");
  }
  if (e > 12) {
    Notify.error("hours should not be more than 12 ");
  }
});
let open2 = document.getElementById("openTiming_min");
open2.addEventListener("change", (e) => {
  e = open2.value;
  let check = hasNumber(e);
  if (check == false || e.length > 2) {
    Notify.error("Only hours should be mentioned within 2 digits");
  }
  if (e > 60) {
    Notify.error("not more than 60 ");
  }
});

let close1 = document.getElementById("closeTiming_hour");
close1.addEventListener("change", (e) => {
  e = close1.value;
  let check = hasNumber(e);
  if (check == false || e.length > 2) {
    Notify.error("Only hours should be mentioned within 2 digits");
  }
  if (e > 12) {
    Notify.error("hours should not be more than 12 ");
    return;
  }
});
let close2 = document.getElementById("closeTiming_min");
close2.addEventListener("change", (e) => {
  e = close2.value;
  let check = hasNumber(e);
  if (check == false || e.length > 2) {
    Notify.error("Only hours should be mentioned within 2 digits");
  }
  if (e > 60) {
    Notify.error("not more than 60 ");
  }
});
//  year
let workshopyear = document.getElementById("startedOn");
workshopyear.addEventListener("change", (e) => {
  e = workshopyear.value;
  let check = hasNumber(e);
  let dte = new Date();
  let year = dte.getFullYear();
  if (check == false) {
    Notify.error("Only number are acceptable ");
  }
  if (e.length != 4) {
    Notify.error("year should be in 4 digits");
  }
  if (e > year) {
    Notify.error("Year can't be in future");
  }
});

function validatePrice(x, y) {
  y = document.getElementById(x);
  y.addEventListener("change", (e) => {
    e = y.value;
    let check = hasNumber(e);
    if (check === false) {
      Notify.error("price should not be in alphabets or special characters");
    }
    if (e.length > 6) {
      Notify.error("amount is not more than 100000");
    }
  });
}

validatePrice("generalCost", "generalCost");
validatePrice("standardCost", "standardCost");
validatePrice("premeiumCost", "premeiumCost");
validatePrice("fullbodyCost", "fullbodyCost");
validatePrice("brkdownCost", "brkdownCost");

function delUser() {
  let conform = confirm("Would u like to delete your account");
  if (conform === true) {
    let deletedUser = [];
    if (localStorage.getItem("deletedUser") != null) {
      deletedUser = JSON.parse(localStorage.getItem("deletedUser"));
    }
    deletedUser.push(log_cus);
    localStorage.setItem("deletedUser", JSON.stringify(deletedUser));
    mechanics.splice(index, 1);
    localStorage.setItem("mechanics", JSON.stringify(mechanics));
    window.location.href = "../../index.html";
  }
}
