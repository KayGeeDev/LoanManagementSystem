document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const errorMessage = document.getElementById('errorMessage');

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (fullName === '' || email === '' || username === '' || password === '' || confirmPassword === '') {
      errorMessage.textContent = 'Please fill in all fields.';
      return;
    }

    if (password !== confirmPassword) {
      errorMessage.textContent = 'Passwords do not match.';
      return;
    }

    // Here you would typically send the sign-up data to a server for processing
    // For this example, we'll just simulate a successful sign-up
    console.log('Sign-up attempt:', { fullName, email, username, password });
    errorMessage.textContent = '';
    alert('Sign-up successful! Redirecting to login page...');
    // In a real application, you would redirect to the login page or dashboard here
  });
});