### **Día 3: CSS Avanzado I**

**Objetivo:** Introducir el modelo de caja (Box Model) y Flexbox, herramientas esenciales para crear layouts avanzados y responsivos.

---

### **Bloque 1 (0:00 - 0:45) - Box Model en CSS**

**Objetivo:** Comprender cómo funciona el modelo de caja en CSS y aplicarlo para controlar el espacio y los bordes de los elementos.

---

#### **Teoría: ¿Qué es el Box Model?**

1. **Elementos del Box Model**

   - Todo elemento en HTML es una caja que se compone de:
     - **Contenido (`content`)**: La parte principal del elemento donde se muestra texto, imágenes, etc.
     - **Relleno (`padding`)**: Espacio entre el contenido y el borde.
     - **Borde (`border`)**: El contorno del elemento.
     - **Margen (`margin`)**: Espacio entre el elemento y otros elementos cercanos.

2. **Propiedades Clave**

   - `width` y `height`: Define el tamaño del contenido.
   - `padding`: Agrega espacio interno.
   - `margin`: Controla el espacio externo.
   - `border`: Define el grosor, estilo y color del borde.

3. **Propiedad `box-sizing`**
   - Controla cómo se calculan el ancho y alto del elemento.
   - Valores principales:
     - **`content-box`**: El ancho y alto solo incluyen el contenido (default).
     - **`border-box`**: El ancho y alto incluyen contenido, padding y bordes.

---

#### **Ejemplo Práctico: Aplicar el Box Model**

1. En `index.html`, crea un contenedor con contenido básico:

   ```html
   <div class="caja">Contenido de la caja</div>
   ```

2. En `estilos.css`, aplica las propiedades del Box Model:
   ```css
   .caja {
     width: 300px;
     height: 100px;
     padding: 20px;
     margin: 10px;
     border: 2px solid #007bff;
     background-color: #f5f5f5;
   }
   ```

---

#### **Actividad Práctica**

- **Modificar Espacios**: Los estudiantes cambiarán valores de `padding` y `margin` para observar cómo afecta el espacio.
- **Explorar `box-sizing`**: Añadir la propiedad `box-sizing: border-box` y comparar los resultados.

---

### **Bloque 2 (0:45 - 1:30) - Flexbox Parte 1**

**Objetivo:** Aprender a organizar elementos horizontal y verticalmente usando Flexbox.

---

#### **Teoría: Introducción a Flexbox**

1. **¿Qué es Flexbox?**

   - Un modelo de diseño unidimensional para organizar elementos en filas o columnas.
   - Se activa usando `display: flex` en el contenedor principal.

2. **Ejes en Flexbox**

   - **Eje principal (main axis):** La dirección en la que se colocan los elementos (horizontal por default).
   - **Eje cruzado (cross axis):** Perpendicular al eje principal.

3. **Propiedades Clave del Contenedor Flex**
   - **`justify-content`**: Alinea elementos en el eje principal.
     - Valores: `flex-start`, `center`, `space-between`, `space-around`.

---

#### **Ejemplo Práctico: Organizar Elementos Horizontalmente**

1. En `index.html`, añade un contenedor con varios elementos:

   ```html
   <div class="flex-contenedor">
     <div class="item">1</div>
     <div class="item">2</div>
     <div class="item">3</div>
   </div>
   ```

2. En `estilos.css`, organiza los elementos horizontalmente:

   ```css
   .flex-contenedor {
     display: flex;
     justify-content: space-between;
     background-color: #e9ecef;
     padding: 20px;
   }

   .item {
     background-color: #007bff;
     color: white;
     padding: 10px;
     text-align: center;
   }
   ```

---

#### **Actividad Práctica**

- **Ajustar Alineación**: Los estudiantes usarán diferentes valores de `justify-content` (`center`, `space-around`, etc.) para observar su efecto.

---

**Descanso (10 minutos)**

---

### **Bloque 3 (1:40 - 2:30) - Flexbox Parte 2**

