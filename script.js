const dashboardModes = {
  equilibrado: {
    tag: "Perfil equilibrado",
    signal: "Estado estable",
    description:
      "Un equilibrio razonable entre búsqueda, organización, creación y bienestar digital.",
    organization: "78%",
    creation: "72%",
    wellbeing: "81%",
    reflection:
      "Esta semana he mejorado la forma de guardar archivos, pero todavía necesito usar mejores nombres y reducir duplicados.",
  },
  creativo: {
    tag: "Perfil creativo",
    signal: "Alta producción",
    description:
      "Predomina la creación de contenidos y la experimentación, con margen para mejorar el sistema de orden y archivo.",
    organization: "64%",
    creation: "89%",
    wellbeing: "74%",
    reflection:
      "Genero ideas con facilidad, pero necesito cerrar mejor versiones y no dejar materiales dispersos.",
  },
  organizado: {
    tag: "Perfil organizado",
    signal: "Rutina consolidada",
    description:
      "La prioridad está en clasificar, nombrar bien y planificar tareas con constancia y claridad.",
    organization: "91%",
    creation: "68%",
    wellbeing: "84%",
    reflection:
      "Mantengo el orden con facilidad; mi siguiente paso es dedicar más tiempo a producir contenidos propios.",
  },
};

const tasks = [
  { title: "Renombrar la carpeta del proyecto", detail: "Versión, materia y fecha", done: true },
  { title: "Guardar dos fuentes fiables", detail: "Con etiquetas y breve nota", done: false },
  { title: "Preparar un esquema visual", detail: "Antes de crear la presentación", done: false },
  { title: "Revisar privacidad de una cuenta", detail: "Configuración básica", done: true },
];

const toolCategories = [
  {
    title: "Búsqueda de información",
    description: "Herramientas para localizar, contrastar y filtrar información relevante.",
    items: ["Buscador académico", "Marcadores", "Lectura guiada"],
  },
  {
    title: "Organización",
    description: "Espacios para ordenar tareas, tiempos, prioridades y recordatorios.",
    items: ["Panel de tareas", "Checklist semanal", "Rutina de estudio"],
  },
  {
    title: "Creación",
    description: "Recursos para transformar información en productos propios.",
    items: ["Presentaciones", "Mapas visuales", "Editor de esquemas"],
  },
  {
    title: "Colaboración",
    description: "Canales para coordinarse, pedir ayuda y compartir avances.",
    items: ["Aula virtual", "Documentos compartidos", "Mensajería de clase"],
  },
  {
    title: "Almacenamiento",
    description: "Sistemas para guardar archivos con lógica, versiones y acceso claro.",
    items: ["Carpetas por materia", "Nube del centro", "Archivado por proyectos"],
  },
  {
    title: "Bienestar y seguridad",
    description: "Rutinas y ajustes que ayudan a un uso responsable y sostenible.",
    items: ["Privacidad básica", "Gestión del tiempo", "Pausas y autocuidado"],
  },
];

const folderViews = {
  tecnologia: {
    title: "Tecnología / Proyecto EPA digital",
    description: "Estructura para trabajar un proyecto sin perder entregas, borradores y evidencias.",
    lines: [
      ["01_Brief", "objetivo-del-proyecto.pdf"],
      ["02_Investigacion", "fuentes_filtradas.md"],
      ["03_Borradores", "mapa-epa-v2.png"],
      ["04_Entrega", "presentacion-final.pptx"],
    ],
  },
  recursos: {
    title: "Recursos / Información seleccionada",
    description: "Agrupar enlaces, tutoriales y ejemplos evita búsquedas repetidas y desorden.",
    lines: [
      ["Fuentes", "sitios-confiables.txt"],
      ["Tutoriales", "como-organizar-carpetas.pdf"],
      ["Ejemplos", "modelos-de-esquema.pdf"],
      ["Pendiente", "por-revisar-luego.url"],
    ],
  },
  entregas: {
    title: "Entregas / Evidencias del aprendizaje",
    description: "Separar evidencias finales ayuda a revisar avances y preparar evaluaciones.",
    lines: [
      ["Esquemas", "estructura-idea-clave.pdf"],
      ["Presentaciones", "exposicion-oral-vfinal.pptx"],
      ["Portafolio", "capturas-y-reflexion.docx"],
      ["Autoevaluacion", "exit-ticket-final.pdf"],
    ],
  },
};

const resources = [
  {
    type: "fuente",
    title: "Fuente seleccionada",
    description: "Ejemplo de recurso guardado con criterio, tema definido y utilidad concreta para clase.",
    tag: "Confiable",
  },
  {
    type: "tutorial",
    title: "Tutorial breve",
    description: "Placeholder para una guía rápida sobre cómo ordenar carpetas o nombrar archivos.",
    tag: "Paso a paso",
  },
  {
    type: "ejemplo",
    title: "Ejemplo de buena organización",
    description: "Comparación visual entre una carpeta caótica y una estructura clara y funcional.",
    tag: "Comparativa",
  },
  {
    type: "fuente",
    title: "Recurso para contrastar información",
    description: "Espacio para guardar una fuente revisada antes de incorporarla al trabajo.",
    tag: "Verificar",
  },
  {
    type: "tutorial",
    title: "Microguía de bienestar digital",
    description: "Consejos básicos para equilibrar tiempo de pantalla, concentración y pausas.",
    tag: "Autocuidado",
  },
  {
    type: "ejemplo",
    title: "Modelo de evidencia",
    description: "Plantilla orientativa de esquema, mapa visual o portfolio como producto del EPA.",
    tag: "Inspiración",
  },
];

