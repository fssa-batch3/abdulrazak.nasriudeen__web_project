// function used to apped the array of elements into the service sectin
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

// function for open div
function openDiv(openDiv, closeDiv) {
  let div1 = document.querySelector(openDiv);
  let div2 = document.querySelector(closeDiv);
  div1.style.display = "flex";
  div2.style.display = "none";
}

function generateOTP() {
  // Define a string of possible characters for the OTP
  const possibleChars = "0123456789";

  // Initialize an empty string to store the OTP
  let OTP = "";

  // Generate a random 4-digit number by picking a random character from the possibleChars string four times
  for (let i = 0; i < 4; i++) {
    OTP += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length)
    );
  }

  // Return the OTP
  return OTP;
}

// function to check existing user
function checkUser(obj) {
  try {
    // Initialize empty arrays for users and mechanics
    let users = [];
    if (localStorage.getItem("users") != null) {
      // If users exist in localStorage, parse and assign to users array
      users = JSON.parse(localStorage.getItem("users"));
    }
    let workshops = [];
    if (localStorage.getItem("workshops") != null) {
      // If mechanics exist in localStorage, parse and assign to mechanics array
      workshops = JSON.parse(localStorage.getItem("workshops"));
    }

    // Initialize validation variable to false
    let validation = false;

    // Check if user with given phone number already exists
    const customer = users.find((e) => {
      if (obj["number"] === e["number"]) {
        // If user already exists, set validation to true and display error message
        validation = true;
        Notify.error("User Already present please try to login");
        // container.classList.add("sign-up-mode");
        return true;
      }
      return true;
    });

    // Check if mechanic with given phone number already exists
    const workshop = workshops.find((e) => {
      if (obj["ownerNumber"] === e["ownerNumber"]) {
        // If mechanic already exists, set validation to true and display error message
        validation = true;
        Notify.error("User Already present please try to login ");
        return true;
      }
      return true;
    });

    // Return validation variable
    return validation;
  } catch (error) {}
}

// login
function read(num, pass) {
  try {
    //get user data from localstorage
    let get_data = JSON.parse(localStorage.getItem("users"));
    //get mechanic data from localstorage
    let workshops = JSON.parse(localStorage.getItem("workshops"));
    //flag to check if user or mechanic data is found or not
    let findData = false;
    //find the user with given phone number in the user data
    const select_user = get_data.find(function (user) {
      const customerPhone = user["number"];
      const customerName = user["name"];
      //if phone number matches
      if (num === customerPhone) {
        findData = true;
        //if password matches
        if (pass === user["password"]) {
          //show success message and store the user id in localstorage
          alert(customerName + "! Your account logged in successfully");
          localStorage.setItem("LogUser", JSON.stringify(user["user_id"]));
          //if email not provided, redirect to profile page

          return findData;
        }
        //show error message if password is incorrect
        Notify.error("Password is incorrect Please check");
        return findData;
      }
      return findData;
    });
    //if user data not found, search for mechanic data
    if (findData != true) {
      const mech = workshops.find(function (user) {
        const mechPhone = user["number"];
        const mechName = user["name"];
        //if phone number matches
        if (num === mechPhone) {
          findData = true;
          //if password matches
          if (pass === user["password"]) {
            //show success message and store the mechanic id in localstorage
            alert(mechName + "! Your account logged as mechanic  successfully");
            localStorage.setItem("LogUser", JSON.stringify(user["user_id"]));
            window.location.href = "./pages/Mechanic/";

            return findData;
          }
          //show error message if password is incorrect
          Notify.error("Password is incorrect Please check");
          return findData;
        }
        return findData;
      });
    }
    //show error message if user or mechanic data not found
    if (findData != true) {
      alert("User not found enter correct number or create an account ");
    }
    console.log(select_user);
  } catch (error) {}
}
