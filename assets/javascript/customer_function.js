const loggedUser = localStorage.getItem("LoginUser");
let users = JSON.parse(localStorage.getItem("users"));
let loggedUserObj = users.find((e) => {
  if (e["user_id"] == loggedUser) {
    return true;
  }
});

let showName = document.getElementById("userName");
showName.innerText = "Hi..!      " + loggedUserObj["name"];
let workShops = JSON.parse(localStorage.getItem("workshops"));

//
for (let i = 0; i < workShops.length; i++) {
  createWorkshop(workShops[i], "workshops");
}
// filter function
function filter(arr, val, id) {
  let fliterArr = arr.filter((e) => {
    if (e["workshopType"] == val) {
      return true;
    }
  });
  let section = document.getElementById(id);
  while (section.hasChildNodes()) {
    // remove existing child elements
    section.firstChild.remove();
  }
  for (let i = 0; i < fliterArr.length; i++) {
    createWorkshop(fliterArr[i], id);
  }
}

let filterTwoWheeler = document.getElementById("twoWheeler");
filterTwoWheeler.addEventListener("click", () => {
  filter(workShops, "2 wheelers", "workshops");
});
let filterThreeWheeler = document.getElementById("threeWheeler");
filterThreeWheeler.addEventListener("click", () => {
  filter(workShops, "3 wheelers", "workshops");
});
let filterFourWheeler = document.getElementById("fourWheeler");
filterFourWheeler.addEventListener("click", () => {
  filter(workShops, "4 wheelers", "workshops");
});

// search
const searchbar = document.getElementById("searchbar");
const cards = document.getElementsByClassName("workShopCard");

searchbar.addEventListener("input", () => {
  for (const element of cards) {
    if (
      element.innerHTML.toLowerCase().includes(searchbar.value.toLowerCase())
    ) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  }
});
