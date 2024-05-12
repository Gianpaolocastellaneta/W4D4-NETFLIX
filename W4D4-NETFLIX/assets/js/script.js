document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              setTimeout(() => {
                  entry.target.classList.add('visible');
              }, 300);
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 }); // Il 50% della riga è visibile

  const fadeIns = document.querySelectorAll('.fade-in');
  fadeIns.forEach(fadeIn => {
      observer.observe(fadeIn);
  });
});
