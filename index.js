// JavaScript to update nav links based on scroll position
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('div[id], section[id]');
    const navLinks = {
      classes: document.getElementById('link-classes'),
      about: document.getElementById('link-about'),
      contact: document.getElementById('link-contact')
    };
  
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.5 // Adjust based on when you want a section to be considered "in view"
    };
  
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Remove 'active' class from all nav links
          Object.values(navLinks).forEach(link => link.classList.remove('active'));
          // Add 'active' class to the nav link corresponding to the current section
          const sectionId = entry.target.getAttribute('id');
          if (navLinks[sectionId]) {
            navLinks[sectionId].classList.add('active');
          }
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  



// Javascript to add a slightly transparent nav bar when scrolling
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav-links');
    // Change 50 to your desired scroll threshold in pixels
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });