// Simple logic for toggling between pages if required
document.getElementById("signup-page").style.display = "flex";
document.getElementById("login-page").style.display = "none";

// Toggle to login page
function showLoginPage() {
  document.getElementById("signup-page").style.display = "none";
  document.getElementById("login-page").style.display = "flex";
}

// Toggle to signup page
function showSignUpPage() {
  document.getElementById("signup-page").style.display = "flex";
  document.getElementById("login-page").style.display = "none";
}
