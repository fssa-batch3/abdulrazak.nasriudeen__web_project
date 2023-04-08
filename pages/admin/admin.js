let cusArray = JSON.parse(localStorage.getItem("users"));
let mechArray = JSON.parse(localStorage.getItem("mechanics"));
let n = cusArray.length;
let m = mechArray.length;
function createCard(ar, id) {
  for (let i = 0; i < ar.length; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "cust");
    let image = document.createElement("img");
    image.setAttribute("src", "../../assets/images/admin/dash/admin.jfif");
    image.setAttribute("alt", "image");
    card.append(image);
    let name = document.createElement("p");
    name.innerText = "Name : " + ar[i]["name"];
    card.append(name);
    let num = document.createElement("p");
    num.innerText = "ph : " + ar[i]["number"];
    card.append(num);
    let anchor = document.createElement("a");
    let icon = document.createElement("i");
    icon.setAttribute("class", "material-symbols-outlined");
    anchor.setAttribute("onclick", "cusDetail(" + ar[i]["user_id"] + ")");
    anchor.innerText = "view";
    icon.innerText = "visibility";
    anchor.append(icon);
    card.append(anchor);
    let app = document.getElementById(id);
    app.append(card);
  }
}
// function to detail page
function cusDetail(id) {
  let card = document.querySelector(".detailCard");
  card.style.display = "block";
  alert(id);
}
// function to back
function exitDetail() {
  let card = document.querySelector(".detailCard");
  card.style.display = "none";
}
