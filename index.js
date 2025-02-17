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




// Javascript to show thank you message for form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const thankYouMessage = document.getElementById("thank-you");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission behavior

      // Prepare form data to send via fetch (AJAX)
      const formData = new FormData(form);

      // Submit the form data to the current page
      fetch("/", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            // Hide the form and display the thank-you message
            form.style.display = "none";
            thankYouMessage.style.display = "block";
          } else {
            console.error("Form submission failed:", response.statusText);
          }
        })
        .catch((error) => {
          console.error("Error submitting the form:", error);
        });
    });
  });