**Objetivo:** Explorar propiedades adicionales de Flexbox, como la dirección de los elementos y la alineación en el eje cruzado.

---

#### **Teoría: Propiedades Avanzadas de Flexbox**

1. **Propiedades Clave del Contenedor Flex**
   - **`flex-direction`**: Controla la dirección de los elementos (filas o columnas).
     - Valores: `row`, `row-reverse`, `column`, `column-reverse`.
   - **`align-items`**: Alinea elementos en el eje cruzado.
     - Valores: `stretch`, `center`, `flex-start`, `flex-end`.
   - **`flex-wrap`**: Permite que los elementos se ajusten a varias líneas.

---

#### **Ejemplo Práctico: Crear un Layout con Dos Columnas**

1. En `index.html`, organiza elementos en un contenedor:

   ```html
   <div class="flex-columnas">
     <div class="columna">Columna 1</div>
     <div class="columna">Columna 2</div>
   </div>
   ```

2. En `estilos.css`, usa Flexbox para organizar las columnas:

   ```css
   .flex-columnas {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
   }

   .columna {
     width: 45%;
     background-color: #6c757d;
     color: white;
     padding: 20px;
   }
   ```

---

#### **Actividad Práctica**

- **Cambiar Direcciones**: Los estudiantes usarán `flex-direction: column` para convertir el layout en vertical.
- **Ajustar Alineaciones**: Experimentar con valores de `align-items` como `center` o `flex-end`.

---

### **Bloque 4 (2:30 - 3:00) - Práctica de Flexbox Completa**

**Objetivo:** Aplicar todos los conceptos aprendidos para construir un menú de navegación horizontal con Flexbox.

---

#### **Ejemplo Práctico: Crear un Menú de Navegación**

1. En `index.html`, crea un menú con enlaces:

   ```html
   <nav class="menu">
     <a href="#">Inicio</a>
     <a href="#">Servicios</a>
     <a href="#">Contacto</a>
   </nav>
   ```

2. En `estilos.css`, estiliza el menú:

   ```css
   .menu {
     display: flex;
     justify-content: center;
     gap: 15px;
     background-color: #343a40;
     padding: 10px;
   }

   .menu a {
     color: white;
     text-decoration: none;
     padding: 5px 10px;
     border-radius: 5px;
   }

   .menu a:hover {
     background-color: #007bff;
   }
   ```

---

#### **Actividad Práctica**

- Los estudiantes construirán un menú similar y personalizarán colores y espaciados.

---

**Descanso (10 minutos)**

---

### **Bloque 5 (3:10 - 4:00) - Proyecto de Layout con Flexbox**

**Objetivo:** Crear un layout completo que combine formularios y listas organizados con Flexbox.

---

#### **Práctica Guiada: Crear una Sección con Flexbox**

1. **Paso 1**: Estructurar el HTML.

   ```html
   <section class="layout">
     <div class="formulario">
       <h3>Formulario</h3>
       <form>
         <input type="text" placeholder="Nombre" />
         <input type="email" placeholder="Email" />
         <button>Enviar</button>
       </form>
     </div>
     <div class="lista">
       <h3>Lista de Tareas</h3>
       <ul>
         <li>Tarea 1</li>
         <li>Tarea 2</li>
         <li>Tarea 3</li>
       </ul>
     </div>
   </section>
   ```

2. **Paso 2**: Estilizar con Flexbox en `estilos.css`.

   ```css
   .layout {
       display: flex;
       justify-content: space-between;
       gap: 20px;
   }

   .formulario, .lista {
       flex: 1;
       background-color: #e9ecef;
       padding: 15px;
       border-radius: 5px;
   }

   form input, form button {
       display: block;
       margin: 10px 0;

   ```

width: 100%;
}

```

---

#### **Revisión Final**
- Repaso: `display: flex`, `justify-content`, `align-items`, `flex-direction`.
- Resolución de dudas.

Este plan combina teoría, práctica y proyectos guiados para que los estudiantes comprendan y dominen el Box Model y Flexbox.
```
