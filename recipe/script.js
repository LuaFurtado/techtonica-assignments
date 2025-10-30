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
