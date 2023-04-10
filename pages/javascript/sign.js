const sign_in_btn = document.getElementById("sign-in-btn");
const sign_in_btn2 = document.getElementById("sign-in-btn2");
const sign_up_btn = document.getElementById("sign-up-btn");
const sign_up_btn2 = document.getElementById("sign-up-btn2");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode2");
});

//name validation
let signUpName = document.getElementById("name");
signUpName.addEventListener("change", () => {
  let check = signUpName.value;
  let alp = hasnotAlphabet(check);
  if (alp === true) {
    Notify.error("please enter name without a special character or number ");
  }
  if (check.length > 15) {
    Notify.error("not more than 15 characters ");
  }
});
//number validation
let signUpNum = document.getElementById("number");
signUpNum.addEventListener("change", () => {
  let check = signUpNum.value;
  let number = hasNumber(check);
  if (check.length != 10) {
    Notify.error("number should be in  10 characters");
  }
  if (number === false) {
    Notify.error("Number can only accepted");
  }
});

//password validation
let signUpPass = document.getElementById("password");
signUpPass.addEventListener("change", () => {
  let check = signUpPass.value;
  if (check.length != 6) {
    Notify.error("password should be contain only 6 characters");
  }
});
//login validation
//number validation
let loginNum = document.getElementById("log_num");
loginNum.addEventListener("change", () => {
  let check = loginNum.value;
  let number = hasNumber(check);
  if (check.length != 10) {
    Notify.error("number should be in  10 characters");
  }
  if (number === false) {
    Notify.error("Number can only accepted");
  }
});

//password validation
let loginPass = document.getElementById("log_pass");
loginPass.addEventListener("change", () => {
  let check = loginPass.value;
  if (check.length != 6) {
    Notify.error("password should be contain only 6 characters");
  }
});

// sign_up
const sign_up = document.getElementById("sign_up_form");
sign_up.addEventListener("submit", (e) => {
  e.preventDefault();
  const user_id = Date.now();
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const password = document.getElementById("password").value;
  const c_password = document.getElementById("confirmPassword").value;
  const customerRadio = document.getElementById("customerRadio").checked;
  const mechanicRadio = document.getElementById("mechanicRadio").checked;

  // checking password
  if (password != c_password) {
    Notify.error("confirm password is incorrect please check");

    return false;
  }
  const user = { user_id, name, number, password };
  let sign = checkUser(user);

  if (customerRadio === true) {
    user.check = "customer";
    user.vehicle_id = user_id + 2;
    createUser(user, sign);
  } else if (mechanicRadio === true) {
    user.check = "mechanic";
    user.WorkshopId = user_id + 2;
    user.serviceId = user_id + 4;
    createMechanic(user, sign);
  }
});

//login
const login = document.getElementById("login_form");
login.addEventListener("submit", (e) => {
  e.preventDefault();
  const num = document.getElementById("log_num").value;
  const pass = document.getElementById("log_pass").value;
  let admin = adminLogin(num, pass);
  if (admin == false) {
    read(num, pass);
  }
  //
  //
});
