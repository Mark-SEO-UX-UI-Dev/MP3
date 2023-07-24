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


const form = document.getElementById('form');
const username = document.getElementById('username')
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2')

form.addEventListener('submit', e -> {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
   const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

   errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}


const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

 if (usernameValue === '')  {
  setError(username, 'Username is required');
 } else {
    setSuccess(username);
  }

if (emailValue === '')  {
  setError(email, 'Email is required');
 } else if (!isValidEmail(emailValue)) {
  setError(email,'Provide a valid email addres');
 } else {
  setSuccess(email);
 }
    
 if (passwordValue === '')  {
  setError(password, 'Password is required');
 } else if (passwordValue.length < 8 ) {
  setError(password,'Password must be at least 8 characters.');
 } else {
  setSuccess(password);
 }

  if (password2Value === '')  {
  setError(password2, 'Please confirm your password');
 } else if (password2Value !== passwordValue ) {
  setError(password2,'Passwords did not match');
 } else {
  setSuccess(password2);
 }
  
  }

