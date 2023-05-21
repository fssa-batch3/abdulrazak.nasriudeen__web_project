const liveBooking = document.getElementById("liveBooking");
liveBooking.addEventListener("submit", (e) => {
  e.preventDefault();
  let bookings = [];
  if (JSON.parse(localStorage.getItem("bookings")) != null) {
    bookings = JSON.parse(localStorage.getItem("bookings"));
  }
  let booking_id = Date.now();
  let customer_id = localStorage.getItem("oneUser");
  let raisedStatus = true;
  let acceptBooking = false;
  let country = document.getElementById("countries").value;
  let state = document.getElementById("state").value;
  let city = document.getElementById("district").value;
  let address = document.getElementById("address").value;
  let vehicleType = document.getElementById("vehicleType").value;
  let vehicleCompany = document.getElementById("vehicleCompany").value;
  let vehicleModel = document.getElementById("vehicleModel").value;
  let vehicleNumber = document.getElementById("vehicleNumber").value;
  let vehicleProblem = document.getElementById("vehicleProblem").value;
  let bookObj = {
    booking_id,
    customer_id,
    raisedStatus,
    acceptBooking,
    country,
    state,
    city,
    address,
    vehicleType,
    vehicleCompany,
    vehicleModel,
    vehicleNumber,
    vehicleProblem,
  };
  bookings.push(bookObj);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  let checkBookingCustomerArr = bookings.find((e) => {
    if (e["customer_id"] == customer_id && e["raisedStatus"] == true) {
      return true;
    }
  });
  //   let checkBookingStatus = checkBookingCustomerArr.find((e) => {
  //     if (e["raisedStatus"] == true) {
  //       return true;
  //     }
  //   });
  if (checkBookingCustomerArr == null || undefined) {
    bookings.push(bookObj);
    localStorage.setItem("bookings", JSON.stringify(bookings));
  } else {
    alert("your already raised a request please cancel that to raise another");
  }
  console.log(checkBookingCustomerArr);
  //   console.log(checkBookingStatus);
});
