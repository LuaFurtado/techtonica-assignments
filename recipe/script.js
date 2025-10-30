function applyLanguage(language) {
  const languageKey = language === "pt" ? "pt" : "en";

  document.querySelectorAll("[data-pt]").forEach((element) => {
    const translatedText = element.getAttribute(`data-${languageKey}`);
    if (translatedText != null) element.textContent = translatedText;
  });

  console.log(`Idioma aplicado: ${languageKey.toUpperCase()}`);
}
const attributesToTranslate = [
  { attributeSuffix: "placeholder", attributeName: "placeholder" },
  { attributeSuffix: "alt", attributeName: "alt" },
  { attributeSuffix: "title", attributeName: "title" }
];

attributesToTranslate.forEach(({ attributeSuffix, attributeName }) => {
  document.querySelectorAll(`[data-pt-${attributeSuffix}]`).forEach((element) => {
    const translatedAttribute = element.getAttribute(`data-${languageKey}-${attributeSuffix}`);
    if (translatedAttribute != null) element.setAttribute(attributeName, translatedAttribute);
  });
});
