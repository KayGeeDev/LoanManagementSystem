const form = document.getElementById('userForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let valid = true;
  const fields = ['bvn', 'address', 'bankInfo', 'idCard', 'nextOfKin', 'workStatus'];
  fields.forEach(field => {
    const input = document.getElementById(field);
    const error = document.getElementById(field + 'Error');
    
    if (!input.value.trim()) {
      error.textContent = ${field.replace(/([A-Z])/g, ' $1')} is required.;
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