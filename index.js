/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

function copiarEmail() {
  const email = "ContactMapml@protonmail.com";

  navigator.clipboard.writeText(email).then(() => {
    mostrarMensaje("Email copiado al portapapeles");
  });
}

function mostrarMensaje(texto) {
  let msg = document.getElementById("email-feedback");

  if (!msg) {
    msg = document.createElement("div");
    msg.id = "email-feedback";
    msg.textContent = texto;

    msg.style.position = "fixed";
    msg.style.bottom = "30px";
    msg.style.right = "30px";
    msg.style.padding = "10px 16px";
    msg.style.background = "#111";
    msg.style.color = "#fff";
    msg.style.borderRadius = "6px";
    msg.style.fontSize = "14px";
    msg.style.opacity = "0";
    msg.style.transition = "opacity 0.3s ease";
    msg.style.zIndex = "9999";

    document.body.appendChild(msg);
  }

  msg.style.opacity = "1";

  setTimeout(() => {
    msg.style.opacity = "0";
  }, 2000);
}

const translations = {
  en: {
    contact:
      "If you are interested in video game development, cybersecurity, or collaboration, feel free to reach out."
  },
  es: {
    contact:
      "Si te interesan los videojuegos, la ciberseguridad o colaborar, no dudes en contactarme."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  // Guardar preferencia
  localStorage.setItem("lang", lang);

  // Estado activo
  document.querySelectorAll(".lang-switcher button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang");
  const browserLang = navigator.language.startsWith("es") ? "es" : "en";
  const defaultLang = savedLang || browserLang;

  setLanguage(defaultLang);

  document.querySelectorAll(".lang-switcher button").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
});
