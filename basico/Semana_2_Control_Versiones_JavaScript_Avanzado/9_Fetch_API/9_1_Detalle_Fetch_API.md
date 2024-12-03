### **Día 9: Fetch API**

**Objetivo:** Dominar el uso de Fetch API para realizar peticiones a APIs externas, manejar respuestas JSON y crear interfaces dinámicas con datos en tiempo real.

---

## **Bloque 1 (0:00 - 0:45) - Introducción a Fetch API**

**Objetivo:** Entender cómo realizar peticiones HTTP con Fetch API y las diferencias entre los métodos GET y POST.

---

### **Teoría: ¿Qué es Fetch API?**

1. **Definición de Fetch API**

   - Es una herramienta nativa de JavaScript para realizar solicitudes HTTP.
   - Fetch devuelve una **promesa** que representa la respuesta del servidor.

2. **Métodos Comunes**

   - **GET**: Obtiene datos del servidor.
   - **POST**: Envía datos al servidor para crear o modificar recursos.

3. **Sintaxis Básica de Fetch**
   ```javascript
   fetch("https://jsonplaceholder.typicode.com/posts")
     .then((response) => response.json()) // Convierte la respuesta a JSON
     .then((data) => console.log(data)) // Muestra los datos en consola
     .catch((error) => console.error("Error:", error)); // Maneja errores
   ```

---

### **Ejemplo Práctico: Realizar una Petición GET**

1. Hacer una solicitud GET para obtener una lista de publicaciones.

   **Código**

   ```javascript
   fetch("https://jsonplaceholder.typicode.com/posts")
     .then((response) => response.json())
     .then((data) => console.log(data)) // Muestra los datos en consola
     .catch((error) => console.error("Error al obtener datos:", error));
   ```

2. **Actividad Práctica**
   - Realiza una solicitud a `https://jsonplaceholder.typicode.com/users` y muestra los nombres de los usuarios en la consola.

---

## **Bloque 2 (0:45 - 1:30) - Manejo de Respuestas**

**Objetivo:** Procesar respuestas JSON y manejar errores al trabajar con Fetch API.

---

### **Teoría: Manejo de Respuestas**

1. **Formato JSON (JavaScript Object Notation)**

   - Es un formato de texto ligero para representar datos estructurados.
   - Ejemplo de JSON:
     ```json
     {
       "id": 1,
       "nombre": "Juan",
       "email": "juan@example.com"
     }
     ```

2. **Conversión de Respuestas**

   - La respuesta de una API suele estar en formato JSON.
   - El método `.json()` convierte la respuesta en un objeto de JavaScript.

3. **Manejo de Errores**
   - Verificar códigos de estado con `response.ok`.
   ```javascript
   fetch("https://jsonplaceholder.typicode.com/posts")
     .then((response) => {
       if (!response.ok) {
         throw new Error(`Error: ${response.status}`);
       }
       return response.json();
     })
     .then((data) => console.log(data))
     .catch((error) => console.error("Error en la solicitud:", error));
   ```

---

### **Ejemplo Práctico: Procesar Datos JSON**

1. Solicitar datos y extraer solo los títulos de las publicaciones:

   **Código**

   ```javascript
   fetch("https://jsonplaceholder.typicode.com/posts")
     .then((response) => response.json())
     .then((data) => {
       data.forEach((post) => {
         console.log(`Título: ${post.title}`);
       });
     })
     .catch((error) => console.error("Error:", error));
   ```

2. **Actividad Práctica**
   - Procesa los datos de `https://jsonplaceholder.typicode.com/users` para mostrar solo los correos electrónicos en consola.

---

**Descanso (10 minutos)**

---

## **Bloque 3 (1:40 - 2:30) - Mostrar Datos en el DOM**

**Objetivo:** Integrar Fetch API con la manipulación del DOM para mostrar datos dinámicos en una página web.

---

### **Teoría: Integrar Fetch con el DOM**

1. **Uso de Datos en el DOM**

   - Crear elementos dinámicos en HTML con datos obtenidos de una API.

2. **Métodos del DOM**
   - **`createElement`**: Crea nuevos nodos.
   - **`appendChild`**: Inserta elementos en el DOM.

---

### **Ejemplo Práctico: Mostrar Usuarios en una Lista**

1. **HTML**

   ```html
   <h1>Lista de Usuarios</h1>
   <ul id="usuarios"></ul>
   ```

2. **JavaScript**

   ```javascript
   const listaUsuarios = document.getElementById("usuarios");

   fetch("https://jsonplaceholder.typicode.com/users")
     .then((response) => response.json())
     .then((data) => {
       data.forEach((user) => {
         const li = document.createElement("li");
         li.textContent = `${user.name} - ${user.email}`;
         listaUsuarios.appendChild(li);
       });
     })
     .catch((error) => console.error("Error:", error));
   ```

---

### **Actividad Práctica:**

- Muestra una lista de las publicaciones con sus títulos y autores obtenidos de `https://jsonplaceholder.typicode.com/posts`.

---

## **Bloque 4 (2:30 - 3:00) - Proyecto con Fetch API**

**Objetivo:** Crear una interfaz dinámica que consuma datos de una API y los presente visualmente.

---

### **Actividad Guiada: Mostrar Comentarios**

1. **HTML**

   ```html
   <h1>Comentarios</h1>
   <div id="comentarios"></div>
   ```

2. **JavaScript**

   ```javascript
   const comentariosDiv = document.getElementById("comentarios");

   fetch("https://jsonplaceholder.typicode.com/comments")
     .then((response) => response.json())
     .then((data) => {
       data.slice(0, 5).forEach((comment) => {
         const div = document.createElement("div");
         div.innerHTML = `
                   <h3>${comment.name}</h3>
                   <p>${comment.body}</p>
                   <small>Por: ${comment.email}</small>
               `;
         comentariosDiv.appendChild(div);
       });
     })
     .catch((error) => console.error("Error:", error));
   ```

---

**Descanso (10 minutos)**

---

## **Bloque 5 (3:10 - 4:00) - Proyecto Completo**

**Objetivo:** Construir una aplicación que consuma datos de una API y permita búsquedas en tiempo real.

---

### **Práctica Guiada: Crear una Aplicación de Búsqueda**

1. **HTML**

   ```html
   <h1>Buscador de Publicaciones</h1>
   <input type="text" id="buscar" placeholder="Buscar publicación..." />
   <ul id="resultados"></ul>
   ```

2. **JavaScript**

   ```javascript
   const buscarInput = document.getElementById("buscar");
   const resultados = document.getElementById("resultados");

   fetch("https://jsonplaceholder.typicode.com/posts")
     .then((response) => response.json())
     .then((data) => {
       buscarInput.addEventListener("input", () => {
         const query = buscarInput.value.toLowerCase();
         resultados.innerHTML = "";

         const filtrados = data.filter((post) =>
           post.title.toLowerCase().includes(query)
         );

         filtrados.forEach((post) => {
           const li = document.createElement("li");
           li.textContent = post.title;
           resultados.appendChild(li);
         });
       });
     })
     .catch((error) => console.error("Error:", error));
   ```

---

### **Revisión Final**

1. **Repaso de Conceptos:**

   - Fetch API.
   - JSON.
   - Manipulación del DOM.

2. **Discusión:**
   - Importancia de consumir APIs en aplicaciones web.
   - Manejo de errores y buenas prácticas.

Este plan asegura que los estudiantes comprendan Fetch API desde conceptos básicos hasta proyectos prácticos.
