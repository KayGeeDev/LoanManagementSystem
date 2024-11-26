const form = document.getElementById('userForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let valid = true;
  const fields = ['bvn', 'address', 'bankInfo', 'idCard', 'nextOfKin', 'workStatus'];
  fields.forEach(field => {
    const input = document.getElementById(field);
    const error = document.getElementById(field + 'Error');
    
    if (!input.value.trim()) {
      error.textContent = '${field.replace(/([A-Z])/g, "$1")} is required';
      valid = false;
    } else {
      error.textContent = '';
    }
  });

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});

const apiUrl3 = "https://loanmangementbackends.onrender.com/api/loanapplication ";

async function Loan() {
    const response = await fetch(apiUrl3, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData)
    });

    if (response.ok) {
        const result = await response.json();
        if (details.success) {
            alert("Details captured successfully!");
            window.location.href = "loan request.html";
        } else {
            alert("Invalid Creditials, Try again!");
         } 
        }
} 