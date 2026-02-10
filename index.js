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
    project:
      "Projects",
    work:
      "Work",
    about:
      "About Me",
    contact:
      "Contact",
    subtitle:
      "Intern / Junior, Programer AI Videogames, Tecnical Artist",
    projects:
      "My Projects",
    projectDescription_1:
      "Platformer 2D like Super Meat Boy",
    projectDescription_1_1:
      "Programmer AI",
    projectDescription_1_2:
      "Cretor of some VFX and shaders",
    projectDescription_1_3:
      "Troubleshooting",
    projectDescription_2:
      "Hardcore Shooter",
    projectDescription_2_1:
      "Technical Artist",
    projectDescription_2_2:
      "Creator of VFX and shaders",
    projectDescription_2_3:
      "Lighting integration",
    projectDescription_2_4:
      "Creator of several artistic environments",
    projectDescription_3:
      "3D Platformer",
    projectDescription_3_1:
      "Programmer",
    projectDescription_3_2:
      "Technical Artist",
    projectDescription_4:
      "2D narrative adventure set in post–Civil War Francoist Catalonia",
    projectDescription_4_1:
      "Programmer",
    projectDescription_4_2:
      "Technical Artist",
    work_:
      "Work",
    about_:
      "About Me",
    about_Description_1:
      "Marc Anton is passionate about video games, cybersecurity and gaining new knowledge. His main motivation is to be able to create videogames as well as to have enough knowledge to be able to help people.",
    about_Description_2:
      "He is very attentive and hardworking, thanks to this he can finish jobs without much difficulty. He has a great imagination to be able to create stories and get more out of a videogame. Marc Anton is constantly learning to keep his knowledge up to date.",
    contact_:
      "I am always open to learning opportunities, creative challenges, and conversations that help build better games and digital experiences. The quickest way to contact me is via email, and I will do my best to get back to you as soon as possible.",
    send_Email:
      "Send email through Protonmail",
    copy_Email:
      "Copy email"
  },
  es: {
    project:
      "Proyectos",
    work:
      "Trabajo",
    about:
      "Sobre Mi",
    contact:
      "Contactar",
    subtitle:
      "Becario/junior, Programador IA en Videojuegos, Artista Técnico",
    projects:
      "Mis proyectos",
    projectDescription_1:
      "Plataformero 2D como Super Meat Boy",
    projectDescription_1_1:
      "Programar IA",
    projectDescription_1_2:
      "Creadord de algunas VFX y shaders",
    projectDescription_1_3:
      "Solucionar problemas",
    projectDescription_2:
      "Hardcore Shooter",
    projectDescription_2_1:
      "Artiscta Técnico",
    projectDescription_2_2:
      "Creador de VFX y shaders",
    projectDescription_2_3:
      "Lighting integration",
    projectDescription_2_4:
      "Creador de varios entornos artísticos",
    projectDescription_3:
      "Plataformero 3D",
    projectDescription_3_1:
      "Programador",
    projectDescription_3_2:
      "Artista Tecnico",
    projectDescription_4:
      "Aventura narrativa en 2D ambientada en la Cataluña franquista tras la Guerra Civil",
    projectDescription_4_1:
      "Programador",
    projectDescription_4_2:
      "Artista Tecnico",
    work_:
      "Trabajo",
    about_:
      "Sobre Mi",
    about_Description_1:
      "Marc Anton le apasionan los videojuegos, la ciberseguridad y adquirir nuevos conocimientos. Su principal motivación es poder crear videojuegos, así como tener los conocimientos suficientes para poder ayudar a la gente.",
    about_Description_2:
      "Es muy atento y trabajador, gracias a esto puede terminar los trabajos sin mucha dificultad. Tiene una gran imaginación para poder crear historias y sacarle más partido a un videojuego. Marc Anton aprende constantemente para mantener al día sus conocimientos.",
    contact_:
      "Siempre estoy abierto a oportunidades de aprendizaje, retos creativos y conversaciones que ayuden a crear mejores juegos y experiencias digitales. La forma más rápida de ponerse en contacto conmigo es por correo electrónico, y haré todo lo posible por responderle lo antes posible.",
    send_Email:
      "Envia email por Protonmail",
    copy_Email:
      "Copia email"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
    
    // Cambiar el enlace del CV según el idioma
    const cvButton = document.getElementById("cv-link");
    if (cvButton) {
      cvButton.href = lang === "es" ? "cv_Spanish.html" : "cv_English.html";
    }

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
