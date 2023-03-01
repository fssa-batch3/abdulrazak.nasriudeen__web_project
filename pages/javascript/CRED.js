// Create user function
// this function creates user
// if user already present it shows alert
function createUser(obj) {
  try {
    let users = [];
    let validation_error = false;

    // the below condition check if the array has no data it will skip
    if (localStorage.getItem("users") != null) {
      users = JSON.parse(localStorage.getItem("users"));
    }
    // if there is a data it will store in the above mentioned array

    const select_user = users.find(function (user) {
      const number = user["userNumber"];
      if (obj["userNumber"] === number) {
        validation_error = true;
        alert("user & already use this account, please change your number");
        return false;
      }
      return false;
    });
    if (!validation_error) {
      users.push(obj); //if user doesn't present it will push an oject to existing array
      localStorage.setItem("users", JSON.stringify(users)); //it will store in the local storage

      alert("account created successfully...");
    }
  } catch (error) {}
}
// --------------------------------------------------------
//function to create mechanic
// this function creates mechanics
// if mechainic already present it shows alert

function createMechanic(obj) {
  try {
    let mechanics = [];
    let validation_error = false;
    // alert("hi");
    // the below condition check if the array has no data it will skip
    if (localStorage.getItem("mechanics") != null) {
      mechanics = JSON.parse(localStorage.getItem("mechanics"));
    }
    // if there is a data it will store in the above mentioned array

    const select_user = mechanics.find(function (user) {
      const number = user["userNumber"];
      if (obj["userNumber"] === number) {
        validation_error = true;
        alert("user & already use this account, please change your email");
        return false;
      }
      return false;
    });
    if (!validation_error) {
      mechanics.push(obj); //if user doesn't present it will push an oject to existing array
      localStorage.setItem("mechanics", JSON.stringify(mechanics)); //it will store in the local storage
      alert("account created as mechanic successfully...");
    }
  } catch (error) {}
}

// read user function
// this function search the data from both the arrays using the login number
// if customer logged in it will store the id of the customer in local storage an directed into customer page
// if mechanic logged in it will store the id of the mechanic in local storage an directed into mechanic page
//
function read(num, pass) {
  try {
    let get_data = JSON.parse(localStorage.getItem("users"));
    let mechanic_data = JSON.parse(localStorage.getItem("mechanics"));
    let findData = false;
    const select_user = get_data.find(function (user) {
      const customerPhone = user["userNumber"];
      const customerName = user["userName"];

      if (num === customerPhone) {
        findData = true;
        if (pass === user["userPassword"]) {
          alert(customerName + "! Your account logged in successfully");
          localStorage.setItem("oneUser", JSON.stringify(user["u_id"]));
          window.location.href = "./pages/Customer/Customer.html";
          return findData;
        }
        alert("Password is incorrect Please check");
        return findData;
      }
      return findData;
    });
    if (findData === false) {
      const mech = mechanic_data.find(function (user) {
        const mechPhone = user["userNumber"];
        const mechName = user["userName"];

        if (num === mechPhone) {
          findData = true;
          if (pass === user["userPassword"]) {
            alert(mechName + "! Your account logged as mechanic  successfully");
            localStorage.setItem("oneUser", JSON.stringify(user["u_id"]));
            window.location.href = "./pages/Mechanic/Mechanic.html";
            return findData;
          }
          alert("Password is incorrect Please check");
          return findData;
        }
        return findData;
      });
    }
    if (findData === false) {
      alert(
        "Number is not available please signup or enter valid phone number"
      );
    }
    console.log(select_user);
  } catch (error) {}
}
