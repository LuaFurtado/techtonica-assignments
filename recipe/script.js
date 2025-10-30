function applyLanguage(language) {
  const key = language === "pt" ? "pt" : "en";

  document.querySelectorAll("[data-pt]").forEach((element) => {
    const text = element.getAttribute(`data-${key}`);
    if (text !== null) {
      element.textContent = text;
    }
  });

  if (key === "pt") {
    document.title = "Receita de Bolo de Cenoura";
  } else {
    document.title = "Brazilian Carrot Cake — Recipe";
  }
}
const toggleButton = document.getElementById("translate-toggle");
let currentLanguage = "en";
if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        currentLanguage = currentLanguage === "en" ? "pt" : "en"; // Ternary Operator
        applyLanguage(currentLanguage);
        toggleButton.textContent =
        currentLanguage === "pt" ? "View in English" : "Ver em Português";
    });
}