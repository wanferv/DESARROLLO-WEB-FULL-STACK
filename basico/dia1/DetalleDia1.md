### **Día 1: Estructura HTML5 y Práctica Básica**

---

### **1: Introducción a HTML5**

**Objetivo:** Familiarizar a los estudiantes con la estructura básica de un documento HTML5 y las etiquetas principales utilizadas para organizar una página web.

---

#### **Teoría: Introducción a HTML y la Estructura Básica de HTML5**

1. **¿Qué es HTML?**

   - HTML (HyperText Markup Language) es el lenguaje de marcado utilizado para crear la estructura de las páginas web.
   - La versión HTML5 introduce nuevas etiquetas semánticas que mejoran la estructura y accesibilidad de las páginas.

2. **Estructura básica de un documento HTML5**

   - **`<!DOCTYPE html>`**: Informa al navegador que el documento es HTML5.
   - **`<html lang="es">`**: El contenedor raíz de todo el contenido de la página. El atributo `lang` ayuda con la accesibilidad y SEO.
   - **`<head>`**: Contiene metadatos sobre el documento (no visibles en la página).
     - **`<meta charset="UTF-8">`**: Define la codificación de caracteres (UTF-8 es compatible con casi todos los caracteres).
     - **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Ayuda a que la página sea responsiva.
     - **`<title>`**: Define el título que se muestra en la pestaña del navegador.
   - **`<body>`**: Contiene el contenido visible de la página web (textos, imágenes, etc.).

3. **Etiquetas de Estructura de HTML5**
   - **`<header>`**: Sección superior que contiene el encabezado o introducción de la página.
   - **`<nav>`**: Contiene los enlaces de navegación.
   - **`<section>`**: Define una sección genérica en un documento.
   - **`<article>`**: Contiene contenido autónomo que podría ser distribuido de forma independiente.
   - **`<aside>`**: Contiene contenido relacionado, como barras laterales.
   - **`<footer>`**: Contiene el pie de página de un documento o sección.
   - **`<div>` y `<span>`**: Elementos contenedores genéricos; `<div>` para bloques y `<span>` para contenido en línea.

---

#### **Ejemplo Práctico: Creación de la Estructura Básica**

1. **Paso 1**: Abre un editor de código (como Visual Studio Code) y crea un archivo llamado `index.html`.
2. **Paso 2**: Inserta la siguiente estructura básica en el archivo:
   ```html
   <!DOCTYPE html>
   <html lang="es">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Mi Página Web</title>
     </head>
     <body>
       <!-- Contenido aquí -->
     </body>
   </html>
   ```

#### **Actividad en Grupo**

- Muestra una estructura de HTML completa en la pantalla y pide a los estudiantes que identifiquen las etiquetas principales.
- Pregunta: “¿Qué creen que debe contener `<header>`? ¿Y `<footer>`?” para guiar la comprensión.

---

### **2: Etiquetas HTML Comunes**

**Objetivo:** Familiarizar a los estudiantes con etiquetas de texto, imágenes y enlaces comunes y su uso correcto en HTML5.

---

#### **Teoría: Etiquetas de Texto y Su Uso Correcto**

1. **Etiquetas de Texto**

   - **Encabezados (`<h1>` a `<h6>`)**: Usados para definir títulos y subtítulos en la página.
   - **Párrafos (`<p>`)**: Usados para bloques de texto.
   - **Listas**:
     - **Listas no ordenadas (`<ul>`)**: Utilizadas para listas de elementos sin un orden específico.
     - **Listas ordenadas (`<ol>`)**: Usadas para listas numeradas.
     - **Elementos de lista (`<li>`)**: Cada ítem de la lista se envuelve en esta etiqueta.
   - **Énfasis y Resaltado**:
     - **`<strong>`**: Resalta el texto dándole más importancia (semántica).
     - **`<em>`**: Enfatiza el texto, generalmente se renderiza en cursiva.

2. **Imágenes y Enlaces**
   - **Imágenes (`<img>`)**:
     - **`src`**: Fuente de la imagen.
     - **`alt`**: Texto alternativo, útil para accesibilidad.
   - **Enlaces (`<a>`)**:
     - **`href`**: Define la URL a la que lleva el enlace.

