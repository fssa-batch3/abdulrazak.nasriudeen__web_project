const cus = JSON.parse(localStorage.getItem("oneUser"));
let customers = JSON.parse(localStorage.getItem("users"));
const workshops = JSON.parse(localStorage.getItem("workshops"));
let mechanics = JSON.parse(localStorage.getItem("mechanics"));
let services = JSON.parse(localStorage.getItem("mechServices"));

let log_cus = customers.find((e) => {
  if (e["user_id"] === cus) {
    return true;
  }
});
Customer_vehicles = JSON.parse(localStorage.getItem("Customer_vehicles"));
let cus_vehicle = Customer_vehicles.find((e) => {
  if (e["CustomerId"] === cus) {
    return true;
  }
});
function createWorkshop(arr, id) {
  try {
    for (let i = 0; i < arr.length; i++) {
      let card = document.createElement("div");
      card.setAttribute("class", "shopDiv");
      let card_image = document.createElement("img");
      card_image.setAttribute("src", arr[i]["w_img_1"]);
      card_image.setAttribute("alt", "workshopImage");
      card.append(card_image);
      let card_description = document.createElement("div");
      card_description.setAttribute("class", "desc");
      card.append(card_description);
      let card_in_desc = document.createElement("div");

      card_in_desc.setAttribute("class", "desc_top");

      card_description.append(card_in_desc);

      let workShop_title = document.createElement("h3");
      workShop_title.innerText = arr[i]["workshopName"];
      card_in_desc.append(workShop_title);

      let bookMarkButton = document.createElement("button");
      let bookMark = document.createElement("i");
      bookMark.setAttribute("class", "material-symbols-outlined");
      bookMark.innerText = "bookmark";
      bookMarkButton.append(bookMark);
      card_in_desc.append(bookMarkButton);

      //container

      let card_des_container = document.createElement("div");
      card_des_container.setAttribute("class", "descContainer");
      card_description.append(card_des_container);

      //left

      let left_cont = document.createElement("div");
      left_cont.setAttribute("class", "desc_left");
      card_des_container.append(left_cont);
      // ratings
      let ratings = document.createElement("p");
      ratings.innerText = "ratings";

      let ratingStar = document.createElement("p");
      ratingStar.innerText = "⭐⭐⭐⭐⭐";

      left_cont.append(ratings);
      left_cont.append(ratingStar);

      //right

      let right_cont = document.createElement("div");
      right_cont.setAttribute("class", "desc_right");
      card_des_container.append(right_cont);

      //location

      let location_p = document.createElement("p");
      location_p.innerText = arr[i]["workshopCity"];
      right_cont.appendChild(location_p);

      //open or close

      let Open_div = document.createElement("div");
      Open_div.setAttribute("class", "rightO_C");
      right_cont.append(Open_div);

      let open = document.createElement("p");
      open.innerText = "Open";
      Open_div.append(open);

      let slash = document.createElement("p");
      slash.innerText = "/";
      Open_div.append(slash);

      let close = document.createElement("p");
      close.innerText = "Closed";
      Open_div.append(close);

      //bottom

      let cont_bottom = document.createElement("div");
      cont_bottom.setAttribute("class", "desc_bottom");
      card_description.append(cont_bottom);

      //button

      let view = document.createElement("button");
      view.setAttribute(
        "onclick",
        "workshopDetail(" + arr[i]["workshopId"] + ")"
      );
      let call = document.createElement("button");
      let direction = document.createElement("button");

      cont_bottom.append(view);
      cont_bottom.append(call);
      cont_bottom.append(direction);

      let view_icon = document.createElement("i");
      let call_icon = document.createElement("i");
      let direction_icon = document.createElement("i");

      view_icon.setAttribute("class", "material-symbols-outlined");
      call_icon.setAttribute("class", "material-symbols-outlined");
      direction_icon.setAttribute("class", "material-symbols-outlined");

      view_icon.innerHTML = "visibility";
      call_icon.innerHTML = "call";
      direction_icon.innerHTML = "pin_drop";

      let view_p = document.createElement("p");
      let call_p = document.createElement("p");
      let direction_p = document.createElement("a");
      direction_p.setAttribute(
        "href",
        "https://www.google.com/maps/search/" + arr[i]["workshopAddress"]
      );

      view_p.innerText = "view";
      call_p.innerText = "call";
      direction_p.innerText = "direction";

      view.append(view_icon);
      view.append(view_p);

      call.append(call_icon);
      call.append(call_p);

      direction.append(direction_icon);
      direction.append(direction_p);

      let appendOf = document.getElementById(id);
      appendOf.append(card);
    }
  } catch (error) {}
}

