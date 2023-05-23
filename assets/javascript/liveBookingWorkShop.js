// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  set,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD2heEjfk-ZZFgHKLbyQ1rCaXKAAQi8Qm4",
  authDomain: "reparo-c2273.firebaseapp.com",
  databaseURL: "https://reparo-c2273-default-rtdb.firebaseio.com",
  projectId: "reparo-c2273",
  storageBucket: "reparo-c2273.appspot.com",
  messagingSenderId: "199284904929",
  appId: "1:199284904929:web:e6bda7e3b41bb3e079f8a0",
  measurementId: "G-B8QVYWWTE9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let db = getDatabase();
const starCountRef = ref(db, "bookings/");
onValue(starCountRef, (snapshot) => {
  let bookings = snapshot.val();
  localStorage.setItem("bookings", JSON.stringify(bookings));
});
let bookings = JSON.parse(localStorage.getItem("bookings"));
let workshops = JSON.parse(localStorage.getItem("workshops"));
let users = JSON.parse(localStorage.getItem("users"));

let loggedWorkShopId = localStorage.getItem("LogUser");
let loggedWorkShop = workshops.find((e) => {
  if (loggedWorkShopId == e["workShopID"]) {
    return true;
  }
});

let near = bookings.filter((e) => {
  if (e["city"] == loggedWorkShop["workshopCity"]) {
    return true;
  }
});

console.log(near);
for (let i = 0; i < near.length; i++) {
  let arr = near[i]["rejectWorkshop"];
  let checkReject = arr.find((e) => {
    if (e == loggedWorkShopId) {
      return true;
    }
  });
  let liveUser = users.find((e) => {
    if (e["user_id"] == near[i]["customer_id"]) {
      return true;
    }
  });
  if (checkReject == undefined || arr == undefined) {
    alert("check");

    if (near[i]["raisedStatus"] == true && near[i]["acceptBooking"] == false) {
      bookingWorkshopDiv(near[i], liveUser, ".workshopSection", true);
    }
  } else {
    bookingWorkshopDiv(near[i], liveUser, ".workshopSection", false);
  }
}
console.log(loggedWorkShop);

function rejectBooking(id) {
  let check = confirm("Are you want to reject this request");
  if (check == true) {
    let bookObj = bookings.find((e) => {
      if (id == e["booking_id"]) {
        return true;
      }
    });
    let index = bookings.indexOf(bookObj);
    if (bookObj["rejectWorkshop"] == undefined || null) {
      bookObj["rejectWorkshop"] = [];
      bookObj["rejectWorkshop"].push(loggedWorkShopId);
    } else {
      bookObj["rejectWorkshop"].push(loggedWorkShopId);
    }
    bookings[index] = bookObj;
    set(ref(db, "bookings/"), bookings);
    location.reload();
  } else {
    return;
  }
}
function bookingWorkshopDiv(obj, customerObj, classID, status) {
  // Create the main container element
  const bookingCard = document.createElement("div");
  bookingCard.classList.add("bookingCard");

  // Create the heading element
  const heading = document.createElement("h2");
  heading.textContent = "Customer is waiting for you !";

  // Create the span element for the symbol
  const symbolSpan = document.createElement("span");
  symbolSpan.classList.add("material-symbols-outlined");
  symbolSpan.textContent = "settings_input_antenna";

  // Append the symbol span to the heading
  heading.appendChild(symbolSpan);

  // Append the heading to the booking card
  bookingCard.appendChild(heading);

  // Create the bookingMid container
  const bookingMid = document.createElement("div");
  bookingMid.classList.add("bookingMid");

  // Create the output containers
  const outputContainer1 = document.createElement("div");
  outputContainer1.classList.add("outputCont");
  const outputContainer2 = document.createElement("div");
  outputContainer2.classList.add("outputCont");
  const outputContainer3 = document.createElement("div");
  outputContainer3.classList.add("outputContainer");

  // Create the headings for each output container
  const heading1 = document.createElement("h4");
  heading1.textContent = "Name : " + customerObj["name"];

  const heading2 = document.createElement("h5");
  heading2.textContent =
    "Vehicle : " +
    obj["vehicleModel"] +
    "," +
    obj["vehicleCompany"] +
    "," +
    obj["vehicleType"];

  const heading3 = document.createElement("h4");
  heading3.textContent = "Problem : " + obj["vehicleProblem"];

  // Append the headings to the output containers
  outputContainer1.appendChild(heading1);
  outputContainer2.appendChild(heading2);
  outputContainer3.appendChild(heading3);

  // Append the output containers to the bookingMid container
  bookingMid.appendChild(outputContainer1);
  bookingMid.appendChild(outputContainer2);
  bookingMid.appendChild(outputContainer3);

  bookingCard.append(bookingMid);

  // Create the bookingBottom container
  const bookingBottom = document.createElement("div");
  bookingBottom.classList.add("bookingBottom");

  // Create the button containers
  const buttonContainer1 = document.createElement("div");
  buttonContainer1.classList.add("buttonContainer");
  const buttonContainer2 = document.createElement("div");
  buttonContainer2.classList.add("buttonContainer");

  // Create the Accept and Reject buttons
  const acceptButton = document.createElement("button");
  acceptButton.classList.add("accept");
  acceptButton.textContent = "Accept";

  const rejectButton = document.createElement("button");
  rejectButton.addEventListener("click", () => {
    rejectBooking(obj["booking_id"]);
  });
  rejectButton.classList.add("reject");
  rejectButton.textContent = "Reject";

  // Append the Accept and Reject buttons to the first button container
  buttonContainer1.appendChild(acceptButton);
  buttonContainer1.appendChild(rejectButton);

  // Create the Location button
  const locationButton = document.createElement("button");
  locationButton.classList.add("direction");

  // Create the span element for the symbol in the Location button
  const locationSymbolSpan = document.createElement("span");
  locationSymbolSpan.classList.add("material-symbols-outlined");
  locationSymbolSpan.innerText = "near_me";

  // Append the symbol span to the Location button
  locationButton.appendChild(locationSymbolSpan);
  locationButton.textContent = "Location";

  // Append the Location button to the second button container
  buttonContainer2.appendChild(locationButton);

  // Append the button containers to the bookingBottom container
  bookingBottom.appendChild(buttonContainer1);
  bookingBottom.appendChild(buttonContainer2);
  if (status == true) {
    bookingCard.append(bookingBottom);
  } else {
    let cancledBooking = document.createElement("div");
    cancledBooking.classList.add("cancledBooking");
    cancledBooking.textContent = "This request has been rejected";
    bookingCard.append(cancledBooking);
  }

  let appendDiv = document.querySelector(classID);

  // Append all elements to the document body or a target container element
  appendDiv.appendChild(bookingCard);
}
