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
console.log(db);
let workShops = [];

const starCountRef = ref(db, "workshop/");
onValue(starCountRef, (snapshot) => {
  workShops = snapshot.val();
  localStorage.setItem("workshops", JSON.stringify(workShops));
});

const workshopForm = document.getElementById("workshopForm");
workshopForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let workshopId = Date.now();
  let pickupService = false;
  let breakdownService = false;
  let name = document.getElementById("ownerName").value;
  let number = document.getElementById("ownerNumber").value;
  // let ownerEmail = document.getElementById("ownerEmail").value;
  let workshopName = document.getElementById("workshopName").value;
  let workshopCountry = document.getElementById("countries").value;
  let workshopState = document.getElementById("state").value;
  let workshopCity = document.getElementById("district").value;
  let workshopAddress = document.getElementById("address").value;
  // let workshopStarted = document.getElementById("started").value;
  let workshopType = document.getElementById("vehicleType").value;
  let openTime = document.getElementById("openTime").value;
  let closeTime = document.getElementById("closeTime").value;
  let GeneralCost = document.getElementById("GeneralCost").value;
  let engineCost = document.getElementById("engineCost").value;
  let electricCost = document.getElementById("electricCost").value;
  let SuspensionCost = document.getElementById("SuspensionCost").value;
  let pickupCheck = document.getElementById("pickupService").checked;
  let breakdownCheck = document.getElementById("breakdownService").checked;
  if (pickupCheck == true) {
    pickupService = true;
  }
  if (breakdownCheck == true) {
    breakdownService = true;
  }
  let workshops = [];
  if (JSON.parse(localStorage.getItem("workshops")) != null) {
    workshops = JSON.parse(localStorage.getItem("workshops"));
  }
  let workshopObj = {
    workshopId,
    name,
    number,
    workshopName,
    workshopCountry,
    workshopState,
    workshopCity,
    workshopAddress,
    // workshopStarted,
    workshopType,
    openTime,
    closeTime,
    GeneralCost,
    engineCost,
    electricCost,
    SuspensionCost,
    pickupService,
    breakdownService,
  };
  workshops.push(workshopObj);
  set(ref(db, "workshop/"), workshops);

  localStorage.setItem("workshops", JSON.stringify(workshops));
  alert("success");
});