createWorkshop(workshops, "nearByShops");

function delUser() {
  let conform = confirm("Would u like to delete your account");
  if (conform == true) {
    let deletedUser = [];
    if (localStorage.getItem("deletedUser") != null) {
      deletedUser = JSON.parse(localStorage.getItem("deletedUser"));
    }
    let index = customers.indexOf(log_cus);
    deletedUser.push(log_cus);
    localStorage.setItem("deletedUser", JSON.stringify(deletedUser));
    customers.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(customers));
    alert("your account deleted successfully");
    window.location.href = "../../index.html";
  }
}

//details of the workshops
function workshopDetail(id) {
  const detailPage = document.querySelector(".workshopDetails");
  detailPage.style.display = "flex";

  let selectWorkshop = workshops.find((e) => {
    if (e["workshopId"] == id) {
      return true;
    }
  });
  let selectmechanic = mechanics.find((e) => {
    if (e["WorkshopId"] == id) {
      return true;
    }
  });
  let selectService = services.find((e) => {
    if (e["workshopId"] == id) {
      return true;
    }
  });
  // console.log(selectService);

  // appending workshop
  const workshopImageDetail = document.getElementById("workshopImageDetail");
  workshopImageDetail.setAttribute("src", selectWorkshop["workshopImage"]);

  const workName = document.getElementById("workName");
  workName.innerText = selectWorkshop["workshopName"];

  const Started = document.getElementById("Started");
  Started.innerText = "Started On " + selectWorkshop["startedOn"];

  const openT = document.getElementById("openT");
  openT.innerText = "Open @ " + selectWorkshop["openTiming"];
  const closeT = document.getElementById("closeT");
  closeT.innerText = "Close @ " + selectWorkshop["closeTiming"];

  const type = document.getElementById("type");
  type.innerText = selectWorkshop["workshopType"];

  const city = document.getElementById("city");
  city.innerText = selectWorkshop["workshopCity"];

  // apending mechanic details
  const mechanicImage = document.getElementById("mechanicImage");
  mechanicImage.setAttribute("src", selectmechanic["profile_pic"]);
  const mechName = document.getElementById("mechName");
  mechName.innerText = selectmechanic["name"];
  const mechPhone = document.getElementById("mechPhone");
  mechPhone.innerText = selectmechanic["number"];
  const mechEmail = document.getElementById("mechEmail");
  mechEmail.innerText = selectmechanic["email"];
  const mechExperience = document.getElementById("mechExperience");
  mechExperience.innerText = selectmechanic["experience"];
  const mechSpl = document.getElementById("mechSpl");
  mechSpl.innerText = selectmechanic["specialized"];

  const direction = document.getElementById("direction");
  direction.setAttribute(
    "href",
    "https://www.google.com/maps/search/" + selectWorkshop["workshopAddress"]
  );

  const generalCost = document.getElementById("generalCost");
  generalCost.innerText = "Cost @ " + selectService["generalCost"];

  const standardCost = document.getElementById("standardCost");
  standardCost.innerText = "Cost @ " + selectService["standardCost"];
  const premeiumCost = document.getElementById("premeiumCost");
  premeiumCost.innerText = "Cost @ " + selectService["premeiumCost"];
  const fullbodyCost = document.getElementById("fullbodyCost");
  fullbodyCost.innerText = "Cost @ " + selectService["fullbodyCost"];
  const brkdownCost = document.getElementById("brkdownCost");
  brkdownCost.innerText = "Cost @ " + selectService["brkdownCost"];
  const bookingMechanicBtn = document.getElementById("bookingMechanicBtn");
  bookingMechanicBtn.setAttribute(
    "onclick",
    "bookMechanic(" + log_cus["user_id"] + "," + selectmechanic["user_id"] + ")"
  );
}

function exitDetail() {
  const detailPage = document.querySelector(".workshopDetails");
  detailPage.style.display = "none";
}

function exitBookMechanic() {
  const book_div = document.getElementById("book_div");
  book_div.style.display = "none";
}

// function toAddService(id) {
//   let added = document.getElementById(id + 1);
//   added.style.display = "none";

//   let add = document.getElementById(id).value;
//   let total = document.getElementById("total");
//   total.value = add;

//   let showed = document.getElementById(id + 2);
//   showed.style.display = "flex";
// }

