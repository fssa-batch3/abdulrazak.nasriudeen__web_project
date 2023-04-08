// home page section 2 div container
// json for container -----
let sec_2_data = [
  {
    title: "Courteous",
    Description:
      "We see this as an Oppurtunity to save our customer's time energy and frustration. Our customer also appretiate for the timely communication we provide regarding their questions and concerns",
    image: { src: "./assets/images/home/sec2_image1.jpg", alt: "cont" },
  },
  {
    title: "Courteous",
    Description:
      "We see this as an Oppurtunity to save our customer's time energy and frustration. Our customer also appretiate for the timely communication we provide regarding their questions and concerns",
    image: { src: "./assets/images/hero wallpaper (2).png", alt: "cont" },
  },
  {
    title: "Courteous",
    Description:
      "We see this as an Oppurtunity to save our customer's time energy and frustration. Our customer also appretiate for the timely communication we provide regarding their questions and concerns",
    image: { src: "./assets/images/hero wallpaper (2).png", alt: "cont" },
  },
  {
    title: "Courteous",
    Description:
      "We see this as an Oppurtunity to save our customer's time energy and frustration. Our customer also appretiate for the timely communication we provide regarding their questions and concerns",
    image: { src: "./assets/images/hero wallpaper (2).png", alt: "cont" },
  },
  {
    title: "Courteous",
    Description:
      "We see this as an Oppurtunity to save our customer's time energy and frustration. Our customer also appretiate for the timely communication we provide regarding their questions and concerns",
    image: { src: "./assets/images/hero wallpaper (2).png", alt: "cont" },
  },
];

// sec 4 service list
let bike_service = [
  {
    title: "Tune - up",
    Description:
      " A bike tune-up involves adjusting the gears and brakes, checking the chain and other components for wear, and making sure that everything is properly aligned and lubricate",
    image: { src: "./assets/images/home/services/bike_tune.jpg", alt: "tune" },
  },
  {
    title: "Wheel truing",
    Description:
      "  Over time, bike wheels can become slightly bent or misaligned. Wheel truing involves using special tools to adjust the spokes and ensure that the wheel is perfectly straight and round.",
    image: {
      src: "./assets/images/home/services/bike_wheel.jfif",
      alt: "wheel",
    },
  },
  {
    title: "Chain  replacement",
    Description:
      "The chain and cassette are critical components of a bike's drivetrain, and they can wear out over time. When this happens, they may need to be replaced to ensure that the bike shifts smoothly and efficiently.",
    image: {
      src: "./assets/images/home/services/bike_chain.jpg",
      alt: "chain",
    },
  },
  {
    title: "Brake pad replacement",
    Description:
      "Bike brake pads wear down over time and will eventually need to be replaced. This is important for safety, as worn brake pads can reduce stopping power and increase the risk of accidents.",
    image: {
      src: "./assets/images/home/services/bike_brake.jpg",
      alt: "brakePad",
    },
  },
  {
    title: "Suspension service",
    Description:
      " If a bike has front or rear suspension, it may need to be serviced periodically to keep it functioning properly. This can involve replacing worn seals and oil, adjusting the air pressure, and making sure that the suspension is properly tuned for the rider's weight and riding style",
    image: {
      src: "./assets/images/home/services/bike_suspension.jfif",
      alt: "suspension",
    },
  },
];
// bike service end
// car Service starts
let car_service = [
  {
    title: "Oil Change",
    Description:
      "This is the most frequent service required for a car. The oil change involves replacing the oil and oil filter in the car's engine. This helps keep the engine running smoothly and prevents excessive wear and tear on engine components.",
    image: {
      src: "./assets/images/home/services/car_oil.jfif",
      alt: "oil Change",
    },
  },
  {
    title: "Brake Service",
    Description:
      "The brakes on a car are critical for safety. Brake service involves inspecting and replacing brake pads, rotors, calipers, and brake fluid to ensure the braking system is working correctly.",
    image: { src: "./assets/images/home/services/car_brake.jpg", alt: "brake" },
  },
  {
    title: "Tire Rotation",
    Description:
      "Tires wear out unevenly due to various factors such as weight distribution and driving conditions. Regular tire rotation ensures even wear on all tires, which prolongs their lifespan and improves vehicle handling.",
    image: { src: "./assets/images/home/services/car_tyre.jpeg", alt: "tyre" },
  },
  {
    title: "Battery Service",
    Description:
      "The car's battery is responsible for powering the electrical system, starting the engine, and keeping the vehicle running. A battery service involves inspecting and cleaning battery terminals, checking the voltage, and replacing the battery if necessary.",
    image: {
      src: "./assets/images/home/services/car_battery.jpg",
      alt: "battery",
    },
  },
  {
    title: "Tune-up",
    Description:
      "A tune-up is a comprehensive service that involves replacing spark plugs, ignition wires, air and fuel filters, and other critical components of the engine. This helps improve fuel economy, engine performance, and overall reliability.",
    image: {
      src: "./assets/images/home/services/car_tune.jpg",
      alt: "carTune",
    },
  },
];
// car ends
// auto starts
let auto_service = [
  {
    title: "Engine oil change",
    Description:
      "The engine oil in a 3-wheeler auto needs to be changed regularly to ensure smooth engine operation and to prevent damage to engine components. This is typically done every 3,000-5,000 km, depending on the manufacturer's recommendations.",
    image: { src: "", alt: "" },
  },
  {
    title: "Air filter replacement",
    Description:
      "The air filter in a 3-wheeler auto helps prevent dust and other particles from entering the engine and causing damage. It is recommended to replace the air filter every 5,000 km or more frequently if the vehicle is operated in dusty or dirty environments.",
    image: { src: "", alt: "" },
  },
  {
    title: "Brake system service:",
    Description:
      "The brakes in a 3-wheeler auto are a critical safety component that need to be maintained regularly to ensure reliable operation. Brake pads, brake shoes, and brake fluids may need to be replaced periodically to maintain optimal braking performance.",
    image: { src: "", alt: "" },
  },
  {
    title: "Spark plug replacement",
    Description:
      "The spark plugs in a 3-wheeler auto play a critical role in the combustion process. Worn or damaged spark plugs can cause misfires, poor fuel economy, and other issues. It is recommended to replace the spark plugs every 10,000-15,000 km, depending on the manufacturer's recommendations.",
    image: { src: "", alt: "" },
  },
  {
    title: "Wheel alignment",
    Description:
      " Proper wheel alignment and balancing are essential for smooth and safe operation of a 3-wheeler auto. Improper alignment can cause uneven tire wear and handling issues, while unbalanced wheels can cause vibration and other problems. It is recommended to have the wheels aligned and balanced every 5,000-10,000 km, depending on the usage and driving conditions.",
    image: { src: "", alt: "" },
  },
];

