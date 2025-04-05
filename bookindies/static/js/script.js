document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  // Toggle nav open/close
  toggleButton.addEventListener('click', function () {
    nav.classList.toggle('active');
    toggleButton.classList.toggle('active');
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', !isExpanded);
  });

  // Collapse nav on link click (mobile only)
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

  // Toggle top-level dropdown
  const topDropdownToggle = document.querySelector('.home-dropdown > a');
  const topDropdownMenu = document.querySelector('.home-dropdown-menu');
  topDropdownToggle.addEventListener('click', function (e) {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      topDropdownMenu.classList.toggle('show-submenu');
      topDropdownToggle.classList.toggle('active');
    }
  });

  // Toggle nested dropdown
  const nestedDropdownToggle = document.querySelector('.home-nested-dropdown > a');
  const nestedDropdownMenu = document.querySelector('.home-nested-dropdown-menu');
  nestedDropdownToggle.addEventListener('click', function (e) {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      nestedDropdownMenu.classList.toggle('show-submenu');
      nestedDropdownToggle.classList.toggle('active');
    }
  });

  // ✅ Collapse all dropdowns on scroll (mobile only)
  window.addEventListener('scroll', function () {
    if (window.innerWidth <= 992) {
      const nav = document.getElementById('mainNav');
      const toggleButton = document.getElementById('menuToggle');
  
      // Collapse nav and reset hamburger
      nav.classList.remove('active');
      toggleButton.classList.remove('active');
      toggleButton.setAttribute('aria-expanded', 'false');
  
      // Animate submenu closing
      document.querySelectorAll('.show-submenu').forEach(menu => {
        menu.classList.remove('show-submenu');
        menu.classList.add('collapsing');
        setTimeout(() => {
          menu.classList.remove('collapsing');
        }, 400); // matches CSS transition duration
      });
  
      // Remove active states
      document.querySelectorAll('.home-dropdown > a.active, .home-nested-dropdown > a.active').forEach(link => {
        link.classList.remove('active');
      });
    }
  });
  

  // ✅ Collapse dropdowns when clicking outside the nav
  document.addEventListener('click', function (e) {
    if (window.innerWidth <= 992) {
      const isClickInsideNav = nav.contains(e.target) || toggleButton.contains(e.target);
      if (!isClickInsideNav) {
        nav.classList.remove('active');
        toggleButton.classList.remove('active');
        toggleButton.setAttribute('aria-expanded', 'false');
        document.querySelectorAll('.show-submenu').forEach(menu => menu.classList.remove('show-submenu'));
        document.querySelectorAll('.home-dropdown > a.active, .home-nested-dropdown > a.active').forEach(link => link.classList.remove('active'));
      }
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.home-count');
  const observerOptions = {
    threshold: 0.6, // section must be 60% in view
  };

  // Store running states and current values
  const counterStates = new Map();

  function startCounter(counter) {
    const target = +counter.getAttribute('data-target');
    let count = +counter.innerText || 0;

    if (count >= target) return; // already complete

    // Prevent multiple intervals
    if (counterStates.get(counter)?.running) return;

    const duration = 2000;
    const steps = 60;
    const increment = Math.ceil((target - count) / steps);
    const intervalTime = duration / steps;

    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        counter.innerText = target;
        clearInterval(interval);
        counterStates.set(counter, { running: false, value: target });
      } else {
        counter.innerText = count;
        counterStates.set(counter, { running: true, value: count });
      }
    }, intervalTime);

    counterStates.set(counter, { running: true, value: count });
  }

  // Intersection Observer to detect when stats section is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => {
          startCounter(counter);
        });
      }
    });
  }, observerOptions);

  const statsSection = document.querySelector('.home-stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
});


// let currentPage = 1;

// document.addEventListener("DOMContentLoaded", function () {
//   const loadMoreBtn = document.getElementById("loadMoreBtn");
//   const container = document.getElementById("portfolioContainer");

//   if (loadMoreBtn) {
//     loadMoreBtn.addEventListener("click", function () {
//       currentPage++;

//       fetch(`?page=${currentPage}`, {
//         headers: { "X-Requested-With": "XMLHttpRequest" }
//       })
//       .then(response => response.json())
//       .then(data => {
//         container.insertAdjacentHTML('beforeend', data.html);
//         if (!data.has_next) {
//           loadMoreBtn.remove();
//         }
//       })
//       .catch(err => {
//         console.error("Error loading more images:", err);
//       });
//     });
//   }
// });


  let currentPage = 1;

  document.addEventListener("DOMContentLoaded", function () {
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const container = document.getElementById("portfolioContainer");

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", function () {
        currentPage++;

        fetch(`?page=${currentPage}`, {
          headers: { "X-Requested-With": "XMLHttpRequest" }
        })
        .then(response => response.json())
        .then(data => {
          // Append new items
          container.insertAdjacentHTML('beforeend', data.html);

          // If there are no more items, disable the button
          if (!data.has_next || !data.html.trim()) {
            loadMoreBtn.disabled = true;
            loadMoreBtn.innerText = "No More Items";
            loadMoreBtn.style.opacity = "0.5";
            loadMoreBtn.style.cursor = "not-allowed";
          }
        })
        .catch(err => {
          console.error("Error loading more items:", err);
          loadMoreBtn.innerText = "Error loading more";
        });
      });
    }
  });


  const loadMoreBtn = document.getElementById("loadMoreBtn");

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", function () {
      if (loadMoreBtn.disabled) return;
  
      const page = this.dataset.page;
      const container = document.getElementById("bookCoverContainer");
      const params = new URLSearchParams(window.location.search);
      const category = params.get('category') || "";
  
      fetch(`?page=${page}&category=${category}`, {
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      })
      .then(res => res.json())
      .then(data => {
        container.insertAdjacentHTML("beforeend", data.html);
        if (data.has_next) {
          loadMoreBtn.dataset.page = parseInt(page) + 1;
        } else {
          loadMoreBtn.disabled = true;
          loadMoreBtn.textContent = "No More Covers";
        }
      });
    });
  }
  