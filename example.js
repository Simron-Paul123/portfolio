window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const experiences = document.querySelectorAll('.experience');
    
    experiences.forEach(experience => {
      const experiencePosition = experience.offsetTop;
      const experienceHeight = experience.offsetHeight;
      
      if (scrollPosition > experiencePosition - windowHeight + experienceHeight / 2) {
        const progress = experience.querySelector('.progress');
        const width = progress.getAttribute('data-width');
        progress.style.width = width;
      }
    });
  });
  