// function toRemoveService(id) {
//   let showed = document.getElementById(id + 2);
//   showed.style.display = "none";
//   let total = document.getElementById("total").value;
//   let sub = document.getElementById(id).value;
//   let x = total - sub;
//   total.value = x;

//   let remove = document.getElementById(id + 1);
//   remove.style.display = "flex";
// }

// services
const maintanceService = [
  "Oil change",
  "Brake adjustment",
  "Tire pressure check",
  "Battery replacement",
  "Headlight bulb replacement",
  "Taillight bulb replacement",
  "Indicator bulb replacement",
  "Clutch cable adjustment",
  "Throttle cable adjustment",
  "Engine tuning",
  "Engine oil top-up",
  "Coolant top-up",
  "Brake fluid top-up",
  "Power steering fluid top-up",
  "Gearbox oil top-up",
  "Transmission oil top-up",
  "Fuel filter replacement",
  "Fuel tank cleaning",
  "Fuel injector cleaning",
  "Ignition system check",
  "Suspension check",
  "Wheel alignment",
  "Seat height adjustment",
  "Air filter replacement",
  "Spark plug replacement",
];

const repairService = [
  "Brake pad replacement",
  "Brake disc replacement",
  "Fuel pump replacement",
  "Fuel tank replacement",
  "Alternator replacement",
  "Starter motor replacement",
  "Radiator replacement",
  "Coolant hose replacement",
  "Thermostat replacement",
  "Fan belt replacement",
  "Drive belt replacement",
  "Timing belt replacement",
  "Timing chain replacement",
  "Head gasket replacement",
  "Valve adjustment",
  "Transmission rebuild",
  "Brake caliper rebuild",
  "Steering rack replacement",
  "Shock absorber replacement",
  "Suspension bushing replacement",
  "CV joint replacement",
  "Drive shaft replacement",
  "Wheel bearing replacement",
  "Power steering pump replacement",
  "Windshield replacement",
  "Window regulator replacement",
  "Door lock actuator replacement",
  "Oxygen sensor replacement",
  "Mass air flow sensor replacement",
  "Camshaft position sensor replacement",
  "Crankshaft position sensor replacement",
  "Knock sensor replacement",
  "Fuel pressure regulator replacement",
];

const upgrade = [
  "Performance exhaust installation",
  "High-performance air filter installation",
  "Performance ECU tuning",
  "Bigger carburetor installation",
  "Custom suspension installation",
  "Aftermarket shock absorber installation",
  "Big bore kit installation",
  "Performance camshaft installation",
  "Custom paint job",
  "LED lighting upgrade",
  "Aftermarket seat installation",
  "Saddlebag installation",
  "Windshield installation",
  "Engine guard installation",
  "High-performance brake upgrade",
  "Aftermarket wheel installation",
  "Engine swap",
  "Handlebar upgrade",
  "Fender eliminator kit installation",
  "Upgraded chain and sprocket installation",
];

const electric = [
  "Battery replacement",
  "Alternator replacement",
  "Starter motor replacement",
  "Spark plug replacement",
  "Ignition coil replacement",
  "Regulator/Rectifier replacement",
  "Stator replacement",
  "Headlight bulb replacement",
  "Taillight bulb replacement",
  "Indicator bulb replacement",
  "Turn signal switch replacement",
  "Ignition switch replacement",
  "Horn repair or replacement",
  "Fuel gauge repair or replacement",
  "Speedometer repair or replacement",
  "Tachometer repair or replacement",
  "Wiring harness repair or replacement",
  "Fuse replacement",
  "Relay replacement",
  "ECU replacement or programming",
];

//function to append the list of services
function appendList(array, id, cls) {
  for (let i = 0; i < array.length; i++) {
    let container = document.createElement("div");
    container.setAttribute("class", cls);
    let bolt = document.createElement("span");
    bolt.setAttribute("class", "material-symbols-outlined");
    bolt.innerText = "bolt";
    container.append(bolt);
    let service = document.createElement("p");
    service.innerText = array[i];
    container.append(service);
    // let tick = document.createElement("span");
    // tick.setAttribute("class", "material-symbols-outlined");
    // tick.innerText = "add_task";
    // container.append(tick);

    let cont_append = document.querySelector(id);
    cont_append.append(container);
  }
}

