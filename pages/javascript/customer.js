const cus = JSON.parse(localStorage.getItem("oneUser"));
let customers = JSON.parse(localStorage.getItem("users"));
const workshops = JSON.parse(localStorage.getItem("workshops"));
let log_cus = customers.find(function (e) {
  if (e["u_id"] == cus) {
    return true;
  }
});
let index = customers.indexOf(log_cus);
function openprofile(serviceName, bId) {
  var ser_cont, i, button;
  ser_cont = document.getElementsByClassName("container");
  for (i = 0; i < ser_cont.length; i++) {
    ser_cont[i].style.display = "none";
  }
  button = document.getElementsByClassName("button");
  for (i = 0; i < button.length; i++) {
    button[i].style.backgroundColor = "";
    button[i].style.color = "black";
  }
  document.getElementById(serviceName).style.display = "flex";
  document.getElementById(bId).style.backgroundColor = "black";
  document.getElementById(bId).style.color = "white";
  // document.getElementById(bId).style.color = "black";
}

// json for vehicles

const two_wheeler_company = [
  {
    company: "Select-Your-company",
  },
  {
    company: "Bajaj Auto",
    vehicles: [
      "Splendor Plus",
      "HF Deluxe",
      "Passion Pro",
      "Glamour",
      "Xtreme 160R",
      "Xpulse 200",
      "Destini 125",
      "Maestro Edge 110",
      "Pleasure Plus",
      "Super Splendor",
      "Maestro Edge 125",
      "Xtreme 200S",
      "Glamour Blaze",
      "Destini 125 Platinum",
      "Splendor iSmart Plus",
      "HF Deluxe i3s",
      "Splendor+ Black and Accent",
      "Xpulse 200T",
      "Glamour Xtec",
      "Maestro Edge 110 Stealth Edition",
    ],
  },
  {
    company: "Hero MotoCorp",
    vehicles: [
      "Splendor Plus",
      "HF Deluxe",
      "Passion Pro",
      "Glamour",
      "Xtreme 160R",
      "Xpulse 200",
      "Destini 125",
      "Maestro Edge 110",
      "Pleasure Plus",
      "Super Splendor",
      "Maestro Edge 125",
      "Xtreme 200S",
      "Glamour Blaze",
      "Destini 125 Platinum",
      "Splendor iSmart Plus",
      "HF Deluxe i3s",
      "Splendor+ Black and Accent",
      "Xpulse 200T",
      "Glamour Xtec",
      "Maestro Edge 110 Stealth Edition",
    ],
  },
  {
    company: "TVS Motor Company",
    vehicles: [
      "Apache RTR 160 4V",
      "Apache RTR 200 4V",
      "Apache RR 310",
      "Star City Plus",
      "Jupiter",
      "Scooty Pep Plus",
      "NTORQ 125",
      "XL100",
      "Victor",
      "Sport",
      "iQube Electric",
      "Apache RTR 180",
      "Apache RTR 160",
      "Scooty Zest 110",
      "Scooty Streak",
      "Wego",
      "Max 125",
      "Phoenix 125",
      "Scooty Pep",
      "XL HD 100",
    ],
  },
  {
    company: "Honda Motorcycle and Scooter India",
    vehicles: [
      "Activa 6G",
      "Activa 125",
      "Shine",
      "SP 125",
      "Hornet 2.0",
      "X-Blade",
      "Livo",
      "CD 110 Dream",
      "Grazia 125",
      "CB350RS",
      "CB350 Highness",
      "Gold Wing",
      "CBR 650R",
      "Africa Twin Adventure Sports",
      "Dio",
      "Cliq",
      "Aviator",
      "Dream Yuga",
      "Dream Neo",
      "Navi",
    ],
  },
  {
    company: "Royal Enfield",
    vehicles: [
      "Classic 350",
      "Bullet 350",
      "Meteor 350",
      "Himalayan",
      "Interceptor 650",
      "Continental GT 650",
      "Bullet Trials Works Replica 350",
      "Classic 350 Redditch",
      "Classic 500",
      "Thunderbird 350",
      "Thunderbird 500",
      "Bullet Electra 350",
      "Bullet Electra 500",
      "Classic 350 Signals Edition",
      "Classic 350 Gunmetal Grey",
      "Classic 350 Chrome",
      "Continental GT 650 Custom",
      "Himalayan Adventure",
      "Himalayan Sleet",
      "Interceptor 650 Custom",
    ],
  },
  {
    company: "Suzuki Motorcycle India",
    vehicles: [
      "Access 125",
      "Burgman Street",
      "Burgman 125",
      "Gixxer SF",
      "Gixxer SF 250",
      "Gixxer",
      "Hayabusa",
      "Intruder",
      "Let's",
      "RM-Z250",
      "RM-Z450",
      "SV650X",
      "V-Strom 650XT",
      "V-Strom 1000XT",
      "V-Strom 1050XT",
      "Gixxer 250",
      "Gixxer SF MotoGP",
      "GSX-S750",
      "GSX-S1000",
      "RM85",
    ],
  },
  {
    company: "Yamaha Motor India",
    vehicles: [
      "FZ-S",
      "FZ Fi",
      "FZ 25",
      "FZS 25",
      "MT-15",
      "YZF R15 V3",
      "YZF R1M",
      "YZF R1",
      "MT-09",
      "Fascino 125",
      "RayZR 125",
      "RayZR 125 Street Rally",
      "Aerox 155",
      "YZF-R3",
      "XSR155",
      "XSR700",
      "VMAX",
      "MT-07",
      "Tracer 900 GT",
      "YZF-R6",
    ],
  },
  {
    company: "KTM India",
    vehicles: [
      "125 Duke",
      "200 Duke",
      "250 Duke",
      "390 Duke",
      "RC 125",
      "RC 200",
      "RC 390",
      "Adventure 390",
      "Adventure 250",
      "Adventure 200",
      "RC 16",
      "790 Duke",
      "125 Adventure",
      "250 Adventure",
      "390 Adventure",
      "450 SX-F",
      "250 SX",
      "250 SX-F",
      "150 XC-W TPI",
      "250 XC-F",
    ],
  },
  {
    company: "Jawa Motorcycles",
    vehicles: [
      "Jawa",
      "Jawa Forty Two",
      "Jawa Perak",
      "Yezdi Roadking",
      "Yezdi CL-II",
      "Yezdi Deluxe",
      "Yezdi Monarch",
      "BSA Goldstar",
      "BSA Roadster",
      "BSA Fury",
      "BSA Hornet",
      "BSA Scrambler",
      "BSA Tracker",
      "Jawa 300",
      "Jawa 90th Anniversary Edition",
      "Jawa 42 2.1",
      "Jawa Perak BS6",
      "Yezdi Roadking 250",
      "Yezdi CL-II 250",
      "Yezdi Monarch 250",
    ],
  },
];

