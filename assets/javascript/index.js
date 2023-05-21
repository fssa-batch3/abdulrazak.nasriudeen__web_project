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
const starUserRef = ref(db, "users/");
onValue(starUserRef, (snapshot) => {
  let users = snapshot.val();
  localStorage.setItem("users", JSON.stringify(users));
});
const starCountRef = ref(db, "workshop/");
onValue(starCountRef, (snapshot) => {
  workShops = snapshot.val();
  localStorage.setItem("workshops", JSON.stringify(workShops));
});

const signUpForm = document.getElementById("signUpForm");
const otpForm = document.getElementById("otpVerify");
const loginForm = document.getElementById("loginForm");
let users = [];
if (JSON.parse(localStorage.getItem("users")) != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

const signUpButton = document.getElementById("signButton");
signUpButton.addEventListener("click", () => {
  signUpForm.style.display = "flex";
});

let oneUser = {};

// signUp form
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let user_id = Date.now();
  let otp = generateOTP();

  if (password != confirmPassword) {
    // Notify.error("Password doesnot match");
    alert("password doesn't match");
    return;
  } else {
    let obj = {
      otp,
      user_id,
      name,
      number,
      password,
    };
    let check = checkUser(obj);
    if (check != true) {
      //   users.push(obj);
      //   localStorage.setItem("users", JSON.stringify(users));
      //   set(ref(db, "users/"), users);
      oneUser = obj;
      console.log(oneUser);
      alert("Yor sign Up OTP is" + obj["otp"]);
      let otpNumber = document.getElementById("otpNumber");
      otpNumber.innerText = oneUser["number"];

      openDiv("#otpVerify", "#signUpForm");
    } else {
      return;
    }
  }
});

const signLogOut = document.getElementById("signLogOut");
signLogOut.addEventListener("click", () => {
  signUpForm.style.display = "none";
});

// otp
otpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let otp = document.getElementById("otpValue").value;
  if (otp == oneUser["otp"]) {
    alert("Phone number verified ");
    users.push(oneUser);

    set(ref(db, "users/"), users);

    alert("Account created try to login");
    openDiv("#loginForm", "#otpVerify");
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault;
  let logNumber = document.getElementById("loginNumber").value;
  let logPassword = document.getElementById("loginPassword").value;
});
