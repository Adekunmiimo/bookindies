document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  // Toggle nav on button click
  toggleButton.addEventListener('click', function () {
    nav.classList.toggle('active');
    toggleButton.classList.toggle('active');
    
    // Accessibility: Update ARIA state
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', !isExpanded);
  });

  // Optional: Collapse menu when a link is clicked (mobile)
  const navLinks = nav.querySelectorAll('a');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 992) {
        nav.classList.remove('active');
        toggleButton.classList.remove('active');
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