const three_wheeler_company = [
  {
    company: "Select-Your-company",
  },
  {
    company: "Bajaj Auto",
    vehicles: [
      "Bajaj RE Compact 2S",
      "Bajaj RE Compact 4S",
      "Bajaj RE Optima",
      "Bajaj RE Optima - Cargo",
      "Bajaj RE Optima - DX",
      "Bajaj RE Optima - DX LPG",
      "Bajaj RE City",
      "Bajaj RE City - LPG",
      "Bajaj RE Maxima",
      "Bajaj RE Maxima - CNG",
    ],
  },
  {
    company: "Piaggio ",
    vehicles: [
      "Piaggio Ape City",
      "Piaggio Ape Xtra LDX",
      "Piaggio Ape DX",
      "Piaggio Ape E-City",
      "Piaggio Ape E-City FX",
      "Piaggio Ape E-City LDX",
      "Piaggio Ape E-City Plus",
      "Piaggio Ape Auto DX",
      "Piaggio Ape Auto DXL",
      "Piaggio Ape Auto DXL CNG",
    ],
  },
  {
    company: "TVS Motors",
    vehicles: [
      "TVS King",
      "TVS King Deluxe",
      "TVS King Duramax",
      "TVS King Max",
      "TVS King 4S",
      "TVS King DS",
      "TVS XL100",
      "TVS XL100 Comfort",
      "TVS XL100 Heavy Duty",
      "TVS XL100 Winner Edition",
    ],
  },
  {
    company: "Atul Auto",
    vehicles: [
      "Atul Gem",
      "Atul Smart",
      "Atul Elite",
      "Atul Gemini",
      "Atul Gem Paxx",
      "Atul Gem Cargo",
      "Atul Shakti",
      "Atul Shakti Passenger",
      "Atul Shakti Cargo",
      "Atul Gemini Passenger",
    ],
  },
  {
    company: "Mahindra & Mahindra",
    vehicles: [
      "Mahindra Alfa",
      "Mahindra Alfa DX",
      "Mahindra Alfa Plus",
      "Mahindra Alfa Champ",
      "Mahindra Treo",
      "Mahindra Treo Yaari",
      "Mahindra Treo Zor",
      "Mahindra Alfa Load",
      "Mahindra Alfa Comfy",
      "Mahindra Alfa Mini",
    ],
  },
];

