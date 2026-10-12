# Plan: linux-command-manual

## Resumen
Manual interactivo de comandos Linux en HTML5, con estilos y JavaScript para búsqueda en vivo y navegación entre comandos organizados por categorías.

## Objetivos
- [x] Crear una referencia rápida para comandos Linux comunes.
- [x] Implementar un buscador en vivo para filtrar comandos al escribir.
- [x] Permitir navegación fluida entre categorías de comandos.
- [x] Diseño responsive y sin dependencias externas.
- [x] Optimización completa de SEO, accesibilidad y meta etiquetas.

## 🏗️ Arquitectura

- **Patrón**: MPA (Multi Page Application) con múltiples HTML interconectados, buscador cliente y navegación por categorías.

```text
linux-command-manual/
├── index.html                  # Portada y buscador global
├── commands/                   # Páginas por categoría técnica
│   ├── compression.html        # tar, gzip, zip, xz...
│   ├── file-management.html    # ls, cp, mv, rm, chmod...
│   ├── networking.html         # ping, ssh, curl, ip, netstat...
│   ├── process-management.html # ps, top, kill, htop, systemctl...
│   ├── search.html             # grep, find, awk, sed...
│   ├── system-info.html        # uname, df, free, uptime...
│   └── users-permissions.html  # useradd, passwd, sudo, chown...
├── css/
│   └── styles.css              # Estilos compartidos y responsive design
├── js/
│   └── script.js               # Buscador en vivo y navegación interactiva
└── plan.md
```

## 🧠 Paradigma de Programación

- **Imperativo/Procedimental + Event-Driven**
- Las funciones de búsqueda y filtrado son **imperativas** (recorren el DOM y muestran/ocultan elementos).
- La navegación entre páginas y la interactividad son **event-driven** (`input`, `keyup`, `click`).

---

## 🌐 Propósito de Visibilidad y Destino Remoto

- **Visibilidad**: `Público (Open Source / Portafolio)`.
- **Plataforma Remota Asignada**: `GitHub`.
- **Plataforma de Despliegue CI/CD**: `GitHub Pages` / `Cloudflare Pages`.
- **Justificación**: Guía técnica de comandos de Linux interactiva y abierta con 7 categorías y buscador en vivo sin dependencias; óptima para GitHub Pages.

---

> ⚠️ **Auditoría de UI / DESIGN.md:** La interfaz actual no cumple con las directrices visuales de [DESIGN.md](../DESIGN.md) (requiere paleta HSL, Google Fonts modernas y profundidad/glassmorphism). Pendiente refactor visual.
## Estado actual
- Estado: ✅ **Completado**
- 7 categorías completas con más de 50 comandos explicados con sintaxis, banderas y ejemplos de producción.
- Buscador en vivo con resaltado instantáneo y atajo de volver arriba (*Back to top*).

## Tareas realizadas
- [x] Crear todas las páginas HTML para las categorías de comandos.
- [x] Rellenar cada categoría con sintaxis, opciones y ejemplos reales.
- [x] Implementar la lógica completa de búsqueda en `js/script.js`.
- [x] Asegurar la navegación entre comandos y categorías.
- [x] Verificar la correcta carga de estilos y scripts.
- [x] Mejorar el SEO, accesibilidad ARIA y tipografías.

## Stack / Tecnologías
- HTML5, CSS3
- Vanilla JavaScript
