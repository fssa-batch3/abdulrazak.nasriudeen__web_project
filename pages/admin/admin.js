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
    name.innerText = ar[i]["userName"];
    card.append(name);
    let num = document.createElement("p");
    num.innerText = ar[i]["userNumber"];
    card.append(num);
    let anchor = document.createElement("a");
    anchor.setAttribute("class", "material-symbols-outlined");
    anchor.setAttribute("href", "");
    anchor.innerText = "spoof";
    card.append(anchor);
    let app = document.getElementById(id);
    app.append(card);
  }
}
