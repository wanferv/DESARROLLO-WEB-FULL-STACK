### **Día 8: Interacción con el DOM**

**Objetivo:** Aprender a manipular elementos del DOM y manejar eventos en JavaScript para crear interfaces dinámicas e interactivas.

---

### **Bloque 1 (0:00 - 0:45) - Manipulación Básica del DOM**

**Objetivo:** Seleccionar elementos del DOM y modificar su contenido y estilos con JavaScript.

---

#### **Teoría: ¿Qué es el DOM?**

1. **DOM (Document Object Model)**

   - Es una representación estructurada de un documento HTML en forma de árbol.
   - Cada elemento HTML es un nodo que puede ser manipulado con JavaScript.

2. **Seleccionar Elementos del DOM**

   - **`document.querySelector()`**: Selecciona el primer elemento que coincide con un selector CSS.
     ```javascript
     const titulo = document.querySelector("h1");
     ```
   - **`document.getElementById()`**: Selecciona un elemento por su ID.
     ```javascript
     const titulo = document.getElementById("miTitulo");
     ```

3. **Modificar Contenido y Estilos**
   - Cambiar el contenido:
     ```javascript
     titulo.textContent = "Nuevo Título";
     ```
   - Cambiar estilos:
     ```javascript
     titulo.style.color = "blue";
     titulo.style.fontSize = "24px";
     ```

---

#### **Ejemplo Práctico: Modificar Elementos HTML**

1. En `index.html`, agrega un elemento para modificar:

   ```html
   <h1 id="miTitulo">Título Original</h1>
   <button id="cambiarTitulo">Cambiar Título</button>
   ```

2. En `script.js`, selecciona el título y el botón, y modifica el contenido del título:

   ```javascript
   const titulo = document.getElementById("miTitulo");
   const boton = document.getElementById("cambiarTitulo");

   boton.addEventListener("click", () => {
     titulo.textContent = "Título Cambiado";
     titulo.style.color = "red";
   });
   ```

---

#### **Actividad Práctica**

- Los estudiantes seleccionarán un párrafo en una página HTML y cambiarán su contenido y color al hacer clic en un botón.

---

### **Bloque 2 (0:45 - 1:30) - Eventos en JavaScript**

**Objetivo:** Aprender a manejar eventos comunes y asociar funciones para ejecutar acciones específicas.

---

#### **Teoría: Introducción a los Eventos en JavaScript**

1. **¿Qué son los eventos?**

   - Son acciones que ocurren en el navegador, como clics, movimientos del mouse o entrada de texto.
   - Los eventos permiten que JavaScript reaccione a las acciones del usuario.

2. **Manejadores de Eventos**

   - Método: **`addEventListener`**.
     ```javascript
     boton.addEventListener("click", function () {
       console.log("Botón clickeado");
     });
     ```

3. **Eventos Comunes**
   - `click`: Ocurre cuando un usuario hace clic en un elemento.
   - `input`: Ocurre cuando un usuario escribe en un campo de entrada.
   - `mouseover`: Ocurre cuando el mouse pasa sobre un elemento.

---

#### **Ejemplo Práctico: Añadir Eventos a un Botón**

1. En `index.html`, crea un botón y un cuadro de texto:

   ```html
   <input type="text" id="miInput" placeholder="Escribe algo..." />
   <p id="resultado"></p>
   ```

2. En `script.js`, añade eventos a los elementos:

   ```javascript
   const input = document.getElementById("miInput");
   const resultado = document.getElementById("resultado");

   input.addEventListener("input", () => {
     resultado.textContent = `Has escrito: ${input.value}`;
   });
   ```

---

#### **Actividad Práctica**

- Los estudiantes crearán un campo de texto y un párrafo que se actualice en tiempo real con lo que escriban en el campo.

---

**Descanso (10 minutos)**

---

### **Bloque 3 (1:40 - 2:30) - Creación Dinámica de Elementos**

**Objetivo:** Usar JavaScript para crear y agregar elementos dinámicamente al DOM.

---

#### **Teoría: Creación de Elementos en el DOM**

