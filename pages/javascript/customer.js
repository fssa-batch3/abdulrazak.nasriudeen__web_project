const cus = JSON.parse(localStorage.getItem("oneUser"));
let customers = JSON.parse(localStorage.getItem("users"));
const workshops = JSON.parse(localStorage.getItem("workshops"));
let log_cus = customers.find((e) => {
  if (e["user_id"] === cus) {
    return true;
  }
});
Customer_vehicles = JSON.parse(localStorage.getItem("Customer_vehicles"));
let cus_vehicle = Customer_vehicles.find((e) => {
  if (e["CustomerId"] === cus) {
    return true;
  }
});
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
      location_p.innerText = arr[i]["workshopCity"];
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
      close.innerText = "Closed";
      Open_div.append(close);

      //bottom

      let cont_bottom = document.createElement("div");
      cont_bottom.setAttribute("class", "desc_bottom");
      card_description.append(cont_bottom);

      //button

      let view = document.createElement("button");
      view.setAttribute(
        "onclick",
        "workshopDetail(" + arr[i]["workshopId"] + ")"
      );
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

createWorkshop(workshops, "nearByShops");

function delUser() {
  let conform = confirm("Would u like to delete your account");
  if (conform === true) {
    let deletedUser = [];
    if (localStorage.getItem("deletedUser") != null) {
      deletedUser = JSON.parse(localStorage.getItem("deletedUser"));
    }
    deletedUser.push(log_cus);
    localStorage.setItem("deletedUser", JSON.stringify(deletedUser));
    customers.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(customers));
    window.location.href = "../../index.html";
  }
}

//dropdown
// const setting = document.getElementById("settings");
// setting.addEventListener("mouseover", (e) => {
//   e = document.getElementById("settings_dropdown");
//   e.style.display = "block";
// });

// const bb = document.getElementsByTagName("body");
// bb.setAttribute("onload", "shopTime()");

// function onloading() {
//   shopTime();
// }
// function shopTime() {
//   let time = new Date();
//   let hour = time.getHours();
//   let minutes = time.getMinutes();
//   alert(hour, minutes);
// }

//details of the workshops
function workshopDetail(id) {
  const detailPage = document.querySelector(".workshopDetails");
  detailPage.style.display = "flex";

  let mechanics = JSON.parse(localStorage.getItem("mechanics"));
  let services = JSON.parse(localStorage.getItem("mechServices"));

  let selectWorkshop = workshops.find((e) => {
    if (e["workshopId"] == id) {
      return true;
    }
  });
  let selectmechanic = mechanics.find((e) => {
    if (e["WorkshopId"] == id) {
      return true;
    }
  });
  let selectService = services.find((e) => {
    if (e["workshopId"] == id) {
      return true;
    }
  });

  // appending workshop
  const workshopImageDetail = document.getElementById("workshopImageDetail");
  workshopImageDetail.setAttribute("src", selectWorkshop["workshopImage"]);

  const workName = document.getElementById("workName");
  workName.innerText = selectWorkshop["workshopName"];

  const Started = document.getElementById("Started");
  Started.innerText = "Started On " + selectWorkshop["startedOn"];

  const openT = document.getElementById("openT");
  openT.innerText = "Open @ " + selectWorkshop["openTiming"];
  const closeT = document.getElementById("closeT");
  closeT.innerText = "Close @ " + selectWorkshop["closeTiming"];

  const type = document.getElementById("type");
  type.innerText = selectWorkshop["workshopType"];

  const city = document.getElementById("city");
  city.innerText = selectWorkshop["workshopCity"];

  // apending mechanic details
  const mechName = document.getElementById("mechName");
  mechName.innerText = selectmechanic["name"];
  const mechPhone = document.getElementById("mechPhone");
  mechPhone.innerText = selectmechanic["number"];
  const mechEmail = document.getElementById("mechEmail");
  mechEmail.innerText = selectmechanic["number"];
  const mechExperience = document.getElementById("mechExperience");
  mechExperience.innerText = selectmechanic["number"];
  const mechSpl = document.getElementById("mechSpl");
  mechSpl.innerText = selectmechanic["number"];
}

function exitDetail() {
  const detailPage = document.querySelector(".workshopDetails");
  detailPage.style.display = "none";
}
