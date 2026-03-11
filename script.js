const dashboardModes = {
  claro: {
    tag: "Perfil claro",
    signal: "Uso equilibrado",
    description:
      "Un entorno sencillo, con pocas herramientas, archivos ordenados y criterios básicos de seguridad y bienestar.",
    organization: "82%",
    creation: "68%",
    safety: "79%",
    reflection:
      "Ya sé dónde guardar mis tareas, pero todavía tengo que mejorar cómo nombro archivos y cómo filtro la información.",
    tools: ["Buscador", "Carpetas de clase", "Presentaciones", "Aula del centro", "Notas rápidas"],
  },
  creativo: {
    tag: "Perfil creativo",
    signal: "Más producción",
    description:
      "Predomina la creación de contenidos y la experimentación visual, aunque todavía necesita más orden al guardar y cerrar versiones.",
    organization: "67%",
    creation: "88%",
    safety: "73%",
    reflection:
      "Tengo ideas y produzco mucho, pero necesito simplificar herramientas y no dejar archivos a medias.",
    tools: ["Mapas visuales", "Presentaciones", "Editor de imágenes", "Carpetas de proyecto", "Banco de recursos"],
  },
  ordenado: {
    tag: "Perfil ordenado",
    signal: "Rutina sólida",
    description:
      "Destaca por la organización de carpetas, el control de tareas y la capacidad para recuperar materiales con facilidad.",
    organization: "92%",
    creation: "70%",
    safety: "84%",
    reflection:
      "Mantengo todo claro y localizable; ahora debo dedicar más tiempo a crear productos propios y no solo organizar.",
    tools: ["Checklist semanal", "Carpetas por materia", "Nube del centro", "Calendario visual", "Esquema previo"],
  },
};

const folders = {
  clase: [
    ["Tecnología", "tema-bloque-d.pdf"],
    ["Apuntes", "esquema-epa-digital.docx"],
    ["Recursos", "fuentes-seleccionadas.url"],
  ],
  proyecto: [
    ["01_Brief", "objetivo-del-proyecto.pdf"],
    ["02_Borradores", "mapa-epa-v2.png"],
    ["03_Trabajo final", "presentacion-beta.pptx"],
  ],
  entregas: [
    ["Entrega 1", "diagnostico-inicial.pdf"],
    ["Entrega 2", "mapa-final-epa.pdf"],
    ["Cierre", "autoevaluacion-final.pdf"],
  ],
};

const resources = [
  {
    type: "fuente",
    title: "Fuente fiable guardada",
    text: "Ejemplo de recurso seleccionado porque aporta información útil para la tarea.",
  },
  {
    type: "tutorial",
    title: "Tutorial breve",
    text: "Placeholder elegante para una guía sobre carpetas, nombres de archivo o búsqueda.",
  },
  {
    type: "ejemplo",
    title: "Ejemplo visual",
    text: "Comparación rápida entre una organización caótica y otra clara y funcional.",
  },
  {
    type: "fuente",
    title: "Recurso para contrastar",
    text: "Otro ejemplo de material guardado con etiqueta y criterio antes de usarlo.",
  },
  {
    type: "tutorial",
    title: "Guía de bienestar digital",
    text: "Consejos básicos para combinar tiempo de pantalla, concentración y pausas.",
  },
  {
    type: "ejemplo",
    title: "Modelo de evidencia",
    text: "Plantilla posible para esquema, presentación o mapa del EPA/PLE.",
  },
];

const checks = [
  "Usar contraseñas seguras y no compartirlas.",
  "Nombrar archivos con sentido y evitar duplicados.",
  "Revisar si una fuente merece guardarse antes de acumular enlaces.",
  "Mantener pausas y un uso equilibrado de pantallas.",
];

const modal = document.getElementById("classroom-modal");
const loginView = document.getElementById("classroom-login-view");
const appView = document.getElementById("classroom-app-view");
const loginForm = document.getElementById("classroom-login-form");
const loginError = document.getElementById("login-error");
const usernameInput = document.getElementById("demo-username");
const passwordInput = document.getElementById("demo-password");

function normalizeUser(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function setMode(mode) {
  const selected = dashboardModes[mode];
  document.getElementById("mode-tag").textContent = selected.tag;
  document.getElementById("mode-signal").textContent = selected.signal;
  document.getElementById("mode-description").textContent = selected.description;
  document.getElementById("metric-organization").textContent = selected.organization;
  document.getElementById("metric-creation").textContent = selected.creation;
  document.getElementById("metric-safety").textContent = selected.safety;
  document.getElementById("reflection-text").textContent = selected.reflection;

  const toolContainer = document.getElementById("tool-pills");
  toolContainer.innerHTML = selected.tools
    .map((tool, index) => `<span class="tool-pill${index < 2 ? " highlight" : ""}">${tool}</span>`)
    .join("");

  document.querySelectorAll(".mode-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
}

function renderFolder(name) {
  const container = document.getElementById("folder-preview");
  container.innerHTML = folders[name]
    .map(
      ([group, file]) => `
        <div class="folder-line">
          <strong>${group}</strong>
          <span>${file}</span>
        </div>
      `,
    )
    .join("");

  document.querySelectorAll(".folder-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.folder === name);
  });
}

function renderResources(filter) {
  const selected = filter === "todos" ? resources : resources.filter((item) => item.type === filter);
  document.getElementById("resource-grid").innerHTML = selected
    .map(
      (item) => `
        <article class="resource-card">
          <span class="resource-type">${item.type}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");

  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
}

function renderChecks() {
  document.getElementById("check-list").innerHTML = checks
    .map(
      (item) => `
        <li>
          <span class="check-dot"></span>
          <span>${item}</span>
        </li>
      `,
    )
    .join("");
}

function setCanvas(zone) {
  document.querySelectorAll(".canvas-card").forEach((card) => {
    const active = zone === "all" || card.dataset.zone === zone;
    card.classList.toggle("focused", active && zone !== "all");
    card.classList.toggle("dimmed", !active);
  });

  document.querySelectorAll(".canvas-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.canvas === zone);
  });
}

function openClassroom() {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  loginView.hidden = false;
  appView.hidden = true;
  loginForm.reset();
  loginError.hidden = true;
  usernameInput.focus();
}

function closeClassroom() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function loginToDemo(event) {
  event.preventDefault();

  const user = normalizeUser(usernameInput.value);
  const password = passwordInput.value.trim();
  const isValidUser = user === "innovacion_bajabapec";

  if (!isValidUser || password !== "12345") {
    loginError.hidden = false;
    return;
  }

  loginError.hidden = true;
  loginView.hidden = true;
  appView.hidden = false;
  setMode("claro");
  renderFolder("clase");
  renderResources("todos");
  renderChecks();
}

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

document.querySelectorAll(".mode-chip").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

document.querySelectorAll(".folder-chip").forEach((button) => {
  button.addEventListener("click", () => renderFolder(button.dataset.folder));
});

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => renderResources(button.dataset.filter));
});

document.querySelectorAll(".canvas-chip").forEach((button) => {
  button.addEventListener("click", () => setCanvas(button.dataset.canvas));
});

document.getElementById("open-classroom").addEventListener("click", openClassroom);
document.getElementById("open-classroom-secondary").addEventListener("click", openClassroom);
document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeClassroom);
});
document.getElementById("logout-demo").addEventListener("click", () => {
  loginView.hidden = false;
  appView.hidden = true;
  loginForm.reset();
  usernameInput.focus();
});
loginForm.addEventListener("submit", loginToDemo);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeClassroom();
  }
});

setCanvas("all");
