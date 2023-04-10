let cusArray = JSON.parse(localStorage.getItem("users"));
let cusVehicles = JSON.parse(localStorage.getItem("Customer_vehicles"));
let mechArray = JSON.parse(localStorage.getItem("mechanics"));
let n = cusArray.length;
let m = mechArray.length;
function createCard(ar, id) {
  for (let i = 0; i < ar.length; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "cust");
    let image = document.createElement("img");
    image.setAttribute("src", ar[i]["image"]);
    image.setAttribute("alt", "image");
    card.append(image);
    let num = document.createElement("p");
    num.innerText = "ID : " + ar[i]["user_id"];
    card.append(num);
    let name = document.createElement("p");
    name.innerText = "Name : " + ar[i]["name"];
    card.append(name);
    let anchor = document.createElement("a");
    let icon = document.createElement("i");
    icon.setAttribute("class", "material-symbols-outlined");
    anchor.setAttribute("onclick", "cusDetail(" + ar[i]["user_id"] + ")");
    anchor.innerText = "view";
    icon.innerText = "visibility";
    anchor.append(icon);
    card.append(anchor);
    let app = document.getElementById(id);
    app.append(card);
  }
}
// function to detail page
function cusDetail(id) {
  let card = document.querySelector(".detailCard");
  card.style.display = "block";

  let selectCustomer = cusArray.find((e) => {
    if (id == e["user_id"]) {
      return true;
    }
  });
  let selectVehicle = cusVehicles.find((e) => {
    if (id == e["CustomerId"]) {
      return true;
    }
  });

  const profileImg = document.getElementById("pDetail_img");
  profileImg.setAttribute("src", selectCustomer["image"]);
  const userID = document.getElementById("userId");
  const name = document.getElementById("dName");
  const number = document.getElementById("dNum");
  const email = document.getElementById("dEmail");
  const pass = document.getElementById("dPass");
  const address = document.getElementById("dAddress");
  const city = document.getElementById("dCity");

  // vehicle details
  const vehicleId = document.getElementById("VehicleId");
  const vehicleImage = document.getElementById("vehicleDetail_img");
  const type = document.getElementById("vehicleType");
  const fuel = document.getElementById("fuel");
  const company = document.getElementById("company");
  const model = document.getElementById("model");
  const year = document.getElementById("year");
  const vehicleNum = document.getElementById("vehicleNumber");

  userID.innerText = selectCustomer["user_id"];
  name.innerText = selectCustomer["name"];
  number.innerText = selectCustomer["number"];
  email.innerText = selectCustomer["email"];
  pass.innerText = selectCustomer["password"];
  address.innerText = selectCustomer["address"];
  city.innerText = selectCustomer["city"];
  // alert(id);
  // append value
  vehicleId.innerText = selectVehicle["vehicleId"];
  vehicleImage.setAttribute("src", selectVehicle["vehicleImage"]);
  type.innerText = selectVehicle["vehicleType"];
  fuel.innerText = selectVehicle["fuelType"];
  company.innerText = selectVehicle["VehicleCompany"];
  model.innerText = selectVehicle["vehicleModel"];
  year.innerText = selectVehicle["vehicleYear"];
  vehicleNum.innerText = selectVehicle["vehicleNumber"];
}
// function to back
function exitDetail() {
  let card = document.querySelector(".detailCard");
  card.style.display = "none";
}
