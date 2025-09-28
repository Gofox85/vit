function validateForm() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please fill all fields.");
    return false;
  }
  if (email === "saransanjay3142@gmail.com" && password === "12345") {
    alert("Login Successful!");
    return true;
  } else {
    alert("Invalid credentials!");
    return false;
  }
}
function validateRegister() {
  let email = document.getElementById("regEmail").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("regPassword").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  if (email === "" || username === "" || password === "" || confirmPassword === "") {
    alert("Please fill all fields.");
    return false;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }
  alert("Registration Successful! You can now log in.");
  window.location.href = "index.html";
  return true;
}
