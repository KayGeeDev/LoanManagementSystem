// Simple JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form validation for the login form (you would add this form in a real implementation)
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username == "" || password == "") {
        alert("Username and password must be filled out");
        return false;
    }
    return true;
}