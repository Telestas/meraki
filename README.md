# Meraki Acreativa

Landing page estática para **Meraki Acreativa**, una agencia enfocada en marcas personales, contenido, comunidad y estrategia digital.

El sitio está construido con HTML, CSS y JavaScript vanilla. No requiere framework, build step ni instalación de dependencias.

## Estructura

| Archivo | Descripción |
| --- | --- |
| `index.html` | Página principal de la landing. Contiene el contenido, secciones, SEO base y estructura semántica. |
| `styles.css` | Estilos visuales, responsive, animaciones, estados de foco y soporte para `prefers-reduced-motion`. |
| `script.js` | Interacciones: menú móvil, animaciones al hacer scroll y lógica del quiz de diagnóstico. |
| `old.html` | Respaldo de la versión anterior usada como base de trabajo. |

## Secciones del sitio

- Hero principal con propuesta de valor.
- Servicios.
- Proceso de trabajo.
- Clientes y testimonios.
- Casos de éxito.
- Sobre Meraki.
- Quiz de diagnóstico.
- CTA final.
- Footer con enlaces y redes.
- Botón flotante de WhatsApp.

## Cómo abrirlo localmente

Puedes abrir el archivo directamente en el navegador:

```bash
xdg-open index.html
```

También puedes levantar un servidor local simple:

```bash
python3 -m http.server 8080
```

Luego abre:

```text
http://localhost:8080
```

## Mejoras ya aplicadas

- SEO base con `title`, `meta description`, Open Graph y Twitter Card.
- Favicon inline.
- CSS y JavaScript separados para mejor mantenimiento.
- Menú móvil accesible con `aria-expanded`.
- Enlaces externos protegidos con `rel="noopener noreferrer"`.
- Estados de foco visibles para teclado.
- `skip-link` para saltar al contenido principal.
- Quiz con `progressbar` accesible.
- Soporte para usuarios con reducción de movimiento activada.
- Ajustes responsive del hero para evitar que se rompa en desktop, laptop y móvil.

## Pendientes antes de publicar

- Reemplazar el número placeholder de WhatsApp: `5300000000`.
- Reemplazar los enlaces sociales que todavía usan `#`.
- Añadir una imagen real para compartir en redes y completar `og:image`.
- Revisar el copyright del footer si se quiere mantener el año fijo.
- Sustituir testimonios, métricas y casos por datos reales o verificables.

## Notas de mantenimiento

- Edita el contenido textual en `index.html`.
- Edita diseño, responsive y animaciones en `styles.css`.
- Edita comportamiento e interacciones en `script.js`.
- Si se cambia el número de WhatsApp, buscar `wa.me/5300000000` en el proyecto y reemplazarlo en todos los lugares.
- Mantener `old.html` como respaldo mientras se valida la nueva versión.

