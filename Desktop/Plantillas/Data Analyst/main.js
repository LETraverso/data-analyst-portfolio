(() => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  // ====== CONFIG (EDITAR ESTO) ======
  const PROFILE = {
    name: "Julieta Delafuente",
    location: "Argentina",
    email: "julieta.delafuente@email.com",
    linkedin: "https://www.linkedin.com/in/tu-link/",
    github: "https://github.com/tu-usuario",
    cvUrl: "https://drive.google.com/", // pegá tu link al CV (Drive / PDF)
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
        "Tip: este sitio es bilingüe (ES/EN) y tiene modo oscuro/claro, pensado para entrevistas y reclutadores.",

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
        "Me gusta transformar datos en decisiones: desde el modelado y limpieza, hasta el dashboard final.",
      about_card1_title: "Cómo trabajo",
      about_card1_text:
        "Primero entiendo el objetivo, defino métricas y valido la fuente. Después analizo, visualizo y comunico resultados con claridad.",
      about_card2_title: "Qué aporto",
      about_card2_text:
        "Estructura, criterio y foco en impacto. Documentación, reproducibilidad y dashboards orientados a negocio.",

      skills_title: "Skills",
      skills_subtitle:
        "Stack técnico y metodología orientados a resolver problemas de negocio a partir de datos.",
      skills_stack_title: "Stack",
      skills_methods_title: "Método",
      skills_m1: "Definición de métricas y KPIs",
      skills_m2: "Limpieza y validación de datos",
      skills_m3: "Dashboards y reporting ejecutivo",
      skills_m4: "Experimentación básica (A/B)",

      projects_title: "Proyectos",
      projects_subtitle:
        "3 ejemplos (podés reemplazar por los reales). Cada uno con contexto + resultado.",
      projects_view: "Ver",

      p1_title: "Dashboard de ventas y rendimiento",
      p1_desc:
        "Modelado en SQL + Power BI para seguimiento de ingresos, margen y cohortes por canal.",
      p1_result: "Resultado: reporting semanal + alertas de caída de KPIs.",

      p2_title: "Análisis de experimento A/B",
      p2_desc:
        "Evaluación estadística simple y segmentación para detectar impacto por audiencia.",
      p2_result: "Resultado: recomendación basada en evidencia para rollout.",

      p3_title: "Control de calidad de datos",
      p3_desc:
        "Checks y reglas para detectar outliers, faltantes y duplicados antes del dashboard.",
      p3_result: "Resultado: menos errores y mayor confianza en métricas.",

      exp_title: "Experiencia",
      exp_subtitle:
        "Podés listar trabajos, prácticas, freelance o formación con proyectos.",
      exp1_role: "Proyecto • Dashboard Ejecutivo",
      exp1_time: "2025",
      exp1_desc:
        "Construcción de KPIs, modelo de datos y visualizaciones orientadas a dirección.",
      exp2_role: "Proyecto • Automatización de reportes",
      exp2_time: "2025",
      exp2_desc:
        "Pipeline simple para actualizar métricas y reducir tareas manuales recurrentes.",
      exp3_role: "Formación • Data Analytics",
      exp3_time: "2024–2025",
      exp3_desc:
        "SQL, Python, visualización y storytelling aplicado con casos reales.",

      contact_title: "Contacto",
      contact_subtitle:
        "Si querés conocer mis proyectos o coordinar una entrevista, escribime.",
      contact_card_title: "Hablemos",
      contact_card_text:
        "Respuesta rápida por email. También podés ver LinkedIn y GitHub.",
      contact_email: "Enviar email",

      mini_stack_k: "Stack",
      mini_stack_v: "SQL • Python • Power BI • Excel",
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
        "Tip: bilingual (ES/EN) + dark/light mode, designed for recruiters and interviews.",

      cta_primary: "Contact",
      cta_secondary: "View projects",
      cta_cv: "View CV",

      meta_location_k: "Location",
      meta_focus_k: "Focus",
      meta_focus_v: "Insights • KPIs • Visualization",
      meta_open_k: "Open to",
      meta_open_v: "Remote / Hybrid",

      about_title: "About",
      about_subtitle:
        "I turn data into decisions: from modeling and cleaning to the final dashboard.",
      about_card1_title: "How I work",
      about_card1_text:
        "I start by clarifying the goal, defining metrics, and validating sources. Then I analyze, visualize, and communicate results clearly.",
      about_card2_title: "What I deliver",
      about_card2_text:
        "Structure and impact. Documentation, reproducibility, and business-oriented dashboards.",

      skills_title: "Skills",
      skills_subtitle:
        "Technical stack and methodology focused on solving business problems through data.",
      skills_stack_title: "Stack",
      skills_methods_title: "Method",
      skills_m1: "Metric definition and KPIs",
      skills_m2: "Data cleaning and validation",
      skills_m3: "Dashboards and executive reporting",
      skills_m4: "Basic experimentation (A/B)",

      projects_title: "Projects",
      projects_subtitle:
        "3 examples (replace with real ones). Each includes context + outcome.",
      projects_view: "View",

      p1_title: "Sales performance dashboard",
      p1_desc:
        "SQL modeling + Power BI for revenue, margin, and channel/cohort tracking.",
      p1_result: "Outcome: weekly reporting + KPI drop alerts.",

      p2_title: "A/B test analysis",
      p2_desc:
        "Simple statistical evaluation and segmentation to detect impact by audience.",
      p2_result: "Outcome: evidence-based rollout recommendation.",

      p3_title: "Data quality checks",
      p3_desc:
        "Rules to detect outliers, missing values, and duplicates before dashboards.",
      p3_result: "Outcome: fewer errors and higher trust in metrics.",

      exp_title: "Experience",
      exp_subtitle:
        "List jobs, internships, freelance, or project-based learning here.",
      exp1_role: "Project • Executive dashboard",
      exp1_time: "2025",
      exp1_desc:
        "KPI design, data model, and leadership-focused visualizations.",
      exp2_role: "Project • Reporting automation",
      exp2_time: "2025",
      exp2_desc:
        "A simple pipeline to refresh metrics and reduce recurring manual work.",
      exp3_role: "Training • Data Analytics",
      exp3_time: "2024–2025",
      exp3_desc:
        "SQL, Python, visualization, and storytelling with real-case practice.",

      contact_title: "Contact",
      contact_subtitle:
        "If you'd like to review my work or schedule an interview, feel free to reach out.",
      contact_card_title: "Let’s talk",
      contact_card_text:
        "Fast reply by email. You can also check LinkedIn and GitHub.",
      contact_email: "Send email",

      mini_stack_k: "Stack",
      mini_stack_v: "SQL • Python • Power BI • Excel",
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

  // Links
  $("#linkedinLink").href = PROFILE.linkedin;
  $("#linkedinBtn").href = PROFILE.linkedin;

  $("#githubLink").href = PROFILE.github;
  $("#cvLink").href = PROFILE.cvUrl;

  const emailHref = `mailto:${PROFILE.email}`;
  $("#emailLink").href = emailHref;
  $("#emailBtn").href = emailHref;

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
      $("#mobileMenu").setAttribute("hidden", "")
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
      `Hola Julieta,\n\nSoy ${name}.\n\n${message}\n\nGracias!`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;

    $("#formHint").textContent =
      document.documentElement.lang === "en"
        ? "Opening your email app..."
        : "Abriendo tu app de email...";
  });
})();
