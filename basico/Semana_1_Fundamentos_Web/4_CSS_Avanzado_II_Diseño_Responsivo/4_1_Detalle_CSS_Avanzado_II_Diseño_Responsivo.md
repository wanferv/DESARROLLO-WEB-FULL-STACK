Aquí tienes el contenido completo para cada bloque del **Día 4: CSS Avanzado II y Diseño Responsivo**. Este día está enfocado en introducir **CSS Grid** y **media queries** para lograr un diseño adaptable.

---

### **Día 4: CSS Avanzado II y Diseño Responsivo**

**Objetivo:** Introducir CSS Grid y media queries para crear un diseño adaptable y responsivo.

---

### **Bloque 1 (0:00 - 0:45) - Introducción a CSS Grid**

**Objetivo:** Comprender cómo funciona CSS Grid y crear una cuadrícula básica con filas y columnas.

---

#### **Teoría: Fundamentos de CSS Grid**

1. **¿Qué es CSS Grid?**

   - CSS Grid es un sistema de diseño bidimensional en CSS que permite organizar elementos en filas y columnas.
   - Proporciona una estructura flexible para crear layouts complejos y adaptables sin el uso de flotaciones o posiciones absolutas.

2. **Propiedad `display: grid`**

   - Aplica el diseño de cuadrícula a un contenedor y convierte a sus hijos en elementos de cuadrícula.
   - Ejemplo:
     ```css
     .grid-container {
       display: grid;
     }
     ```

3. **Definir Filas y Columnas**
   - **`grid-template-columns`**: Define el número y el tamaño de las columnas.
   - **`grid-template-rows`**: Define el número y el tamaño de las filas.
   - Las columnas y filas se definen en unidades (por ejemplo, `px`, `%`, `fr` - fracción de espacio disponible).
   - Ejemplo:
     ```css
     .grid-container {
       display: grid;
       grid-template-columns: 1fr 1fr; /* dos columnas */
       grid-template-rows: 100px 200px; /* dos filas */
     }
     ```

---

#### **Ejemplo Práctico: Crear una Cuadrícula Básica**

1. **Paso 1**: En `index.html`, crea un contenedor `.grid-container` con cuatro elementos.

   ```html
   <div class="grid-container">
     <div class="grid-item">1</div>
     <div class="grid-item">2</div>
     <div class="grid-item">3</div>
     <div class="grid-item">4</div>
   </div>
   ```

2. **Paso 2**: En `estilos.css`, añade estilos para la cuadrícula.

   ```css
   .grid-container {
     display: grid;
     grid-template-columns: 1fr 1fr; /* dos columnas iguales */
     grid-template-rows: 150px 150px; /* dos filas iguales */
     gap: 10px; /* espacio entre las celdas */
   }

   .grid-item {
     background-color: #007bff;
     color: white;
     display: flex;
     align-items: center;
     justify-content: center;
     font-size: 24px;
   }
   ```

#### **Actividad Práctica**

- **Crear una cuadrícula básica**: Los estudiantes replicarán el diseño de una cuadrícula de dos filas y dos columnas.

---

### **Bloque 2 (0:45 - 1:30) - Propiedades Avanzadas de CSS Grid**

**Objetivo:** Explorar propiedades avanzadas de CSS Grid para controlar el tamaño y posición de los elementos dentro de la cuadrícula.

---

#### **Teoría: Propiedades Avanzadas de CSS Grid**

1. **Espacio entre Elementos (`gap`)**

   - **`gap`** o **`grid-gap`** permite definir el espacio entre filas y columnas en una cuadrícula.
   - Ejemplo:
     ```css
     .grid-container {
       gap: 15px;
     }
     ```

2. **Control de Columnas y Filas**
   - **`grid-column`**: Define el tamaño de una celda en términos de columnas que abarca.
   - **`grid-row`**: Define el tamaño de una celda en términos de filas que abarca.
   - Ejemplo:
     ```css
     .grid-item1 {
       grid-column: 1 / 3; /* se extiende de la columna 1 a la 3 */
       grid-row: 1 / 2; /* ocupa solo la primera fila */
     }
     ```

---

#### **Ejemplo Práctico: Crear una Galería de Imágenes con Grid**

1. **Paso 1**: En `index.html`, crea una galería de imágenes usando `.gallery` como contenedor y múltiples `.gallery-item`.

   ```html
   <div class="gallery">
     <div class="gallery-item">Imagen 1</div>
     <div class="gallery-item">Imagen 2</div>
     <div class="gallery-item">Imagen 3</div>
     <div class="gallery-item">Imagen 4</div>
     <div class="gallery-item">Imagen 5</div>
   </div>
   ```

2. **Paso 2**: En `estilos.css`, aplica propiedades avanzadas de CSS Grid.

   ```css
   .gallery {
     display: grid;
     grid-template-columns: repeat(3, 1fr); /* tres columnas iguales */
     grid-gap: 15px;
   }

   .gallery-item {
     background-color: #4caf50;
     color: white;
     display: flex;
     align-items: center;
     justify-content: center;
     height: 150px;
     font-size: 20px;
   }

   /* Aumentar tamaño de la primera imagen */
   .gallery-item:first-child {
     grid-column: span 2; /* ocupa dos columnas */
     grid-row: span 2; /* ocupa dos filas */
   }
   ```

