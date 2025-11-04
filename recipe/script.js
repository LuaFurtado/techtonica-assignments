function applyLanguage(language) {
  const key = language === "pt" ? "pt" : "en";

  document.querySelectorAll("[data-pt]").forEach((element) => {
    const text = element.getAttribute(`data-${key}`);
    if (text !== null) {
      element.textContent = text;
    }
  });

  document.title = key === "pt" ? "Receita de Bolo de Cenoura" : "Brazilian Carrot Cake — Recipe";
}

const toggleButton = document.getElementById("translate-toggle");
let currentLanguage = "en";

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "pt" : "en";
    applyLanguage(currentLanguage);

    toggleButton.innerHTML =
      currentLanguage === "pt"
        ? "🇺🇸 View in English"
        : "🇧🇷 Ver em Português";
  });

  toggleButton.innerHTML = "🇧🇷 Ver em Português";
}

function initBubbleEffect() {
  const canvas = document.getElementById("bubbleCanvas");
  if (!canvas) return;

  const bubbleScope = new paper.PaperScope();
  bubbleScope.setup(canvas);

  const { width, height } = bubbleScope.view.size;
  const colors = ['#41B883', '#FDDD62', '#6CB6FF'];
  const bubbles = [];

  function createBubble() {
    const side = Math.random() < 0.5 ? 'left' : 'right';
    const x = side === 'left' ? width * 0.05 : width * 0.95;
    const y = height + 20;
    const radius = Math.random() * 15 + 10;

    const circle = new bubbleScope.Path.Circle({
      center: [x + (Math.random() * 20 - 10), y],
      radius,
      fillColor: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.7
    });

    bubbles.push({
      circle,
      speed: Math.random() * 1 + 0.5
    });
  }

  setInterval(createBubble, 1000);

  bubbleScope.view.onFrame = () => {
    bubbles.forEach((bubble, index) => {
      bubble.circle.position.y -= bubble.speed;
      if (bubble.circle.position.y < -50) {
        bubble.circle.remove();
        bubbles.splice(index, 1);
      }
    });
  };
}

window.addEventListener('load', () => {
  initBubbleEffect();

  let clickCount = 0;
  const img = document.getElementById("recipeImage");
  const mariah = document.getElementById("mariah");

  img.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 3) {
      mariah.classList.remove("hidden");

      setTimeout(() => {
        mariah.classList.add("visible");
      }, 100);

      setTimeout(() => {
        mariah.classList.remove("visible");
        setTimeout(() => mariah.classList.add("hidden"), 500);
      }, 4000);

      clickCount = 0;
    }
  });
});
