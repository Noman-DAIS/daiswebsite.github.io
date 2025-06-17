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
