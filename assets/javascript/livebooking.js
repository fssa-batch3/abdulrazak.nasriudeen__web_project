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

const liveBooking = document.getElementById("liveBooking");
liveBooking.addEventListener("submit", (e) => {
  e.preventDefault();
  let bookings = [];
  if (JSON.parse(localStorage.getItem("bookings")) != null) {
    bookings = JSON.parse(localStorage.getItem("bookings"));
  }
  let booking_id = Date.now();
  let customer_id = localStorage.getItem("LogUser");
  let raisedStatus = true;
  let acceptBooking = false;
  let country = document.getElementById("countries").value;
  let state = document.getElementById("state").value;
  let city = document.getElementById("district").value;
  let address = document.getElementById("address").value;
  let vehicleType = document.getElementById("vehicleType").value;
  let vehicleCompany = document.getElementById("vehicleCompany").value;
  let vehicleModel = document.getElementById("vehicleModel").value;
  let vehicleNumber = document.getElementById("vehicleNumber").value;
  let vehicleProblem = document.getElementById("vehicleProblem").value;
  let bookObj = {
    booking_id,
    customer_id,
    raisedStatus,
    acceptBooking,
    country,
    state,
    city,
    address,
    vehicleType,
    vehicleCompany,
    vehicleModel,
    vehicleNumber,
    vehicleProblem,
  };
  bookings.push(bookObj);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  set(ref(db, "bookings/"), bookings);

  // let checkBookingCustomerArr = bookings.find((e) => {
  //   if (e["customer_id"] == customer_id && e["raisedStatus"] == true) {
  //     return true;
  //   }
  // });
  // //   let checkBookingStatus = checkBookingCustomerArr.find((e) => {
  // //     if (e["raisedStatus"] == true) {
  // //       return true;
  // //     }
  // //   });
  // if (checkBookingCustomerArr == null || undefined) {
  //   bookings.push(bookObj);
  //   localStorage.setItem("bookings", JSON.stringify(bookings));
  // } else {
  //   alert("your already raised a request please cancel that to raise another");
  // }
  // console.log(checkBookingCustomerArr);
  //   console.log(checkBookingStatus);
});
