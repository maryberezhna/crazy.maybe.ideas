function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('active');
}



  function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('active');
  }

  // Fade in images on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll('.fade-in-img').forEach(img => {
    observer.observe(img);
  });

  // Animate elements on scroll
  const animatedEls = document.querySelectorAll('.animate');
  const animObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        animObs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  animatedEls.forEach(el => {
    el.style.animationPlayState = 'paused';
    animObs.observe(el);
  });
