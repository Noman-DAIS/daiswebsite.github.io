document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navbar').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const fadeIns = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  fadeIns.forEach(el => observer.observe(el));
});

let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.style.top = '0';
    return;
  }

  if (currentScroll > lastScroll) {
    navbar.style.top = '-100px'; // hide navbar
  } else {
    navbar.style.top = '0'; // show navbar
  }

  lastScroll = currentScroll;
});


window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.transition = 'opacity 0.6s ease';
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  }
});
