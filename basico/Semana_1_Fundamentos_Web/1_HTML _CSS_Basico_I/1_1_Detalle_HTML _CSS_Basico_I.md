Aquí encuentras el contenido completo de la clase para cada bloque de **Día 1: HTML y CSS Básico I**. El objetivo es que los estudiantes conozcan los conceptos iniciales de HTML5 y CSS3 y creen una página web sencilla.

---

### **Día 1: HTML y CSS Básico I**

**Objetivo:** Introducir los conceptos básicos de HTML5 y CSS3, guiando a los estudiantes a crear una estructura de página web sencilla con estilos básicos.

---

### **Bloque 1 (0:00 - 0:45) - Introducción a HTML5**

**Objetivo:** Comprender la estructura básica de un documento HTML5 y las etiquetas principales para organizar el contenido de la página.

---

#### **Teoría: Estructura Básica de HTML5**

1. **¿Qué es HTML5?**

   - HTML (HyperText Markup Language) es el lenguaje de marcado que define la estructura de las páginas web.
   - HTML5 es la última versión del estándar, que incorpora nuevas etiquetas y funcionalidades para mejorar la accesibilidad y semántica del contenido.

2. **Estructura de un Documento HTML**

   - **`<!DOCTYPE html>`**: Instrucción para el navegador que indica que se trata de un documento HTML5.
   - **`<html>`**: Elemento raíz que contiene todo el contenido de la página.
   - **`<head>`**: Contiene metadatos sobre el documento, como el título y los enlaces a archivos CSS.
     - **`<title>`**: Define el título que aparece en la pestaña del navegador.
     - **`<meta charset="UTF-8">`**: Define la codificación de caracteres (UTF-8 es la más común y permite usar caracteres especiales).
   - **`<body>`**: Contiene el contenido visible de la página (textos, imágenes, etc.).

3. **Etiquetas de Organización**
   - **`<header>`**: Contiene el encabezado de la página, como el logotipo o la barra de navegación.
   - **`<footer>`**: Contiene el pie de página, con información adicional, enlaces o créditos.
   - **`<section>`**: Se usa para agrupar contenido relacionado en una sección específica.
   - **`<div>`**: Contenedor genérico para organizar elementos; útil para aplicar estilos y estructura.

---

#### **Ejemplo Práctico: Crear una Estructura HTML Básica**

1. **Paso 1**: Abre un editor de código (por ejemplo, Visual Studio Code) y crea un archivo llamado `index.html`.
2. **Paso 2**: Escribe la estructura básica en el archivo `index.html`:
   ```html
   <!DOCTYPE html>
   <html lang="es">
     <head>
       <meta charset="UTF-8" />
       <title>Mi Primera Página Web</title>
     </head>
     <body>
       <header>
         <h1>Bienvenidos a Mi Página</h1>
       </header>
       <section>
         <h2>Sección Principal</h2>
         <p>
           Este es un párrafo de texto en la sección principal de la página.
         </p>
       </section>
       <footer>
         <p>&copy; 2023 Mi Página Web</p>
       </footer>
     </body>
   </html>
   ```

#### **Actividad**

- **Crear la estructura**: Los estudiantes deben reproducir esta estructura en su archivo `index.html`.

---

### **Bloque 2 (0:45 - 1:30) - Etiquetas HTML Comunes**

**Objetivo:** Aprender a usar etiquetas comunes de HTML para agregar texto, enlaces e imágenes a la página.

---

#### **Teoría: Etiquetas Comunes en HTML**

1. **Etiquetas de Texto**

   - **`<h1>`, `<h2>`, `<h3>`, etc.**: Usados para los títulos y subtítulos de una página. El `<h1>` es el título principal y es único, mientras que `<h2>` a `<h6>` son para subtítulos en orden descendente de importancia.
   - **`<p>`**: Define un párrafo de texto.

2. **Enlaces (`<a>`)**

   - Los enlaces permiten la navegación dentro y fuera de la página.
   - **`<a href="url">Texto del enlace</a>`**: La URL define la ubicación a la que lleva el enlace.

3. **Imágenes (`<img>`)**
   - **`<img src="url" alt="texto alternativo">`**: `src` define la ruta de la imagen, y `alt` proporciona un texto alternativo para accesibilidad.
   - Es importante usar el atributo `alt` para describir la imagen a personas con discapacidades visuales.

---

#### **Ejemplo Práctico: Agregar Texto, Enlaces e Imágenes a la Página**

1. **Paso 1**: Abre el archivo `index.html` y añade un párrafo de texto, un enlace y una imagen dentro de `<section>`.
2. **Paso 2**: Añade el siguiente contenido:
   ```html
   <section>
     <h2>Sobre Nosotros</h2>
     <p>
       Somos una empresa dedicada a la creación de sitios web modernos y
       responsivos.
     </p>
     <a href="https://www.example.com">Visita nuestro sitio</a>
     <img src="imagen.jpg" alt="Descripción de la imagen" />
   </section>
   ```

#### **Práctica**

- **Añadir contenido**: Los estudiantes deben agregar un párrafo, un enlace y una imagen a su página.

---

**Descanso (10 minutos)**

---