#### **Ejemplo Práctico: Estructura con Texto e Imágenes**

1. **Paso 1**: En el archivo `index.html`, dentro de `<body>`, añade lo siguiente:
   ```html
   <header>
     <h1>Bienvenidos a Mi Página Web</h1>
   </header>
   <section>
     <h2>Sobre Nosotros</h2>
     <p>
       Este es un párrafo de ejemplo que describe el contenido de la página.
     </p>
     <ul>
       <li>Opción 1</li>
       <li>Opción 2</li>
       <li>Opción 3</li>
     </ul>
     <img src="ruta/a/imagen.jpg" alt="Descripción de la imagen" />
     <a href="https://www.wikipedia.org">Visitar Wikipedia</a>
   </section>
   ```

#### **Discusión**

- Explicar la importancia de la semántica en HTML, como el uso de `<strong>` para enfatizar palabras importantes y `<em>` para palabras en cursiva.

**Descanso (10 minutos)**

---

### **3: Formularios en HTML**

**Objetivo:** Crear formularios básicos en HTML, entendiendo la utilidad de cada elemento y sus atributos.

---

#### **Teoría: Elementos y Atributos de Formularios**

1. **Estructura Básica del Formulario**

   - `<form>`: Define el formulario y contiene atributos `action` y `method`.
   - Elementos principales:
     - **`<input type="text">`**: Para texto.
     - **`<input type="email">`**: Para correos electrónicos.
     - **`<input type="tel">`**: Para números de teléfono.
     - **`<button type="submit">`**: Botón para enviar.

2. **Atributos Importantes**
   - **`name`**: Asocia un nombre a los datos enviados.
   - **`placeholder`**: Muestra un texto de ayuda.
   - **`required`**: Hace obligatorio el campo.

#### **Ejemplo Práctico: Creación de un Formulario de Contacto**

1. **Paso 1**: Añadir en `<section>`:

   ```html
   <form action="/submit" method="post">
     <label for="name">Nombre:</label>
     <input type="text" id="name" name="name" required />

     <label for="email">Correo:</label>
     <input type="email" id="email" name="email" required />

     <button type="submit">Enviar</button>
   </form>
   ```

#### **Reflexión Grupal**

- Reflexionar sobre cómo se usan los formularios para interactuar con usuarios y servidores.

---

### **4: Elementos Multimedia**

**Objetivo:** Insertar audio y video en HTML5, y conocer sus atributos.

---

#### **Teoría: Integración de Elementos Multimedia**

1. **Multimedia en HTML**
   - **`<audio controls>`**: Permite añadir audio con controles.
   - **`<video controls>`**: Para video, con atributos `width`, `height`.
   - **`<iframe>`**: Para contenido incrustado, como videos de YouTube.

#### **Ejemplo Práctico: Agregar Audio y Video**

1. **Paso 1**: Añadir multimedia en la página:

   ```html
   <audio controls>
     <source src="ruta/a/audio.mp3" type="audio/mp3" />
     Tu navegador no soporta el audio.
   </audio>

   <video width="320" height="240" controls>
     <source src="ruta/a/video.mp4" type="video/mp4" />
     Tu navegador no soporta el video.
   </video>
   ```

**Descanso (10 minutos)**

---

### **5: Práctica Final y Revisión**

**Objetivo:** Completar una página HTML con todo lo aprendido y consolidar conocimientos.

#### **Práctica Guiada**

1.  **Completar la Página HTML**: Los estudiantes deben terminar su estructura HTML con encabezados, párrafos, imágenes, un formulario de contacto y un video.

#### **Revisión de Trabajo**

- Repasar las mejores prácticas de semántica HTML, discutiendo cómo los elementos semánticos mejoran el SEO y accesibilidad.

#### **Asignación para Casa**

- Completar la estructura de la página y leer sobre CSS para la próxima clase.

---

Este plan ofrece una guía completa y práctica para que los estudiantes desarrollen una página HTML estructurada y funcional. ¿Hay algo más que te gustaría ajustar o agregar?
