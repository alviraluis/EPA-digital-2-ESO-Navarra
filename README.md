# Mi EPA digital

`Mi EPA digital` es una mini web estática en español diseñada como **beta demostrativa** de un entorno personal de aprendizaje digital del alumnado. Presenta de forma visual y simplificada el concepto de EPA/PLE dentro de un proyecto de innovación educativa para 2.º de ESO en Tecnología y Digitalización.

El recurso principal del proyecto académico sigue siendo el **Genially evaluable**. Esta web actúa como ampliación opcional, apoyo visual y escaparate complementario para presentación o difusión.

## Qué muestra esta versión

- Una explicación breve de qué es un EPA/PLE.
- Una demo principal más simple y fácil de recorrer.
- Ejemplos visuales de herramientas, archivos, recursos y bienestar digital.
- Un canvas resumido del entorno personal de aprendizaje.
- Un diseño más alineado con una estética institucional clara, sobria y legible.

## Qué no pretende ser

- No es una plataforma educativa real.
- No tiene backend, autenticación ni base de datos.
- No incorpora persistencia ni funcionalidades profundas.
- No sustituye al Genially ni es imprescindible para aplicar el proyecto.

## Estructura del proyecto

```text
EPA-digital-2-ESO-Navarra/
├─ assets/
│  └─ logo-ui1.png
├─ index.html
├─ styles.css
├─ script.js
├─ README.md
├─ .gitignore
└─ PEC/                # Solo contexto local de lectura. No forma parte del producto público.
```

## Ejecución local

Puedes abrir `index.html` directamente en el navegador o usar un servidor local simple:

```bash
python -m http.server 8000
```

Después abre:

```text
http://localhost:8000
```

## Despliegue en GitHub Pages

1. Sube el repositorio a GitHub.
2. Ve a `Settings > Pages`.
3. Selecciona `Deploy from a branch`.
4. Elige la rama `main` y la carpeta `/ (root)`.
5. Guarda y espera a que GitHub Pages publique el sitio.

## Decisión técnica

Se mantiene una solución de **HTML + CSS + JavaScript** sin framework para facilitar mantenimiento, comprensión, despliegue y estabilidad en GitHub Pages.

## Límites deliberados del proyecto

- La interactividad es ligera y demostrativa.
- Los contenidos son simulados o placeholder intencional.
- La web está pensada para explicar el concepto con rapidez, no para operar como una herramienta real.

## Nota sobre `PEC/`

La carpeta `PEC/` se ha usado únicamente como contexto interno de lectura para ajustar tono, enfoque pedagógico y selección de funcionalidades. No forma parte del producto público y queda excluida mediante `.gitignore`.
