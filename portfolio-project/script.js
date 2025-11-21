// Select carousel container and navigation buttons
const carousel = document.querySelector('.projects-carousel');
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');

// Amount of horizontal scroll per button click (based on card width)
const scrollAmount = 350;

// Handle left button scroll
btnLeft.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// Handle right button scroll
btnRight.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Select all elements that should animate when entering the viewport
const elementsToAnimate = document.querySelectorAll('.animated-title, .animated-text');

// IntersectionObserver to detect when elements enter the viewport
const scrollDetective = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // If the element is visible, start the animation by adding the class
    if (entry.isIntersecting) {
      entry.target.classList.add('run-slide-in');
    }
  });
}, {
  // Element must be at least 30% visible to trigger the animation
  threshold: 0.3
});

// Observe each element and add animation reset logic
elementsToAnimate.forEach(el => {
  // Start observing the element for intersection events
  scrollDetective.observe(el);

  // Naomi's suggestion:
  // Listen for the end of the animation so we can remove the class.
  // This allows the animation to run again if the element re-enters the viewport.
  el.addEventListener("animationend", () => {
    el.classList.remove("run-slide-in");
  });
});
