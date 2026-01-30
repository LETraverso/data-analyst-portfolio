const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

document.addEventListener("DOMContentLoaded", () => {});

// ====== CONFIG (EDITAR ESTO) ======
const PROFILE = {
  name: "Julieta de la Fuente",
  location: "Argentina",
  email: "julidelafuente86@gmail.com",
  linkedin: "https://www.linkedin.com/in/julieta-de-la-fuente/",
  github: "https://github.com/tu-usuario",
  cvUrl: "/assets/cv-julieta.pdf",
};

// Textos por idioma (copy)
const I18N = {
  es: {
    nav_about: "Sobre mí",
    nav_skills: "Skills",
    nav_projects: "Proyectos",
    nav_experience: "Experiencia",
    nav_contact: "Contacto",

    hero_badge: "Portfolio • Analista de Datos",
    hero_title_a: "Datos claros.",
    hero_title_b: "Decisiones con criterio.",
    hero_role: "Analista de Datos",
    hero_subtitle:
      "Analizo y visualizo datos para mejorar productos y procesos. Me enfoco en métricas accionables, calidad de datos y comunicación clara para la toma de decisiones.",
    hero_note:
      " Este portfolio presenta proyectos de análisis de datos, con foco en métricas accionables y comunicación clara para la toma de decisiones.",

    cta_primary: "Contactar",
    cta_secondary: "Ver proyectos",
    cta_cv: "Ver CV",

    meta_location_k: "Ubicación",
    meta_focus_k: "Enfoque",
    meta_focus_v: "Resultados • KPIs • Visualización",
    meta_open_k: "Disponible",
    meta_open_v: "Remoto / Híbrido",

    about_title: "Sobre mí",
    about_subtitle:
      "Me gusta transformar datos en decisiones: desde el análisis y la limpieza, hasta la comunicación clara de resultados.",
    about_card1_title: "Cómo trabajo",
    about_card1_text:
      "Primero entiendo el objetivo, defino métricas y valido la fuente. Después analizo, visualizo y comunico resultados con claridad.",
    about_card2_title: "Qué aporto",
    about_card2_text:
      "Estructura, criterio y foco en impacto. Documentación, reproducibilidad y visualización orientada a decisiones.",

    skills_title: "Skills",
    skills_subtitle:
      "Stack técnico y metodología orientados a resolver problemas de negocio a partir de datos.",
    skills_stack_title: "Stack",
    skills_methods_title: "Método",
    skills_m1: "Definición de métricas y KPIs",
    skills_m2: "Limpieza y validación de datos",
    skills_m3: "Comunicación clara de métricas y resultados",
    skills_m4: "Experimentación básica",

    projects_title: "Proyectos",
    projects_subtitle: "Selección de proyectos recientes.",
    projects_view: "Ver",

    p1_title: "Estrategia de copy orientada a resultados",
    p1_desc:
      "Mensajes claros y persuasivos diseñados para guiar al usuario y reforzar la propuesta de valor.",

    p2_title: "Contenido informativo y estructurado",
    p2_desc:
      "Redacción clara y ordenada para presentar información compleja de forma accesible, priorizando comprensión y lectura fluida.",
    p3_title: "Idea para marca y producto",
    p3_desc:
      "Textos alineados a la identidad visual de la marca, enfocados en transmitir valores, sensaciones y coherencia estética.",
    p4_title: "Mensajes persuasivos con enfoque estratégico",
    p4_desc:
      "Textos pensados para conectar con el público, ordenar ideas clave y acompañar objetivos comerciales de forma clara y natural.",
    p5_title: "Índice educativo claro y cercano",
    p5_desc:
      "Redacción enfocada en explicar, guiar y simplificar información, priorizando comprensión, estructura y una lectura fluida.",
    p6_title: "Comunicación alineada a la identidad de marca",
    p6_desc:
      "Mensajes coherentes con el tono visual y conceptual de la marca, orientados a transmitir valores y generar una experiencia consistente.",

    exp_title: "Experiencia",
    exp_subtitle:
      "Experiencia práctica en datos, contenidos y proyectos colaborativos.",
    exp1_role: "Análisis de Datos",
    exp1_desc:
      "Análisis y visualización de datos para la toma de decisiones, elaboración de dashboards e informes con enfoque en métricas clave y optimización de resultados.",
    exp2_role: "Copywriting / Contenidos",
    exp2_desc:
      "Creación de copys estratégicos para marcas y proyectos digitales, enfocados en conversión, posicionamiento y construcción de identidad de marca.",
    exp3_role: "Pasantías / Experiencia Formativa",
    exp3_desc:
      "Pasantía orientada al análisis, investigación y producción de contenidos, brindando soporte a equipos profesionales y participando en proyectos reales con impacto operativo.",

    contact_title: "Contacto",
    contact_subtitle:
      "Si querés conocer mis proyectos o coordinar una entrevista, escribime.",
    contact_card_title: "Hablemos",
    contact_card_text:
      "Respuesta rápida por email. También podés ver LinkedIn y GitHub.",
    contact_email: "Enviar email",

    mini_stack_k: "Stack",
    mini_stack_v: "SQL • Power BI • Excel",
    mini_interest_k: "Intereses",
    mini_interest_v: "Producto • Métricas • Data Quality",

    form_name: "Nombre",
    form_message: "Mensaje",
    form_send: "Preparar email",
    form_hint: "Esto prepara un email con tu mensaje (sin servidor).",

    footer_top: "Volver arriba ↑",
  },

  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_contact: "Contact",

    hero_badge: "Portfolio • Data Analyst",
    hero_title_a: "Clear data.",
    hero_title_b: "Better decisions.",
    hero_role: "Data Analyst",
    hero_subtitle:
      "I analyze, visualize, and communicate insights to improve products and processes. I focus on actionable metrics, data quality, and storytelling.",
    hero_note:
      "This portfolio showcases data analysis projects focused on actionable metrics, clear insights, and informed decision-making.",

    cta_primary: "Contact",
    cta_secondary: "View projects",
    cta_cv: "View CV",

    meta_location_k: "Location",
    meta_focus_k: "Focus",
    meta_focus_v: "Insights • KPIs • Visualization",
    meta_open_k: "Open to",
    meta_open_v: "Remote / Hybrid",

    about_title: "About",
    about_subtitle: "I turn data into clear, actionable decisions.",
    about_card1_title: "How I work",
    about_card1_text:
      "I start by clarifying the goal, defining metrics, and validating sources. Then I analyze, visualize, and communicate results clearly.",
    about_card2_title: "What I deliver",
    about_card2_text:
      "Structure, clarity, and impact. Clear communication of metrics and results.",

    skills_title: "Skills",
    skills_subtitle:
      "Technical stack and methodology focused on solving business problems through data.",
    skills_stack_title: "Stack",
    skills_methods_title: "Method",
    skills_m1: "Metric definition and KPIs",
    skills_m2: "Data cleaning and validation",
    skills_m3: "Clear communication of metrics and results",
    skills_m4: "Basic experimentation (A/B)",

    projects_title: "Projects",
    projects_subtitle: "A selection of recent projects.",
    projects_view: "View",

    p1_title: "Results-driven copy strategy",
    p1_desc:
      "Clear and persuasive messaging designed to guide users and reinforce the value proposition.",

    p2_title: "Structured and informative content",
    p2_desc:
      "Clear and well-organized writing to present complex information in an accessible way, prioritizing readability and understanding.",

    p3_title: "Brand and product concept development",
    p3_desc:
      "Copy aligned with the brand’s visual identity, focused on conveying values, emotions, and aesthetic consistency.",
    p4_title: "Strategic and persuasive messaging",
    p4_desc:
      "Messaging crafted to connect with the audience, organize key ideas, and support business goals in a clear and natural way.",
    p5_title: "Clear and approachable educational structure",
    p5_desc:
      "Writing focused on explaining, guiding, and simplifying information, prioritizing clarity, structure, and smooth reading flow.",
    p6_title: "Brand-aligned communication",
    p6_desc:
      "Consistent messaging aligned with the brand’s visual and conceptual tone, aimed at conveying values and delivering a cohesive experience.",

    exp_title: "Experience",
    exp_subtitle:
      "Hands-on experience in data, content creation, and collaborative projects.",
    exp1_role: "Data Analysis",
    exp1_desc:
      "Data analysis and visualization to support decision-making, including dashboard and report creation with a focus on key metrics and performance optimization.",
    exp2_role: "Copywriting / Content",
    exp2_desc:
      "Creation of strategic copy for brands and digital projects, focused on conversion, positioning, and building strong brand identity.",
    exp3_role: "Internships / Training Experience",
    exp3_desc:
      "Internship focused on analysis, research, and content production, providing support to professional teams and participating in real projects with operational impact.",

    contact_title: "Contact",
    contact_subtitle:
      "If you'd like to review my work or schedule an interview, feel free to reach out.",
    contact_card_title: "Let’s talk",
    contact_card_text:
      "Fast reply by email. You can also check LinkedIn and GitHub.",
    contact_email: "Send email",

    mini_stack_k: "Stack",
    mini_stack_v: "SQL • Power BI • Excel",
    mini_interest_k: "Interests",
    mini_interest_v: "Product • Metrics • Data Quality",

    form_name: "Name",
    form_message: "Message",
    form_send: "Prepare email",
    form_hint: "This prepares an email message (no server needed).",

    footer_top: "Back to top ↑",
  },
};