function createDiv(input, id) {
  for (let i = 0; i < input.length; i++) {
    let div_container = document.createElement("div");
    div_container.setAttribute("class", "sec4Container");
    let cont_img = document.createElement("img");
    cont_img.setAttribute("class", "sec4Container_img");
    cont_img.setAttribute("src", input[i]["image"]["src"]);
    cont_img.setAttribute("alt", input[i]["image"]["alt"]);
    div_container.append(cont_img);
    let h3 = document.createElement("h3");
    h3.innerText = input[i]["title"];
    div_container.append(h3);
    let p = document.createElement("p");
    p.innerText = input[i]["Description"];
    div_container.append(p);
    let append_div = document.getElementById(id);
    append_div.append(div_container);
  }
}

createDiv(sec_2_data, "sec2_bottom");
createDiv(bike_service, "bike");
createDiv(car_service, "car");
createDiv(auto_service, "auto");

// function of tab header

function openServices(serviceName, bId) {
  var ser_cont, i, button;
  ser_cont = document.getElementsByClassName("sec4_container");
  for (i = 0; i < ser_cont.length; i++) {
    ser_cont[i].style.display = "none";
  }
  button = document.getElementsByClassName("linkButton");
  for (i = 0; i < button.length; i++) {
    button[i].style.backgroundColor = "";
  }
  document.getElementById(serviceName).style.display = "flex";
  document.getElementById(bId).style.backgroundColor = "#6c757d";
  // document.getElementById(bId).style.color = "black";
}

// open profile

// sign
function Sign_openPopup() {
  document.getElementById("sign_popup").style.display = "flex";
}

function Sign_closePopup() {
  document.getElementById("sign_popup").style.display = "none";
}
function log_openPopup() {
  document.getElementById("log_popup").style.display = "flex";
}

function log_closePopup() {
  document.getElementById("log_popup").style.display = "none";
}

// function to check existing user
function userCheck(e, n) {
  let customer = e.find((u) => {
    if (n === u["numberf"]) {
      return true;
    }
  });
}

// crud

