// Simple logic for toggling between pages if required
document.getElementById("signup-page").style.display = "flex";
// document.getElementById("login-page").style.display = "none";



// Toggle to signup page
function showSignUpPage() {
  document.getElementById("signup-page").style.display = "flex";
  document.getElementById("login-page").style.display = "none";
}

document.getElementById('signup-form').addEventListener('submit', async function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Get form values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const password2 = document.getElementById('password2').value;

  // Validate passwords match
  if (password !== password2) {
      alert("Passwords do not match!");
      return;
  }

  console.log("Submitting:", username, email, password, password2);

  // API endpoint for signup
  const apiUrl = 'https://loanmanagementbackends.onrender.com/api/register/';

  try {
      // Send a POST request to the API
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password, password2 }),
      });

      // Handle the response
      if (response.ok) {
          const data = await response.json();
          // alert("Signup successful! Redirecting to login page.");
          console.log('Signup successful:', data);

          // Redirect to login or another page
          window.location.href = 'Nlogin.html';
      } else {
          const errorData = await response.json();
          alert(errorData.detail || "Signup failed. Please try again.");
          console.error('Error:', errorData);
      }
  } catch (error) {
      alert("An error occurred. Please try again.");
      console.error('Error:', error);
  }
});

