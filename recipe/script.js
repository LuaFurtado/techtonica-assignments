document.addEventListener("DOMContentLoaded", () => {
  /**
   * Aplica a linguagem desejada nos elementos com atributos data-*
   * @param {string} lang 'pt' ou 'en'
   */
  function applyLanguage(lang) {
    const key = lang === "pt" ? "pt" : "en";

    // Atualiza conteúdo textual diretamente (data-pt / data-en)
    document.querySelectorAll("[data-pt]").forEach((el) => {
      const text = el.getAttribute(`data-${key}`);
      if (text != null) el.textContent = text;
    });

    // Lista de atributos a serem traduzidos dinamicamente
    const attrMappings = [
      { suffix: "placeholder", attr: "placeholder" },
      { suffix: "alt", attr: "alt" },
      { suffix: "title", attr: "title" }
    ];

    // Aplica os atributos com base no idioma
    attrMappings.forEach(({ suffix, attr }) => {
      document.querySelectorAll(`[data-pt-${suffix}]`).forEach((el) => {
        const value = el.getAttribute(`data-${key}-${suffix}`);
        if (value != null) el.setAttribute(attr, value);
      });
    });

    console.log(`Idioma aplicado: ${key.toUpperCase()}`);
  }

  // Área de tradução (ou body como fallback)
  const area = document.getElementById("translate-area") || document.body;
  const btn = document.getElementById("translate-toggle");

  // Detecta se há suporte a hover (desktop) ou não (mobile)
  const hasHover = window.matchMedia("(hover: hover)").matches;

  // Idioma inicial, detectando do navegador (opcional)
  let current = navigator.language.startsWith("pt") ? "pt" : "en";
  applyLanguage(current);

  if (hasHover) {
    // DESKTOP: mouse sobre -> PT | mouse fora -> EN
    area.addEventListener("mouseenter", () => applyLanguage("pt"));
    area.addEventListener("mouseleave", () => applyLanguage("en"));
  } else if (btn) {
    // MOBILE: alterna com botão
    btn.setAttribute("aria-pressed", current === "pt" ? "true" : "false");
    btn.textContent = current === "pt" ? "Ver em Inglês" : "Ver em Português";

    btn.addEventListener("click", () => {
      current = current === "en" ? "pt" : "en";
      applyLanguage(current);
      btn.textContent = current === "pt" ? "Ver em Inglês" : "Ver em Português";
      btn.setAttribute("aria-pressed", current === "pt" ? "true" : "false");
    });
  }
});

