# Cómo añadir una entrada al blog

1. Crea un archivo `.md` nuevo en esta carpeta (`content/blog/`). El nombre
   del archivo (sin `.md`) es la URL de la entrada: `mi-entrada.md` →
   `/blog/mi-entrada`.
2. Empieza el archivo con esta cabecera (frontmatter), rellenando tus datos:

   ```md
   ---
   title: "Título de la entrada"
   date: "2026-07-06"
   excerpt: "Uno o dos frases que resumen la entrada, se usan en el listado."
   cover: "/mi-imagen.webp"
   tags: ["seo", "wordpress"]
   ---
   ```

   - `title`, `date` y `excerpt` son obligatorios. `date` en formato
     `AAAA-MM-DD` para que el orden (más reciente primero) funcione bien.
   - `cover` es opcional: la ruta a una imagen dentro de `public/`.
   - `tags` es opcional.
3. Debajo de la segunda línea `---`, escribe el contenido en Markdown
   normal: `##` para subtítulos, `**negrita**`, `- ` para listas,
   `[texto](url)` para enlaces, etc.
4. Guarda el archivo — no hace falta tocar nada más. La entrada aparece
   automáticamente en `/blog` y en la sección de blog de la portada.
