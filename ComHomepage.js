// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Highlight buttons on hover
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = '#ffffff';
      button.style.color = '#6a0dad';
    });
  
    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = '#6a0dad';
      button.style.color = '#ffffff';
    });
  });
  
  // Toggle timeline details on click
  document.querySelectorAll('.timeline-item h3').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling; // Get the associated paragraph
      if (content.style.display === 'none' || !content.style.display) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
  