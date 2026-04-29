# Meraki Acreativa

Landing page estática para **Meraki Acreativa**, una agencia enfocada en marcas personales, contenido, comunidad y estrategia digital.

El sitio está construido con HTML, CSS y JavaScript vanilla. No requiere framework, build step ni instalación de dependencias.

## Estructura

| Archivo | Descripción |
| --- | --- |
| `index.html` | Página principal de la landing. Contiene el contenido, secciones, SEO base y estructura semántica. |
| `styles.css` | Estilos visuales, responsive, animaciones, estados de foco y soporte para `prefers-reduced-motion`. |
| `script.js` | Interacciones: menú móvil, animaciones al hacer scroll y lógica del quiz de diagnóstico. |
| `robots.txt` | Reglas básicas para permitir rastreo de buscadores. |
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
- Datos estructurados `Organization` con el teléfono real de contacto.
- Favicon inline.
- CSS y JavaScript separados para mejor mantenimiento.
- Menú móvil accesible con `aria-expanded`.
- Enlaces externos protegidos con `rel="noopener noreferrer"`.
- Estados de foco visibles para teclado.
- `skip-link` para saltar al contenido principal.
- Quiz con `progressbar` accesible.
- Soporte para usuarios con reducción de movimiento activada.
- Ajustes responsive del hero para evitar que se rompa en desktop, laptop y móvil.
- `robots.txt` básico para permitir rastreo.
- Google Fonts reducido a los pesos usados y cargado sin bloquear el render inicial.
- Listener de scroll optimizado con `requestAnimationFrame`.
- Animación flotante de WhatsApp movida a `transform`/`opacity` para evitar animar `box-shadow`.
- Contraste del copyright del footer corregido.

## Pendientes antes de publicar

- Número real de WhatsApp configurado: `+53 63284262`.
- Añadir URLs reales de Instagram y TikTok.
- Añadir una imagen real para compartir en redes y completar `og:image`.
- Añadir dominio final para completar `canonical`, `og:url`, `twitter:image` y `sitemap.xml`.
- Configurar cache de larga duración desde el hosting/CDN si se quiere mejorar la auditoría de cache. GitHub Pages suele servir CSS/JS con TTL corto.
- Revisar el copyright del footer si se quiere mantener el año fijo.
- Sustituir testimonios, métricas y casos por datos reales o verificables.

## Notas de mantenimiento

- Edita el contenido textual en `index.html`.
- Edita diseño, responsive y animaciones en `styles.css`.
- Edita comportamiento e interacciones en `script.js`.
- El número de WhatsApp está configurado como `+53 63284262`; en enlaces `wa.me` se usa `5363284262` sin espacios ni signo `+`.
- Mantener `old.html` como respaldo mientras se valida la nueva versión.
