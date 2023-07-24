function handleSignUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please re-enter your password.");
    return;
  }

  const userData = {
    email: email,
    password: password,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "Registration successful") {
        alert("Registration successful. You can now log in.");
        window.location.href = "./login.html";
      } else {
        alert("Registration failed. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

document.getElementById("signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  handleSignUp();
});
