document.getElementById('yesButton').addEventListener('click', function () {
    // Show loan tiers when "Yes" is clicked
    document.getElementById('loanTiers').classList.remove('hidden');
  });
  
  document.getElementById('noButton').addEventListener('click', function () {
    // Redirect to the previous page when "No" is clicked
    window.history.back();
  });