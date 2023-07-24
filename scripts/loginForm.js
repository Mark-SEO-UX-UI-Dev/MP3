const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      window.location.href = "/dashboard.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  } catch (error) {
    console.error("Error during login:", error);
    alert("An error occurred during login. Please try again later.");
  }
});
