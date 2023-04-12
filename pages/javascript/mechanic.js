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