const creationTabs = {
  esquema: {
    title: "Esquema de ideas",
    text: "Sirve para organizar conceptos antes de crear un producto final. Ayuda a separar lo importante, establecer relaciones y preparar mejor una explicación oral.",
    points: ["Jerarquizar ideas", "Reducir dispersión", "Preparar una tarea final"],
    preview: '<div class="preview-stack"><span></span><span></span><span></span><span></span></div>',
  },
  presentacion: {
    title: "Presentación visual",
    text: "Permite comunicar de forma clara lo aprendido, con un diseño limpio, mensajes breves y apoyo visual coherente con la tarea.",
    points: ["Sintetizar", "Comunicar", "Cuidar la legibilidad"],
    preview: '<div class="preview-columns"><span></span><span></span></div>',
  },
  mapa: {
    title: "Mapa visual del EPA",
    text: "Convierte el entorno personal de aprendizaje en una estructura visible: herramientas, rutinas, archivos, colaboración y mejoras necesarias.",
    points: ["Ver el conjunto", "Conectar funciones", "Detectar carencias"],
    preview: '<div class="preview-map"><span></span><span></span><span></span><span></span><span></span></div>',
  },
  portfolio: {
    title: "Evidencia o portfolio",
    text: "Recoge capturas, reflexiones y productos creados para mostrar progreso, justificar decisiones y valorar mejoras futuras.",
    points: ["Documentar", "Reflexionar", "Mostrar progreso"],
    preview: '<div class="preview-notes"><span></span><span></span><span></span></div>',
  },
};

function renderTasks() {
  const container = document.getElementById("task-list");
  container.innerHTML = "";

  tasks.forEach((task) => {
    const row = document.createElement("div");
    row.className = `task-item${task.done ? " done" : ""}`;
    row.innerHTML = `
      <button type="button" aria-label="Cambiar estado de la tarea"></button>
      <div>
        <strong>${task.title}</strong>
        <small>${task.detail}</small>
      </div>
      <span>${task.done ? "Hecha" : "Pendiente"}</span>
    `;

    row.querySelector("button").addEventListener("click", () => {
      task.done = !task.done;
      renderTasks();
    });

    container.appendChild(row);
  });
}

function setMode(mode) {
  const selected = dashboardModes[mode];
  document.getElementById("mode-tag").textContent = selected.tag;
  document.getElementById("mode-signal").textContent = selected.signal;
  document.getElementById("mode-description").textContent = selected.description;
  document.getElementById("metric-organization").textContent = selected.organization;
  document.getElementById("metric-creation").textContent = selected.creation;
  document.getElementById("metric-wellbeing").textContent = selected.wellbeing;
  document.getElementById("reflection-text").textContent = selected.reflection;

  document.querySelectorAll(".mode-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
}

function renderTools() {
  const container = document.getElementById("tool-grid");
  toolCategories.forEach((category) => {
    const article = document.createElement("article");
    article.className = "tool-category";

    const items = category.items
      .map(
        (item) => `
          <button class="tool-item" type="button">
            <strong>${item}</strong>
            <span>Priorizar</span>
          </button>
        `,
      )
      .join("");

    article.innerHTML = `
      <h3>${category.title}</h3>
      <p>${category.description}</p>
      <div class="tool-list">${items}</div>
    `;

    article.querySelectorAll(".tool-item").forEach((button) => {
      button.addEventListener("click", () => button.classList.toggle("active"));
    });

    container.appendChild(article);
  });
}

function renderFolder(name) {
  const view = folderViews[name];
  const container = document.getElementById("folder-preview");
  container.innerHTML = `
    <h3>${view.title}</h3>
    <p>${view.description}</p>
    <div class="folder-lines">
      ${view.lines
        .map(
          ([group, file]) => `
            <div class="file-line">
              <strong>${group}</strong>
              <span>${file}</span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;

  document.querySelectorAll(".folder-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.folder === name);
  });
}

function renderResources(filter) {
  const container = document.getElementById("resource-grid");
  const selected = filter === "todos" ? resources : resources.filter((item) => item.type === filter);

  container.innerHTML = selected
    .map(
      (item) => `
        <article class="resource-card">
          <span class="resource-badge">${item.tag}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="resource-meta">
            <span>${item.type}</span>
            <strong>Guardar</strong>
          </div>
        </article>
      `,
    )
    .join("");

  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
}

function renderCreation(tab) {
  const selected = creationTabs[tab];
  const container = document.getElementById("creation-panel");
  container.innerHTML = `
    <article class="creation-card">
      <div>
        <h3>${selected.title}</h3>
        <p>${selected.text}</p>
        <ul class="mini-list">
          ${selected.points.map((point) => `<li><strong>${point}</strong></li>`).join("")}
        </ul>
      </div>
      <div class="creation-preview">${selected.preview}</div>
    </article>
  `;

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });
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

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => renderCreation(button.dataset.tab));
});

document.querySelectorAll(".canvas-chip").forEach((button) => {
  button.addEventListener("click", () => setCanvas(button.dataset.canvas));
});

renderTasks();
renderTools();
setMode("equilibrado");
renderFolder("tecnologia");
renderResources("todos");
renderCreation("esquema");
setCanvas("all");
