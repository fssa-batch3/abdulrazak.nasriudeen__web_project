function createUser(inObj) {
  try {
    if (localStorage.getItem("users") != null) {
      users = JSON.parse(localStorage.getItem("users"));
    }
    const oneUser = users.find(function (event) {
      const email = event["userEmail"];
      if (inObj["email"] === email) {
        alert("user Already present");
        return false;
      }
    });
  } catch (error) {}
}

const oneUser = users.find(function (event) {
  const email = event["userEmail"];
  if (inObj["email"] === email) {
    alert("user Already present");
    return false;
  }
});
console.log(oneUser);
