// Typed.js initialization
document.addEventListener('DOMContentLoaded', function() {
  const options = {
    strings: ['Computer Science Student', 'Web Developer', 'UI/UX Designer', 'Problem Solver'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
  };
  
  const typed = new Typed('.typed-text', options);
  
  // Initialize skill bar animations
  const skillsSection = document.querySelector('#skills');
  const skillBars = document.querySelectorAll('.skill-percentage');
  
  const showSkills = function() {
    skillBars.forEach(skill => {
      skill.style.width = skill.parentElement.previousElementSibling.lastElementChild.textContent;
    });
  };
  
  // Check if skills section is in viewport
  const isInViewport = function(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  // Initial check and event listener for scroll
  if (isInViewport(skillsSection)) {
    showSkills();
  }
  
  window.addEventListener('scroll', function() {
    if (isInViewport(skillsSection)) {
      showSkills();
    }
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });
  
  // Scroll to top button functionality
  document.querySelector('.scroll-to-top').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Update active nav link on scroll
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navbarHeight - 100;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href').substring(1);
      if (href === current) {
        link.classList.add('active');
      }
    });
  });
  
  // Form submission handling (for demo purposes)
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Form submitted! (This is a demo - no data is actually sent)');
      this.reset();
    });
  }
});