### **Bloque 3 (1:40 - 2:30) - Formularios y Multimedia en HTML**

**Objetivo:** Aprender a crear formularios de contacto básicos y a insertar elementos multimedia.

---

#### **Teoría: Elementos de Formulario y Multimedia en HTML**

1. **Formularios**

   - **`<form>`**: Contenedor para el formulario.
   - **`<input type="text">`**: Campo de texto para ingresar información.
   - **`<input type="email">`**: Campo para ingresar un correo electrónico.
   - **`<button>`**: Botón para enviar o realizar una acción.

2. **Elementos Multimedia**
   - **`<audio>`**: Para insertar audio. Puede usar atributos como `controls` para permitir la reproducción.
   - **`<video>`**: Para insertar video, con atributos como `controls`, `width`, `height`.

---

#### **Ejemplo Práctico: Crear un Formulario y Agregar un Video**

1. **Paso 1**: En el archivo `index.html`, añade un formulario en el `<section>`.

   ```html
   <section>
     <h2>Contáctanos</h2>
     <form>
       <label for="nombre">Nombre:</label>
       <input type="text" id="nombre" name="nombre" required />

       <label for="email">Email:</label>
       <input type="email" id="email" name="email" required />

       <button type="submit">Enviar</button>
     </form>
   </section>
   ```

2. **Paso 2**: Agrega un video en la sección `Sobre Nosotros`.
   ```html
   <video width="320" height="240" controls>
     <source src="video.mp4" type="video/mp4" />
     Tu navegador no soporta el elemento de video.
   </video>
   ```

#### **Actividad**

- **Formularios y multimedia**: Los estudiantes deben completar el formulario y agregar un video a su página.

---

### **Bloque 4 (2:30 - 3:00) - Introducción a CSS3 y Selectores Básicos**

**Objetivo:** Introducir CSS3 y aprender a enlazar un archivo CSS externo, usando selectores básicos.

---

#### **Teoría: Introducción a CSS3 y Selectores Básicos**

1. **¿Qué es CSS?**

   - CSS (Cascading Style Sheets) es el lenguaje de estilos que permite personalizar la apariencia visual de las páginas HTML.

2. **Enlace de CSS Externo**

   - Para aplicar estilos CSS desde un archivo externo, enlazamos el archivo CSS en el `<head>` del HTML.

   ```html
   <link rel="stylesheet" href="estilos.css" />
   ```

3. **Selectores Básicos en CSS**
   - **Selector de elemento**: Aplica estilos a todas las etiquetas de un tipo específico (p. ej., `<p>`, `<h1>`).
   - **Selector de clase (`.clase`)**: Aplica estilos a todos los elementos con una clase específica.
   - **Selector de ID (`#id`)**: Aplica estilos a un elemento específico con un ID único.

---

#### **Ejemplo Práctico: Enlazar el Archivo CSS y Aplicar Estilos**

1. **Paso 1**: En la misma carpeta que `index.html`, crea un archivo llamado `estilos.css`.
2. **Paso 2**: Enlaza `estilos.css` en el archivo HTML con `<link>`.
3. **Paso 3**: Agrega los siguientes estilos en `estilos.css`:

   ```css
   /* Estilos básicos */
   body {
     font-family: Arial, sans-serif;
     background-color: #f0f0f0;
   }

   /* Estilo para encabezados */
   h1 {
     color: #333;
   }

   /* Estilo de clase para sección */
   .section {
     padding: 20px;
     background-color: #fff;
     border-radius: 8px;
   }
   ```

#### **Práctica**

- **Aplicación de selectores**: Los estudiantes enlazarán su CSS y aplicarán estilos básicos.

---

**Descanso (10 minutos)**

---

### **Bloque 5 (3:10 - 4:00) - Aplicación de Estilos Básicos**

**Objetivo:** Aplicar colores, fuentes y alineación de texto con CSS.

---

#### **Teoría: Colores, Fuentes y Alineación de Texto**

1. **Colores en CSS**
   - Definidos en hexadecimal (`#333333`), RGB (`rgb(51, 51, 51)`) o por nombres (`blue`, `red`).
2. **Fuentes**

   - **`font-family`**: Define la fuente para el texto (ej. `Arial, sans-serif`).
   - **`font-size`**: Tamaño de la fuente.

3. **Alineación de Texto**
   - **`text-align`**: Alinea el texto a la izquierda, derecha, centro o justificado.

---

#### **Ejemplo Práctico: Aplicar Estilos de Colores y Tipografía**

1. **Paso 1**: En `estilos.css`, agrega estilos de color y fuentes.

   ```css
   body {
     font-family: "Arial", sans-serif;
     color: #333;
     background-color: #fafafa;
   }

   h1,
   h2 {
     text-align: center;
     color: #444;
   }

   p {
     color: #666;
     text-align: justify;
   }
   ```

#### **Práctica Guiada**

- **Aplicación de estilos**: Los estudiantes aplicarán colores y tipografía a sus elementos.

---

#### **Revisión Final**

- **Repaso de conceptos**: Resumir los temas clave y resolver dudas.
- **Asignación**: Mejorar la página HTML con más etiquetas y estilos básicos.