1. **Métodos Principales**

   - **`createElement`**: Crea un nuevo elemento.
     ```javascript
     const nuevoElemento = document.createElement("p");
     nuevoElemento.textContent = "Texto dinámico";
     ```
   - **`appendChild`**: Añade un elemento hijo a otro.
     ```javascript
     contenedor.appendChild(nuevoElemento);
     ```

2. **Integrar Elementos Dinámicos**
   - Crear listas dinámicamente.
   - Agregar botones o formularios en respuesta a acciones del usuario.

---

#### **Ejemplo Práctico: Crear una Lista Dinámicamente**

1. En `index.html`, añade un contenedor:

   ```html
   <ul id="lista"></ul>
   <button id="agregarItem">Añadir Elemento</button>
   ```

2. En `script.js`, crea elementos de lista dinámicamente:

   ```javascript
   const lista = document.getElementById("lista");
   const boton = document.getElementById("agregarItem");

   boton.addEventListener("click", () => {
     const nuevoItem = document.createElement("li");
     nuevoItem.textContent = `Elemento ${lista.children.length + 1}`;
     lista.appendChild(nuevoItem);
   });
   ```

---

#### **Actividad Práctica**

- Los estudiantes crearán una lista dinámica que se actualice con nuevos elementos al hacer clic en un botón.

---

### **Bloque 4 (2:30 - 3:00) - Integración DOM y Eventos**

**Objetivo:** Combinar manipulación del DOM y eventos para crear interfaces dinámicas.

---

#### **Actividad Guiada: Interfaz Interactiva**

1. **Problema a Resolver**

   - Crear una interfaz que permita a los usuarios agregar tareas a una lista, marcarlas como completadas y eliminarlas.

2. **Solución Guiada**

   - En `index.html`, estructura básica:

     ```html
     <input type="text" id="tareaInput" placeholder="Nueva tarea" />
     <button id="agregarTarea">Añadir Tarea</button>
     <ul id="listaTareas"></ul>
     ```

   - En `script.js`, lógica:

     ```javascript
     const tareaInput = document.getElementById("tareaInput");
     const agregarTarea = document.getElementById("agregarTarea");
     const listaTareas = document.getElementById("listaTareas");

     agregarTarea.addEventListener("click", () => {
       const tareaTexto = tareaInput.value;
       if (tareaTexto === "") return;

       const tarea = document.createElement("li");
       tarea.textContent = tareaTexto;

       // Añadir botón de eliminar
       const eliminarBtn = document.createElement("button");
       eliminarBtn.textContent = "Eliminar";
       eliminarBtn.addEventListener("click", () => {
         listaTareas.removeChild(tarea);
       });

       tarea.appendChild(eliminarBtn);
       listaTareas.appendChild(tarea);
       tareaInput.value = "";
     });
     ```

---

**Descanso (10 minutos)**

---

### **Bloque 5 (3:10 - 4:00) - Proyecto Pequeño**

**Objetivo:** Crear una calculadora interactiva que utilice eventos y manipulación del DOM.

---

#### **Práctica Guiada: Construir una Calculadora Simple**

1. **Paso 1**: En `index.html`, crea la estructura:

   ```html
   <input type="number" id="num1" placeholder="Número 1" />
   <input type="number" id="num2" placeholder="Número 2" />
   <button id="sumar">Sumar</button>
   <p id="resultado">Resultado:</p>
   ```

2. **Paso 2**: En `script.js`, agrega lógica:

   ```javascript
   const num1 = document.getElementById("num1");
   const num2 = document.getElementById("num2");
   const sumar = document.getElementById("sumar");
   const resultado = document.getElementById("resultado");

   sumar.addEventListener("click", () => {
     const suma = parseFloat(num1.value) + parseFloat(num2.value);
     resultado.textContent = `Resultado: ${suma}`;
   });
   ```

---

#### **Revisión Final**

- **Repaso:**
  - Selección de elementos.
  - Eventos comunes.
  - Creación dinámica de elementos.
- Resolución de dudas y comentarios finales.

Este contenido cubre los conceptos clave del DOM y eventos en JavaScript, proporcionando ejercicios prácticos y un proyecto guiado para consolidar el aprendizaje.
