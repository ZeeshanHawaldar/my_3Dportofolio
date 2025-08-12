// Select elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Mobile menu toggle
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll behavior
window.onscroll = () => {
  let top = window.scrollY;

  // Highlight active section link
  sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });

  // Sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Close menu when scrolling
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};


//submit contact details
(function(){
    emailjs.init("dzsHnJ_N8dtvyKicT"); // Replace with your EmailJS Public Key
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_3jeilla', 'template_4zajjcq', this)
      .then(function() {
        alert('Message sent successfully!');
      }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });
  });

  document.getElementById("read-more-link").addEventListener("click", function() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more-text");
  let linkText = document.getElementById("read-more-link");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    linkText.textContent = "Read More";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    linkText.textContent = "Read Less";
  }
});