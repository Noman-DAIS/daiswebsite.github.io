
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const faders = document.querySelectorAll('.fade-in');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.backgroundColor = 'rgba(17, 64, 54, 0.7)';
    } else {
      navbar.style.backgroundColor = '#114036';
    }

    faders.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add('visible');
      }
    });
  });

  hamburger.addEventListener('click', () => {
    document.querySelectorAll('.nav-left a, .nav-right a').forEach(el => {
      el.style.display = el.style.display === 'block' ? 'none' : 'block';
    });
  });
});
