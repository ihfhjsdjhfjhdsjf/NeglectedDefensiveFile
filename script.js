
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.backdropFilter = 'blur(10px)';
  } else {
    navbar.style.background = '#ffffff';
    navbar.style.backdropFilter = 'none';
  }
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all program cards, gallery items, and faculty cards
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.program-card, .gallery-item, .faculty-card');
  
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Form submission handler
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(this);
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const program = this.querySelector('select').value;
  const message = this.querySelector('textarea').value;
  
  // Simple validation
  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }
  
  // Simulate form submission
  alert('Thank you for your message! We will get back to you soon.');
  this.reset();
});

// Add click handlers for hero buttons
document.addEventListener('DOMContentLoaded', function() {
  const exploreBtn = document.querySelector('.btn-primary');
  const galleryBtn = document.querySelector('.btn-secondary');
  
  if (exploreBtn) {
    exploreBtn.addEventListener('click', function() {
      document.getElementById('programs').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
  
  if (galleryBtn) {
    galleryBtn.addEventListener('click', function() {
      document.getElementById('gallery').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
});

// Add hover effects for program cards
document.querySelectorAll('.program-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Gallery item click handler
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', function() {
    const overlay = this.querySelector('.gallery-overlay');
    const title = overlay.querySelector('h4').textContent;
    const description = overlay.querySelector('p').textContent;
    
    alert(`${title}\n\n${description}\n\nClick to view full gallery (feature coming soon!)`);
  });
});
