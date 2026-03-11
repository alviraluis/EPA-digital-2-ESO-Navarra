# Mi EPA digital

`Mi EPA digital` es una mini web estática en español diseñada como **beta demostrativa** de un entorno personal de aprendizaje digital del alumnado. Su función es servir como complemento visual de un proyecto de innovación educativa centrado en 2.º de ESO, en la materia de Tecnología y Digitalización, dentro del Bloque D sobre digitalización del entorno personal de aprendizaje.

El recurso principal del proyecto académico es un **Genially evaluable**. Esta web no lo sustituye: actúa como ampliación opcional, escaparate visual y apoyo para presentación, difusión o enlace complementario desde Genially.

## Qué muestra esta demo

- Una landing clara y presentable.
- Una explicación visual de qué es un EPA/PLE.
- Un panel o dashboard demostrativo del estudiante.
- Secciones sobre herramientas, archivos, recursos, creación de contenidos y bienestar digital.
- Un canvas visual del EPA.
- Placeholders elegantes para futuros enlaces, plantillas y tutoriales.

## Qué no pretende ser

- No es una plataforma educativa real.
- No tiene backend, autenticación ni base de datos.
- No incluye lógica compleja ni persistencia real.
- No pretende ser imprescindible para implementar el proyecto en el aula.

## Estructura del proyecto

```text
EPA-digital-2-ESO-Navarra/
+- index.html
+- styles.css
+- script.js
+- README.md
+- .gitignore
+- PEC/                # Solo contexto local de lectura. No forma parte del producto público.
```

## Ejecución local

Al ser una web estática, puede abrirse directamente con doble clic sobre `index.html`.

Si prefieres lanzar un servidor local sencillo:

### Opción 1: con VS Code

Usa una extensión tipo `Live Server` y abre la raíz del proyecto.

### Opción 2: con Python

```bash
python -m http.server 8000
```

Después abre en el navegador:

```text
http://localhost:8000
```

## Despliegue en GitHub Pages

La opción más simple es publicar la raíz del repositorio como sitio estático.

1. Sube el repositorio a GitHub.
2. Ve a `Settings > Pages`.
3. En `Build and deployment`, selecciona `Deploy from a branch`.
4. Elige la rama principal y la carpeta `/ (root)`.
5. Guarda los cambios.
6. GitHub Pages publicará `index.html` como página principal.

## Decisiones técnicas

- Se ha elegido una solución **HTML + CSS + JavaScript** sin framework.
- Motivos:
  - simplicidad;
  - robustez;
  - despliegue directo en GitHub Pages;
  - mantenimiento fácil;
  - muy buena relación entre esfuerzo y resultado visual.

## Límites deliberados del proyecto

- La interactividad es ligera y demostrativa.
- Los datos mostrados son simulados o placeholder.
- No hay persistencia de preferencias ni contenidos.
- El objetivo es visualizar el concepto de EPA/PLE con claridad y elegancia, no construir un producto completo.

## Nota sobre `PEC/`

La carpeta `PEC/` se ha usado únicamente como **contexto interno de lectura** para alinear el tono, el enfoque pedagógico y la estructura conceptual del sitio. No forma parte del producto público y queda excluida mediante `.gitignore`.
