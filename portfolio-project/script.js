const carousel = document.querySelector('.projects-carousel');
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');

const scrollAmount = 350; //card size

btnLeft.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});
const elementsToAnimate = document.querySelectorAll('.animated-title, .animated-text');

const scrollDetective = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!entry.target.classList.contains('is-animating')) {
        entry.target.classList.add('run-slide-in');
        entry.target.classList.add('is-animating');
      }
    } else {
      if (entry.intersectionRatio === 0) {
        setTimeout(() => {
          entry.target.classList.remove('run-slide-in');
          entry.target.classList.remove('is-animating');
        }, 300);
      }
    }
  });
}, {
  threshold: [0, 0.4]
});

elementsToAnimate.forEach(el => scrollDetective.observe(el));