const bookingService = document.getElementById("book_select_service");
bookingService.addEventListener("change", (e) => {
  const options = document.querySelector(".serviceSelector");
  const price = document.querySelector("#price");
  while (options.hasChildNodes()) {
    options.firstChild.remove();
  }
  let targetService = e.target.value;
  if (targetService == "maintance") {
    appendList(maintanceService, ".serviceSelector", "selectService");
    // price.innerText = selectService["generalCost"];
  }
  if (targetService == "Repair") {
    appendList(repairService, ".serviceSelector", "selectService");
    // price.innerText = selectService["standardCost"];
  }
  if (targetService == "Upgrade") {
    appendList(upgrade, ".serviceSelector", "selectService");
    // price.innerText = selectService["premeiumCost "];
  }
  if (targetService == "Electrical") {
    appendList(electric, ".serviceSelector", "selectService");
    // price.innerText = selectService["generalCost"];
  }
});

appendList(electric, "#general", "serviceContent");

// function for booking crud ;

function bookMechanic(customerId, mechanicId) {
  const book_div = document.getElementById("book_div");
  book_div.style.display = "flex";
  let mechanics = JSON.parse(localStorage.getItem("mechanics"));
  let customers = JSON.parse(localStorage.getItem("users"));
  let vehicles = JSON.parse(localStorage.getItem("Customer_vehicles"));
  // let selectService = JSON.parse(localStorage.getItem("mechServices"));

  let bookingUser = customers.find((e) => {
    if (customerId == e["user_id"]) {
      return true;
    }
  });

  let customerVehicle = vehicles.find((e) => {
    if (customerId === e["CustomerId"]) {
      return true;
    }
  });

  let bookingMechanic = mechanics.find((e) => {
    if (mechanicId == e["user_id"]) {
      return true;
    }
  });
  const mechBookname = document.getElementById("mechBookname");
  mechBookname.innerText = bookingMechanic["name"];
  const mechSplIn = document.getElementById("mechSplIn");
  mechSplIn.innerText = bookingMechanic["specialized"];
  const mechExp = document.getElementById("mechExp");
  mechExp.innerText = bookingMechanic["experience"];
  const mechNum = document.getElementById("mechNum");
  mechNum.innerText = bookingMechanic["number"];
  const mechanicEmail = document.getElementById("mechanicEmail");
  mechanicEmail.innerText = bookingMechanic["email"];
  const mechImage = document.getElementById("mechImage");
  mechImage.setAttribute("src", bookingMechanic["profile_pic"]);

  const custName = document.getElementById("custName");
  custName.innerText = bookingUser["name"];
  const custNum = document.getElementById("custNum");
  custNum.innerText = bookingUser["number"];
  const custEmail = document.getElementById("custEmail");
  custEmail.innerText = bookingUser["email"];
  const custAddress = document.getElementById("custAddress");
  custAddress.innerText = bookingUser["address"];
  const custCity = document.getElementById("custCity");
  custCity.innerText = bookingUser["city"];

  const vehicleCompany = document.getElementById("vehicleCompany");
  vehicleCompany.innerText = customerVehicle["VehicleCompany"];
  const vehicleModel = document.getElementById("vehicleModel");
  vehicleModel.innerText = customerVehicle["vehicleModel"];
  const vehicleYear = document.getElementById("vehicleYear");
  vehicleYear.innerText = customerVehicle["vehicleYear"];
  const vehicleNumber = document.getElementById("vehicleNumber");
  vehicleNumber.innerText = customerVehicle["vehicleNumber"];
  const vehiclefuel = document.getElementById("vehiclefuel");
  vehiclefuel.innerText = customerVehicle["fuelType"];

  const conBtn = document.getElementById("confirmBtn");
  conBtn.setAttribute(
    "onclick",
    "confirmBookingBtn(" + customerId + "," + mechanicId + ")"
  );
}
// function to confirm button
function confirmBookingBtn(custId, servId) {
  let book_select_service = document.getElementById("book_select_service");
  let type = book_select_service.value;

  confirmBookMech(custId, servId, type);
}

