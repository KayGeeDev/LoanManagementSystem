const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', (e) => {
         e.preventDefault();
         const email = document.getElementById('email').value;
         const password = document.getElementById('password').value;
    
        // Basic email validation

    });

const apiUrl2 = "https://loanmanagementbackends.onrender.com/api/login/";

async function Login() {
    const response = await fetch(apiUrl2, {
        method: "POST",
        headers: {
            "Content-Type": "login/json",
        },
        body: JSON.stringify(FormData)
    });

    if (response.ok) {
        const result = await response.json();
        if (details.success) {
            alert("Welcome! Redirecting to Dashboard");
            window.location.href = "NDash.html";
        } else {
            alert("Invalid Creditials, Try again!");
         } 
        }
    // Login();
    
} 

// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         errorMessage.textContent = 'Please enter a valid email address.';
//         return;
//     }

//     // Basic password validation (at least 8 characters)
//     if (password.length < 8) {
//         errorMessage.textContent = 'Password must be at least 8 characters long.';
//         return;
//     }

//     // If validation passes, you would typically send this data to your server
//     console.log('Login attempt:', { email, password });
//     alert('Login successful! (This is a simulation)');

//     // Clear the form and error message
//     loginForm.reset();
//     errorMessage.textContent = '';
// });