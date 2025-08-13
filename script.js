// ==================
// Navbar & Scroll
// ==================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Mobile menu toggle
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Click highlight (black on click, others reset)
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // Close menu after click (mobile)
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

// Scroll behavior
window.onscroll = () => {
  let top = window.scrollY;

  // Highlight active section link while scrolling
  sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove("active"));
      let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });

  // Sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Close menu when scrolling
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