// function to raise request
function confirmBookMech(cusId, mechId, type) {
  //confirming booking
  let con = confirm("Are you sure to book mechanic");
  if (con == true) {
    const serviceArr = JSON.parse(localStorage.getItem("mechServices"));
    // finding booked service from customer
    const bookedSer = serviceArr.find((e) => {
      if (e["mechanicId"] == mechId) {
        return true;
      }
    });
    let customerId = cusId;
    let mechanicId = mechId;
    let bookingId = Date.now();
    let cusActivityId = bookingId + 1;
    let date = new Date();
    let request = true;
    console.log(bookedSer);

    let cost = 0;
    // checking and assigning the cost of service
    if (type == "maintance") {
      cost = bookedSer["generalCost"];
    } else if (type == "Repair") {
      cost = bookedSer["standardCost"];
    } else if (type == "Upgrade") {
      cost = bookedSer["premeiumCost"];
    } else if (type == "Electrical") {
      cost = bookedSer["generalCost"];
    }
    //assigning as an object
    let booking = {
      customerId,
      mechanicId,
      bookingId,
      date,
      cost,
      type,
      request,
      cusActivityId,
    };

    // pushing into activity array
    let bookings = [];
    if (JSON.parse(localStorage.getItem("bookings")) != null) {
      bookings = JSON.parse(localStorage.getItem("bookings"));
    }
    let custActivity = {
      bookingId: booking["bookingId"],
      customerId: booking["customerId"],
    };
    bookings.push(booking);
    let customerActivity = {};
    customerActivity["activity"] = [];
    customerActivity["notification"] = [];

    if (JSON.parse(localStorage.getItem("customerActivity")) != null) {
      customerActivity = JSON.parse(localStorage.getItem("customerActivity"));
    }
    customerActivity["activity"].push(custActivity);

    localStorage.setItem("bookings", JSON.stringify(bookings));
    localStorage.setItem("customerActivity", JSON.stringify(customerActivity));

    // sending request to the mechanic
    mechRequest(booking);
    bookingSts(booking);
  } else {
    return;
  }
}

//function to accept request
function mechRequest(obj) {
  // let mechanics = JSON.parse(localStorage.getItem("mechanics"));
  // let raisedmech = mechanics.find((e) => {
  //   if (e["user_id"] == obj["mechanicId"]) {
  //     return true;
  //   }
  // });
  let notification = {
    notificationId: obj["cusActivityId"] + 1,
    notificationType: "booking",
    raisedStatus: true,
    raisedMechId: obj["mechanicId"],
    raisedBookingId: obj["bookingId"],
    notificationSeen: false,
    acceptBooking: false,
  };
  let mechActivity = {
    notification: [],
    activity: [],
  };

  if (JSON.parse(localStorage.getItem("mechActivity")) != null) {
    mechActivity = JSON.parse(localStorage.getItem("mechActivity"));
  }
  // };
  // to notify mechanic about the raised request

  mechActivity.notification.push(notification);
  localStorage.setItem("mechActivity", JSON.stringify(mechActivity));
}

// dom for booking status
function bookingSts(obj) {
  const bookingStatus = document.querySelector(".bookingStatus");
  bookingStatus.style.display = "flex";
  const book_div = document.getElementById("book_div");
  book_div.style.display = "none";
  const mechs = JSON.parse(localStorage.getItem("mechanics"));
  const vehicles = JSON.parse(localStorage.getItem("Customer_vehicles"));
  let bookMech = mechs.find((e) => {
    if (e["user_id"] == obj["mechanicId"]) {
      return true;
    }
  });
  let bookVehicle = vehicles.find((e) => {
    if (e["CustomerId"] == obj["customerId"]) {
      return true;
    }
  });

  let bookingContainer = document.createElement("div");
  bookingContainer.setAttribute("class", "bookingStatus-container");
  let bookingMechDetails = document.createElement("div");
  bookingMechDetails.setAttribute("class", "mechBooking");
  bookingContainer.append(bookingMechDetails);
  let mechImg = document.createElement("img");
  mechImg.setAttribute("src", bookMech["img"]);
  mechImg.setAttribute("alt", "mechanic img");
  bookingMechDetails.append(mechImg);

  let mechName = document.createElement("p");
  mechName.innerText = bookMech["name"];
  bookingMechDetails.append(mechName);
  let vehicleName = document.createElement("p");
  vehicleName.innerText =
    bookVehicle["vehicleModel"] + "," + bookVehicle["VehicleCompany"];
  bookingMechDetails.append(vehicleName);
  let service = document.createElement("p");
  service.innerText = "Service: " + obj["type"];
  bookingMechDetails.append(service);
  let serviceCost = document.createElement("p");
  serviceCost.innerText = "Cost: " + obj["cost"];
  bookingMechDetails.append(serviceCost);

  // cancel button
  let cancel = document.createElement("button");
  cancel.innerText = "Cancel Request";
  bookingMechDetails.append(cancel);

  // appending to outerdiv

  bookingStatus.append(bookingContainer);
}
