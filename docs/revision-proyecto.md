# Revisión del proyecto — errores y puntos a optimizar

Fecha: 2026-07-06

## Animaciones añadidas

Se creó `src/components/Reveal.jsx`, un wrapper cliente ligero (sin
librería externa) que anima únicamente `opacity` + `transform`
(propiedades de solo-composición, no fuerzan layout/paint):

- Usa `IntersectionObserver` y deja de observar tras el primer disparo
  (la animación ocurre una sola vez por elemento).
- Respeta `prefers-reduced-motion`.
- Si JS no llega a ejecutarse, una regla `.reveal { opacity:1 !important }`
  dentro de un `<noscript>` en `layout.tsx` evita que el contenido quede
  invisible para siempre.
- `rootMargin: '0px 0px -20% 0px'` + `threshold: 0.2` para que Proyectos,
  Sobre mí y Contacto solo se revelen al hacer scroll real hacia ellos,
  no en la carga inicial (ajustado tras feedback).

Aplicado en: `Navbar`, `Hero`, `Projects` (título + cada `ProjectCard`
con stagger), `About` (imagen y texto), `Contact` y en las dos columnas
de `/proyectos/[id]`.

## Errores encontrados

1. **`src/components/NavbarProjects.jsx` está roto y sin usar.**
   Usa `<Image>` sin importarlo de `next/image` (lanzaría
   `ReferenceError` si se renderizara) y el `src` apunta a
   `/public/manualbawebdesigner-logo.svg`, una ruta incorrecta (los
   assets de `public/` se sirven desde la raíz, y ese SVG ni siquiera
   existe ahí, solo en `src/assets/`). Además, no se importa en ningún
   sitio (`grep` solo lo encuentra a sí mismo) — la página de detalle
   de proyecto reimplementa el mismo header a mano. Recomendación:
   eliminarlo o arreglarlo y reutilizarlo en `proyectos/[id]/page.tsx`.

2. **Contraste roto por defecto en `globals.css`.**
   `body { color: var(--foreground) }` con `--foreground:#fdf9f3`
   (crema casi blanco) sobre `--background:#ffffff` deja el texto casi
   invisible si algún elemento no sobreescribe el color explícitamente
   con `text-[var(--color-text)]`. Hoy "funciona" porque todos los
   textos actuales lo sobreescriben, pero es una trampa para cualquier
   texto nuevo.

3. **El "modo oscuro" no oscurece nada.**
   El `@media (prefers-color-scheme: dark)` solo intercambia
   `--background`/`--foreground`, no `--color-text`/`--color-header`.
   Resultado: en modo oscuro el fondo pasa a ser crema claro
   (`#fdf9f3`), no oscuro — solo cambia el color de acento, no crea un
   tema oscuro real.

4. **Mezcla de CSS global y utilidades Tailwind sobre `<body>`.**
   `globals.css` fija `display:flex; align-items:center` en `body`,
   mientras `layout.tsx` aplica `flex flex-col` vía Tailwind al mismo
   elemento. Ahora mismo coexisten sin romperse, pero es frágil: basta
   con que una futura clase Tailwind toque `align-items` para que
   ambas reglas empiecen a pelear según el orden de carga del CSS.

5. **`Footer.jsx` refresca cada segundo un reloj que solo muestra
   minutos.** El `setInterval` está en `1000`ms pero el formato
   (`hour:'2-digit', minute:'2-digit'`) nunca cambia salvo una vez por
   minuto → 59 renders de más por cada actualización visible.

## Puntos a optimizar

- **SEO/metadata incompleta.** `layout.tsx` solo define `title` y
  `description`. Falta `metadataBase`, Open Graph/Twitter card,
  `robots`, y no hay `sitemap.ts`/`robots.ts` — relevante para un
  portfolio freelance que depende de que lo encuentren en Google.
- **Clases Tailwind no canónicas.** El editor marca repetidamente
  `text-[var(--color-text)]` → `text-(--color-text)` (sintaxis Tailwind
  v4) en `Hero`, `About`, `Projects`, `Contact` y la página de detalle.
  Es solo estilo/lint, no rompe nada, pero conviene unificarlo.
- **Imágenes de las tarjetas sin placeholder.** `ProjectCard` no usa
  `placeholder="blur"`; en conexiones lentas las imágenes aparecen de
  golpe. Combinaría bien con la animación de entrada ya añadida.
- **SVGs de LinkedIn/GitHub duplicados a mano en `Navbar.jsx`**
  pudiendo usar `react-icons` (ya es dependencia del proyecto) para
  reducir el markup.
- **Campo `size` muerto en `src/data/stacks.ts`.** Se define en cada
  entrada pero nunca se lee (`Hero`/`About` usan la constante
  `ICON_SIZE` aparte, no `stacks[i].size`).
- **Layout rígido en `proyectos/[id]/page.tsx`.** `h-screen
  overflow-hidden` con scroll solo en la columna derecha puede recortar
  contenido (galería, descripción) en viewports móviles muy bajos,
  donde no hay forma de hacer scroll a la página completa.

No se aplicaron los cambios de esta última sección (son sugerencias);
si quieres que corrija alguno, dímelo y lo hago en un paso aparte.