#### **Actividad Práctica**

- **Galería con Grid**: Los estudiantes aplicarán estilos avanzados de grid para una galería de imágenes.

**Descanso (10 minutos)**

---

### **Bloque 3 (1:40 - 2:30) - Introducción a Media Queries**

**Objetivo:** Aprender a usar media queries para adaptar el diseño de la página a diferentes dispositivos y tamaños de pantalla.

---

#### **Teoría: Media Queries en CSS**

1. **¿Qué son las Media Queries?**

   - Las media queries permiten aplicar estilos CSS específicos en función del tamaño o características de la pantalla del dispositivo.
   - La media query más común es `@media screen and (max-width: ...)`, que se usa para aplicar estilos en pantallas de ancho específico (por ejemplo, para dispositivos móviles).

2. **Sintaxis Básica de una Media Query**

   - **`@media screen and (max-width: 768px) { ... }`**: Aplica los estilos dentro del bloque solo si el ancho de la pantalla es de 768px o menos.
   - Ejemplo:
     ```css
     @media screen and (max-width: 768px) {
       .gallery {
         grid-template-columns: 1fr;
       }
     }
     ```

3. **Puntos de Quiebre Comunes**
   - **Móvil**: `max-width: 600px`
   - **Tablet**: `max-width: 768px`
   - **Escritorio**: `min-width: 1024px`

---

#### **Ejemplo Práctico: Aplicar Media Queries para Ajustar el Diseño**

1. **Paso 1**: En `estilos.css`, añade una media query para ajustar la cuadrícula de la galería en dispositivos móviles.

   ```css
   @media screen and (max-width: 600px) {
     .gallery {
       grid-template-columns: 1fr;
     }

     .gallery-item:first-child {
       grid-column: span 1;
       grid-row: span 1;
     }
   }
   ```

2. **Paso 2**: Prueba cómo se ve la página en diferentes anchos de pantalla.

#### **Actividad Práctica**

- **Prueba de Media Queries**: Los estudiantes ajustarán la galería para que se adapte a pantallas móviles usando media queries.

---

### **Bloque 4 (2:30 - 3:00) - Diseño Adaptable con CSS Grid y Flexbox**

**Objetivo:** Rediseñar la galería de imágenes para que se adapte a pantallas móviles, utilizando una combinación de CSS Grid y Flexbox.

---

#### **Teoría: Combinar CSS Grid y Flexbox para Diseños Responsivos**

1. **Uso de Flexbox para Alinear Elementos**

   - Flexbox es ideal para alinear elementos de manera flexible dentro de contenedores pequeños.
   - En combinación con Grid, se puede usar Flexbox en los elementos hijos para mejorar la distribución y alineación.

2. **Aplicar Grid en Pantallas Grandes y Flexbox en Pantallas Pequeñas**
   - CSS Grid es ideal para layouts grandes y estructurados.
   - Flexbox funciona bien para organizar elementos en dispositivos móviles y ajustar alineaciones de manera automática.

---

#### **Ejemplo Práctico: Rediseñar la Galería para Móviles**

1. **Paso 1**: Redefine la galería para pantallas móviles usando Flexbox en lugar de Grid.
   ```css
   @media screen and (max-width: 600px) {
     .gallery {
       display: flex;
       flex-direction: column;
       gap: 10px;
     }
   }
   ```

#### **Actividad Práctica**

- **Rediseño de la Galería**: Los estudiantes usarán Flexbox para que la galería se adapte mejor a

pantallas pequeñas.

**Descanso (10 minutos)**

---

### **Bloque 5 (3:10 - 4:00) - Proyecto Final de Diseño Responsivo**

**Objetivo:** Crear un diseño adaptable completo usando Grid, Flexbox y media queries para mejorar la experiencia en diferentes dispositivos.

---

#### **Práctica Guiada: Crear un Diseño Completo y Responsivo**

1. **Paso a Paso**: Usar Grid para el diseño en pantallas grandes y media queries para hacer que se adapte a dispositivos más pequeños.
   - Iniciar con el diseño general usando Grid.
   - Redefinir el diseño usando media queries para ajustarlo en pantallas móviles, incluyendo cambios de tamaño de texto y disposición de elementos.

#### **Ejemplo Práctico Completo**

1. **Paso 1**: En `index.html`, organiza secciones clave: encabezado, galería, formulario de contacto, pie de página.
2. **Paso 2**: Usa `display: grid` y `display: flex` en `estilos.css` para organizar el diseño y aplicar media queries.

#### **Revisión y Retroalimentación**

- **Repaso de conceptos**: Repasar los conceptos clave de Grid, Flexbox y media queries.
- **Retroalimentación**: Revisión final del diseño y resolver dudas o problemas.

Este enfoque les dará a los estudiantes una experiencia completa en la creación de un diseño web adaptable, aplicando CSS Grid, Flexbox y media queries para mejorar la presentación en diferentes dispositivos.