// ====== HELPERS ======
const KEY_THEME = "jd_theme";
const KEY_LANG = "jd_lang";

const setTheme = (mode) => {
  const isLight = mode === "light";
  if (isLight) document.documentElement.setAttribute("data-theme", "light");
  else document.documentElement.removeAttribute("data-theme");

  // sync aria
  $("#themeToggle")?.setAttribute("aria-pressed", String(isLight));
  $("#themeToggle_m")?.setAttribute("aria-pressed", String(isLight));
};

const setLang = (lang) => {
  const dict = I18N[lang] || I18N.es;

  $$("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (k in dict) el.textContent = dict[k];
  });

  // Active state on flags
  const setActive = (btn, active) => {
    if (!btn) return;
    btn.classList.toggle("is-active", active);
  };
  setActive($("#langES"), lang === "es");
  setActive($("#langEN"), lang === "en");
  setActive($("#langES_m"), lang === "es");
  setActive($("#langEN_m"), lang === "en");

  document.documentElement.lang = lang;
};

// ====== INIT ======
$("#year").textContent = new Date().getFullYear();
$("#locationValue").textContent = PROFILE.location;

// ====== INIT ======
const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const locEl = $("#locationValue");
if (locEl) locEl.textContent = PROFILE.location;

// Links
const linkedinLink = $("#linkedinLink");
if (linkedinLink) linkedinLink.href = PROFILE.linkedin;