// check user
function checkUser(obj) {
  try {
    let users = [];
    if (localStorage.getItem("users") != null) {
      users = JSON.parse(localStorage.getItem("users"));
    }
    let mechanics = [];
    if (localStorage.getItem("mechanics") != null) {
      mechanics = JSON.parse(localStorage.getItem("mechanics"));
    }
    // const mechanics = JSON.parse(localStorage.getItem("mechanics"));
    let validation = false;
    const customer = users.find((e) => {
      if (obj["number"] === e["number"]) {
        validation = true;
        Notify.error("User Already present please try to login");
        container.classList.add("sign-up-mode");
        return false;
      }
      return false;
    });
    const mechanic = mechanics.find((e) => {
      if (obj["number"] === e["number"]) {
        validation = true;
        Notify.error("User Already present please try to login ");
        container.classList.add("sign-up-mode");
        return false;
      }
      return false;
    });
    return validation;
  } catch (error) {}
}

// Create user function
function createUser(obj, chck) {
  try {
    let users = [];
    if (localStorage.getItem("users") != null) {
      users = JSON.parse(localStorage.getItem("users"));
    }
    if (chck === false) {
      users.push(obj);
      localStorage.setItem("users", JSON.stringify(users));
      console.log(users);
      alert("account created successfully...");
      container.classList.add("sign-up-mode");
    }
  } catch (error) {}
}
//function to create mechanic
function createMechanic(obj, chck) {
  try {
    let mechanics = [];
    if (localStorage.getItem("mechanics") != null) {
      mechanics = JSON.parse(localStorage.getItem("mechanics"));
    }
    if (chck === false) {
      mechanics.push(obj);
      localStorage.setItem("mechanics", JSON.stringify(mechanics));
      console.log(mechanics);
      alert("account created as mechanic successfully...");
      container.classList.add("sign-up-mode");
    }
  } catch (error) {}
}
// admin login
function adminLogin(num, pass) {
  try {
    if (num == 8124311602) {
      if (pass == 123456) {
        alert("Welcome back to your company sir");
        window.location.href = "./admin/dashboard.html";
        return true;
      }
      alert("password is incorrect");
      return false;
    } else {
      return false;
    }
  } catch (error) {}
}

// read user function
function read(num, pass) {
  try {
    let get_data = JSON.parse(localStorage.getItem("users"));
    let mechanic_data = JSON.parse(localStorage.getItem("mechanics"));
    let findData = false;
    const select_user = get_data.find(function (user) {
      const customerPhone = user["number"];
      const customerName = user["name"];

      if (num === customerPhone) {
        findData = true;
        if (pass === user["password"]) {
          alert(customerName + "! Your account logged in successfully");
          localStorage.setItem("oneUser", JSON.stringify(user["user_id"]));
          window.location.href = "./customer/cus_profile.html";

          return findData;
        }
        // alert("Password is incorrect Please check");
        Notify.error("Password is incorrect Please check");
        return findData;
      }
      return findData;
    });
    if (findData === false) {
      const mech = mechanic_data.find(function (user) {
        const mechPhone = user["number"];
        const mechName = user["name"];

        if (num === mechPhone) {
          findData = true;
          if (pass === user["password"]) {
            alert(mechName + "! Your account logged as mechanic  successfully");
            localStorage.setItem("oneUser", JSON.stringify(user["user_id"]));
            window.location.href = "./Mechanic/profile.html";
            return findData;
          }
          Notify.error("Password is incorrect Please check");
          return findData;
        }
        return findData;
      });
    }
    if (findData === false) {
      alert("User not found enter correct number or create an account ");
    }
    console.log(select_user);
  } catch (error) {}
}

//function to check alphabet
function hasnotAlphabet(string) {
  keyboardSymbols = [
    "`",
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "{",
    "]",
    "}",
    "\\",
    "|",
    ";",
    ":",
    "'",
    '"',
    ",",
    "<",
    ".",
    ">",
    "/",
    "?",
    " ",
  ];
  const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < keyboardSymbols.length; i++) {
    if (
      string.includes(keyboardSymbols[i]) ||
      string.includes(numbersArray[i])
    ) {
      return true;
    }
  }
  return false;
}

// function to check number
function hasNumber(value) {
  const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < numbersArray.length; i++) {
    if (value.includes(numbersArray[i])) {
      return true;
    }
  }
  return false;
}
//function to check uppercase alphabet
function hasAlp(e) {
  const alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < alp.length; i++) {
    if (e.includes(alp[i])) {
      return true;
    }
  }
  return false;
}

//function for creating customer,mechanic card
