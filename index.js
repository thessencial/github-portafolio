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
      "Projects",
    projectDescription_1:
      "Platformer 2D like Super Meat Boy",
    projectDescription_1_1:
      "Programmer AI",
    projectDescription_1_2:
      "Creator of some VFX and shaders",
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
    projectDescription_5:
      "Graphic adventure RPG for mobile devices",
    projectDescription_5_1:
      "Programmer",
    projectDescription_5_2:
      "Tester",
    projectDescription_5_3:
      "Debugger",
    work_:
      "Work",
    about_:
      "About Me",
    about_Description_1:
      "Video Game AI Programmer and Technical Artist with a strong foundation in programming, technical art, and visual optimization.",
    about_Description_2:
      "Experienced in designing AI behaviors, integrating shaders, creating VFX, and developing systems that connect art and gameplay smoothly within the game engine. Passionate about video games, cybersecurity, and continuous learning.",
    about_Description_3:
      "Known for being responsible, autonomous, and attentive, with strong communication skills and the ability to work effectively in a team. Enjoys creating interactive experiences, solving problems, and contributing creative ideas that enhance the quality and potential of a project.",
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
      "Proyectos",
    projectDescription_1:
      "Plataformero 2D como Super Meat Boy",
    projectDescription_1_1:
      "Programar IA",
    projectDescription_1_2:
      "Creador de algunos VFX y shaders",
    projectDescription_1_3:
      "Solucionar problemas",
    projectDescription_2:
      "Hardcore Shooter",
    projectDescription_2_1:
      "Artista Técnico",
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
      "Artista Técnico",
    projectDescription_4:
      "Aventura narrativa en 2D ambientada en la Cataluña franquista tras la Guerra Civil",
    projectDescription_4_1:
      "Programador",
    projectDescription_4_2:
      "Artista Tecnico",
    projectDescription_5:
      "Aventura gráfica RPG para dispositivos móviles",
    projectDescription_5_1:
      "Programador",
    projectDescription_5_2:
      "Tester",
    projectDescription_5_3:
      "Debugger",
    work_:
      "Trabajo",
    about_:
      "Sobre Mi",
    about_Description_1:
      "Programador especializado en inteligencia artificial para videojuegos y Technical Artist, con una sólida base en programación, arte técnico y optimización visual.",
    about_Description_2:
      "Experiencia en el diseño de comportamientos de IA, integración de shaders, creación de VFX y desarrollo de sistemas que conectan de forma fluida la parte artística con la mecánica dentro del motor del juego. Me apasionan los videojuegos, la ciberseguridad y el aprendizaje continuo.",
    about_Description_3:
      "Soy una persona responsable, autónoma y atenta, con facilidad para comunicarme y trabajar en equipo. Disfruto creando experiencias interactivas, resolviendo problemas y aportando ideas que mejoren la calidad y el potencial creativo de un proyecto.",
    contact_:
      "Siempre estoy abierto a oportunidades de aprendizaje, retos creativos y conversaciones que ayuden a crear mejores juegos y experiencias digitales. La forma más rápida de ponerse en contacto conmigo es por correo electrónico, y haré todo lo posible por responderle lo antes posible.",
    send_Email:
      "Envía email por Protonmail",
    copy_Email:
      "Copiar email"
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
