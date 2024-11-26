// Toggle to login page
function showLoginPage() {
  document.getElementById("signup-page").style.display = "none";
  document.getElementById("login-page").style.display = "flex";
}

document.getElementById('login-page').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const username = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    console.log("Logging in with:", username, password);

    // API endpoint for login
    const apiUrl = 'https://loanmanagementbackends.onrender.com/api/login/';

    try {
        // Send a POST request to the API
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        // Handle the response
        if (response.ok) {
            const data = await response.json();
            console.log('Login successful:', data);

            // Store token or other session data if required
            // if (data.token) {
            //     localStorage.setItem('authToken', data.token); // Example for saving token
            // }

            alert("Login successful! Redirecting...");
            // Redirect to the dashboard or desired page
            window.location.href = 'NDash.html'; 
        } else {
            const errorData = await response.json();
            alert(errorData.detail || "Login failed. Please check your credentials.");
            console.error('Error:', errorData);
        }
    } catch (error) {
        alert("An error occurred while logging in. Please try again.");
        console.error('Error:', error);
    }
});
