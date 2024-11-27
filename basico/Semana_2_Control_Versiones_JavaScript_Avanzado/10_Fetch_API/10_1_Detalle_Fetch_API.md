### **Día 10: Fetch API**

**Objetivo:** Aprender a consumir datos de APIs externas utilizando Fetch API, procesar las respuestas y mostrarlas en el DOM para construir interfaces dinámicas.

---

### **Bloque 1 (0:00 - 0:45) - Introducción a Fetch API**

**Objetivo:** Entender cómo funciona Fetch API para realizar solicitudes GET y POST.

---

#### **Teoría: ¿Qué es Fetch API?**

1. **Concepto**

   - **Fetch API** es una herramienta moderna para realizar solicitudes HTTP en JavaScript.
   - Soporta operaciones asíncronas como `GET`, `POST`, `PUT`, y `DELETE` para interactuar con APIs.

2. **Sintaxis Básica**

   - `fetch` devuelve una promesa.
     ```javascript
     fetch(url)
       .then((response) => response.json()) // Procesar la respuesta como JSON
       .then((data) => console.log(data)) // Usar los datos obtenidos
       .catch((error) => console.error("Error:", error)); // Manejar errores
     ```

3. **Métodos Comunes**
   - **GET**: Obtener información de un servidor.
   - **POST**: Enviar datos al servidor.

---

#### **Ejemplo Práctico: Realizar una Petición GET**

1. En `script.js`, realiza una solicitud GET a una API pública:
   ```javascript
   fetch("https://jsonplaceholder.typicode.com/posts")
     .then((response) => response.json())
     .then((data) => console.log("Datos obtenidos:", data))
     .catch((error) => console.error("Error al obtener datos:", error));
   ```

---

#### **Actividad Práctica**

- Los estudiantes realizarán una solicitud GET a la misma API y verificarán los resultados en la consola del navegador.

---

### **Bloque 2 (0:45 - 1:30) - Manejo de Respuestas**

**Objetivo:** Procesar respuestas obtenidas de una API y manejar los datos en formato JSON.

---

#### **Teoría: Manejo de Respuestas**

1. **Procesar Respuestas**

   - Las respuestas HTTP contienen metadatos y datos:
     - **`status`**: Código de estado (200: éxito, 404: no encontrado, etc.).
     - **`json()`**: Método para extraer datos en formato JSON.

2. **Manejo de Errores**

   - Usar `.catch` para manejar errores de red.
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

#### **Ejemplo Práctico: Procesar Datos de una API**

1. En `script.js`, obtén los títulos de las publicaciones y muéstralos en la consola:
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

---

#### **Actividad Práctica**

- Los estudiantes procesarán una respuesta JSON para extraer solo los nombres de usuarios de la API pública `https://jsonplaceholder.typicode.com/users`.

---

**Descanso (10 minutos)**

---

### **Bloque 3 (1:40 - 2:30) - Mostrar Datos en el DOM**

**Objetivo:** Aprender a manipular el DOM para mostrar datos obtenidos de una API en la página web.

---

#### **Teoría: Integrar Fetch y el DOM**

1. **Uso de Fetch con Manipulación del DOM**
   - Mostrar datos de la API en elementos HTML como listas o tablas.
   - Crear dinámicamente elementos con los datos obtenidos.

---

#### **Ejemplo Práctico: Mostrar Datos en el DOM**

1. En `index.html`, crea una lista para mostrar los datos:

   ```html
   <h1>Lista de Publicaciones</h1>
   <ul id="lista"></ul>
   ```

2. En `script.js`, añade los títulos de las publicaciones a la lista:

   ```javascript
   const lista = document.getElementById("lista");

   fetch("https://jsonplaceholder.typicode.com/posts")
     .then((response) => response.json())
     .then((data) => {
       data.slice(0, 10).forEach((post) => {
         const li = document.createElement("li");
         li.textContent = post.title;
         lista.appendChild(li);
       });
     })
     .catch((error) => console.error("Error:", error));
   ```

---

#### **Actividad Práctica**

- Los estudiantes mostrarán una lista de nombres de usuarios obtenidos de `https://jsonplaceholder.typicode.com/users`.

---

### **Bloque 4 (2:30 - 3:00) - Proyecto con Fetch API**

**Objetivo:** Construir una página dinámica que consuma datos de una API pública y los presente en el DOM.

---

#### **Actividad Guiada: Crear una Página Dinámica con Datos de Usuarios**

1. **Paso 1**: Estructura en `index.html`:

   ```html
   <h1>Usuarios Registrados</h1>
   <ul id="usuarios"></ul>
   ```

2. **Paso 2**: Lógica en `script.js`:

   ```javascript
   const usuarios = document.getElementById("usuarios");

   fetch("https://jsonplaceholder.typicode.com/users")
     .then((response) => response.json())
     .then((data) => {
       data.forEach((user) => {
         const li = document.createElement("li");
         li.innerHTML = `<strong>${user.name}</strong> - ${user.email}`;
         usuarios.appendChild(li);
       });
     })
     .catch((error) => console.error("Error al obtener usuarios:", error));
   ```

---

**Descanso (10 minutos)**

---

### **Bloque 5 (3:10 - 4:00) - Proyecto Completo**

**Objetivo:** Crear una aplicación que permita consumir datos de una API y realizar búsquedas en tiempo real.

---

#### **Práctica Guiada: Crear una Aplicación con Búsqueda**

1. **Paso 1**: Estructura en `index.html`:

   ```html
   <h1>Búsqueda de Publicaciones</h1>
   <input type="text" id="buscar" placeholder="Buscar publicación..." />
   <ul id="resultados"></ul>
   ```

2. **Paso 2**: Lógica en `script.js`:

   ```javascript
   const buscar = document.getElementById("buscar");
   const resultados = document.getElementById("resultados");

   fetch("https://jsonplaceholder.typicode.com/posts")
     .then((response) => response.json())
     .then((data) => {
       buscar.addEventListener("input", () => {
         const query = buscar.value.toLowerCase();
         resultados.innerHTML = ""; // Limpiar resultados previos

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

#### **Revisión Final**

1. **Repaso de Conceptos**:

   - Fetch API.
   - Manejo de respuestas JSON.
   - Integración con el DOM.

2. **Discusión**:
   - Buenas prácticas al trabajar con APIs.
   - Manejo de errores y optimización de solicitudes.

Este contenido cubre todas las bases necesarias para dominar Fetch API, desde conceptos básicos hasta la creación de una aplicación dinámica interactiva.
