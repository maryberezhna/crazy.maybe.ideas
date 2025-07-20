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


  // Get current path or URL language
  const path = window.location.pathname.toLowerCase();

  // Loop through language links
  document.querySelectorAll('.lang-link').forEach(link => {
    const lang = link.dataset.lang;

    // Match URL to lang and set .active
    if (path.includes('/' + lang)) {
      link.classList.add('active');
    }
  });


  const wavePath = document.querySelector('.wave-path');

  const waveShapes = [
    "M0,160 C480,260 960,60 1440,160 L1440,320 L0,320 Z",
    "M0,180 C480,100 960,220 1440,180 L1440,320 L0,320 Z",
    "M0,140 C480,200 960,20 1440,140 L1440,320 L0,320 Z",
    "M0,190 C480,120 960,240 1440,190 L1440,320 L0,320 Z"
  ];

  let i = 0;
  function animateWave() {
    i = (i + 1) % waveShapes.length;
    wavePath.setAttribute("d", waveShapes[i]);
    setTimeout(animateWave, 1500);
  }

  wavePath.setAttribute("d", waveShapes[0]);
  animateWave();