const four_wheeler_company = [
  {
    company: "Select-Your-company",
  },
  {
    company: "Maruti Suzuki",
    vehicles: [
      "Alto",
      "Swift",
      "Dzire",
      "Wagon R",
      "Ertiga",
      "Celerio",
      "Baleno",
      "Vitara Brezza",
      "S-Presso",
      "Ignis",
    ],
  },
  {
    company: "Hyundai",
    vehicles: [
      "i20",
      "Creta",
      "Verna",
      "Venue",
      "Grand i10 Nios",
      "Aura",
      "Santro",
      "Kona Electric",
      "Elantra",
      "Tucson",
    ],
  },
  {
    company: "Tata Motors",
    vehicles: [
      "Tiago",
      "Altroz",
      "Nexon",
      "Harrier",
      "Tigor",
      "Safari",
      "Hexa",
      "Gravitas",
      "Punch",
      "Sumo",
    ],
  },
  {
    company: "Mahindra & Mahindra",
    vehicles: [
      "Scorpio",
      "XUV500",
      "Thar",
      "Bolero",
      "KUV100 NXT",
      "TUV300",
      "Marazzo",
      "Verito",
      "Alturas G4",
      "Xylo",
    ],
  },
  {
    company: "Kia Motors",
    vehicles: [
      "Seltos",
      "Carnival",
      "Sonet",
      "Stinger",
      "Rio",
      "K5",
      "K900",
      "Sportage",
      "Niro",
      "Optima",
    ],
  },
  {
    company: "Toyota Kirloskar",
    vehicles: [
      "Fortuner",
      "Innova Crysta",
      "Glanza",
      "Camry",
      "Vellfire",
      "Yaris",
      "Urban Cruiser",
      "Land Cruiser",
      "Etios",
      "Corolla Altis",
    ],
  },
  {
    company: "Honda Cars India",
    vehicles: [
      "Honda City",
      "Honda Civic",
      "Honda Amaze",
      "Honda WR-V",
      "Honda Jazz",
      "Honda CR-V",
      "Honda Accord",
      "Honda BR-V",
      "Honda Brio",
      "Honda Mobilio",
    ],
  },
  {
    company: "Renault India",
    vehicles: [
      "Renault Kwid",
      "Renault Triber",
      "Renault Duster",
      "Renault Captur",
      "Renault Kiger",
      "Renault Lodgy",
      "Renault Scala",
      "Renault Pulse",
      "Renault Fluence",
      "Renault Koleos",
    ],
  },
  {
    company: "Ford",
    vehicles: [
      "Fiesta",
      "Focus",
      "Mustang",
      "F-150",
      "Explorer",
      "Escape",
      "Edge",
      "Bronco",
      "Maverick",
      "Ranger",
    ],
  },
  {
    company: "volkswagen",
    vehicles: [
      "Golf",
      "Polo",
      "Passat",
      "Tiguan",
      "Jetta",
      "Arteon",
      "Touareg",
      "Atlas",
      "ID.4",
      "Up!",
    ],
  },
];

// function to create company options

function createCompany(array, id) {
  const options = document.getElementById(id);
  while (options.hasChildNodes()) {
    options.firstChild.remove();
  }

  for (let i = 0; i < array.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", array[i]["company"]);
    option.innerText = array[i]["company"];
    options.append(option);
  }
}

// function to create vehicles option

function createVehicle(array, id, model) {
  const options = document.getElementById(id);
  while (options.hasChildNodes()) {
    options.firstChild.remove();
  }
  let finded = array.find((F) => F.company === model);

  for (let i = 0; i < finded["vehicles"].length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", finded["vehicles"][i]);
    option.innerText = finded["vehicles"][i];
    options.append(option);
  }
}

console.log(finded);

for (let j = 0; j < finded["vehicles"].length; j++) {
  console.log(finded["vehicles"][j]);
}

// }
// createVehicles(, "");
console.log(two_wheeler_company[1]["vehicles"]);

// function to disable Input feilds
function dis(classes) {
  let className = document.getElementsByClassName(classes);

  for (let i = 0; i < className.length; i++) {
    className[i].disabled = true;
  }
}
// let className = document.getElementsByClassName("profileClass");

// for (let i = 0; i < className.length; i++) {
//   className[i].disabled = true;
// }

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
      location_p.innerText = "location: " + "chennai";
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
      close.innerText = "Close";
      Open_div.append(close);

      //bottom

      let cont_bottom = document.createElement("div");
      cont_bottom.setAttribute("class", "desc_bottom");
      card_description.append(cont_bottom);

      //button

      let view = document.createElement("button");
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
      let direction_p = document.createElement("p");

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

let deletedUser = [];
if (localStorage.getItem("deletedUser") != null) {
  deletedUser = JSON.parse(localStorage.getItem("deletedUser"));
}
function delUser(id, arr) {
  let del = arr.find((e) => {
    id === e["customerID"];
  });
  let index = arr.indexOf(del);
  console.log(index);
  let conform = confirm("Would u like to delete");
  if (conform === true) {
    arr.splice(index, 1);
    localStorage.setItem("'" + arr + "'", JSON.stringify(arr));
  }
}
