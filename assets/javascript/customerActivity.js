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
function cancelRequest(obj) {
  let check = confirm("Are you Want to cancel this request");
  if (check == true) {
    let index = bookings.indexOf(obj);
    obj["raisedStatus"] = false;
    bookings[index] = obj;
    set(ref(db, "bookings/"), bookings);
    window.location.href = "./cust.html";
    alert("your Request has been cancelled");
  }
}

function liveBookingCard(obj, id) {
  // Create section element
  const section = document.createElement("section");
  section.setAttribute("id", "finding_workshop");

  // Create image element
  const img = document.createElement("img");
  img.setAttribute("src", "../../assets/images/customer/way.gif");
  img.setAttribute("alt", "finding");
  section.appendChild(img);

  // Create heading element
  const heading = document.createElement("h2");
  heading.textContent = "Finding Workshops near you";

  // Create span element with class
  const span = document.createElement("span");
  span.setAttribute("class", "material-symbols-outlined");
  span.textContent = " pin_drop ";

  // Append span to the heading
  heading.appendChild(span);
  section.appendChild(heading);

  // Create div element with class
  const div = document.createElement("div");
  div.setAttribute("class", "timer");

  // Create text node for estimated time
  const timeText = document.createTextNode("estimated Time 1 min");
  div.appendChild(timeText);

  // Create span elements for minutes and seconds
  const minutesSpan = document.createElement("span");
  minutesSpan.setAttribute("id", "minutes");
  minutesSpan.textContent = "00";
  const secondsSpan = document.createElement("span");
  secondsSpan.setAttribute("id", "seconds");
  secondsSpan.textContent = "00";

  // Append minutes and seconds spans to the div
  div.appendChild(minutesSpan);
  div.appendChild(document.createTextNode(" : "));
  div.appendChild(secondsSpan);

  // Append the div to the section
  section.appendChild(div);

  // Create button element
  const button = document.createElement("button");
  button.addEventListener("click", () => {
    cancelRequest(obj);
  });
  button.setAttribute("class", "cancel");
  button.textContent = "Cancel Request";
  section.appendChild(button);
  let appId = document.getElementById(id);
  appId.append(section);
}

let bookings = JSON.parse(localStorage.getItem("bookings"));
let customerId = localStorage.getItem("LoginUser");
let liveArr = bookings.filter((e) => {
  if (e["customer_id"] == customerId) {
    return true;
  }
});
let livObj = liveArr.find((e) => {
  if (e["raisedStatus"] == true) {
    liveBookingCard(e, "activitySection");
    startTimer();
    let cancelButton = document.getElementById("CancelnotfindCard");
    cancelButton.addEventListener("click", () => {
      cancelRequest(e);
    });

    return true;
  }
});

// feed back
