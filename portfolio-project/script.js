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
      entry.target.classList.add('run-slide-in');
    }
  });
}, {
  threshold: 0.3
});
elementsToAnimate.forEach(el => scrollDetective.observe(el));