const linkedinBtn = $("#linkedinBtn");
if (linkedinBtn) linkedinBtn.href = PROFILE.linkedin;

const githubLink = $("#githubLink");
if (githubLink) githubLink.href = PROFILE.github;

const emailHref = `mailto:${PROFILE.email}`;
const emailLink = $("#emailLink");
if (emailLink) emailLink.href = emailHref;

const emailBtn = $("#emailBtn");
if (emailBtn) emailBtn.href = emailHref;

// Defaults (saved or fallback)
const savedTheme = localStorage.getItem(KEY_THEME) || "dark";
const savedLang = localStorage.getItem(KEY_LANG) || "es";
setTheme(savedTheme);
setLang(savedLang);

// Theme toggles (desktop + mobile)
const bindThemeToggle = (id) => {
  $(id)?.addEventListener("click", () => {
    const current =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark";
    const next = current === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem(KEY_THEME, next);
  });
};
bindThemeToggle("#themeToggle");
bindThemeToggle("#themeToggle_m");

// Language buttons (desktop + mobile)
const bindLang = (id, lang) => {
  $(id)?.addEventListener("click", () => {
    setLang(lang);
    localStorage.setItem(KEY_LANG, lang);
  });
};
bindLang("#langES", "es");
bindLang("#langEN", "en");
bindLang("#langES_m", "es");
bindLang("#langEN_m", "en");

// Mobile menu
$("#burger")?.addEventListener("click", () => {
  const mobile = $("#mobileMenu");
  const isHidden = mobile.hasAttribute("hidden");
  if (isHidden) mobile.removeAttribute("hidden");
  else mobile.setAttribute("hidden", "");
});

$$("#mobileMenu a").forEach((a) => {
  a.addEventListener("click", () =>
    $("#mobileMenu").setAttribute("hidden", ""),
  );
});

// Contact form: prepares email (no backend)
$("#contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const name = form.name.value.trim();
  const message = form.message.value.trim();

  const subject = encodeURIComponent("Consulta / Interview");
  const body = encodeURIComponent(
    `Hola Julieta,\n\nSoy ${name}.\n\n${message}\n\nGracias!`,
  );
  window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;

  $("#formHint").textContent =
    document.documentElement.lang === "en"
      ? "Opening your email app..."
      : "Abriendo tu app de email...";
});
