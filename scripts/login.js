document.addEventListener("DOMContentLoaded", function () {
  const orderNowBtn = document.getElementById("order-now-btn");

  orderNowBtn.addEventListener("click", () => {
    const isLoggedIn = checkUserLoginStatus();

    if (isLoggedIn) {
      console.log("Ordering process...");
    } else {
      window.location.href = "/login.html";
    }
  });
});
