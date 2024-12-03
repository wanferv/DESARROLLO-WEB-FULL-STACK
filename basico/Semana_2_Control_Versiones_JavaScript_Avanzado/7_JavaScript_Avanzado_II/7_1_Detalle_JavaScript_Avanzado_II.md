### **Día 7: JavaScript Avanzado II**

**Objetivo:** Aprender a manejar la programación asíncrona en JavaScript utilizando **Promesas** y **async/await**, y optimizar flujos con `Promise.all`.

---

## **Bloque 1 (0:00 - 0:45) - Introducción a Promesas**

**Objetivo:** Comprender qué son las Promesas y cómo ayudan a gestionar operaciones asíncronas.

---

### **Teoría: ¿Qué son las Promesas?**

1. **¿Qué es la asincronía?**

   - La asincronía permite que el programa continúe ejecutándose mientras espera que una operación (como una llamada a una API o una base de datos) se complete.

2. **Definición de una Promesa**

   - Una Promesa representa el resultado eventual de una operación asíncrona.
   - Tiene tres estados:
     - **Pending (pendiente):** La operación aún no ha terminado.
     - **Fulfilled (resuelta):** La operación se completó con éxito.
     - **Rejected (rechazada):** La operación falló.

3. **Métodos de una Promesa**
   - **`then`**: Maneja el resultado si la promesa se resuelve.
   - **`catch`**: Maneja errores si la promesa se rechaza.
   - **`finally`**: Se ejecuta siempre, independientemente de si la promesa fue resuelta o rechazada.

---

### **Ejemplo Práctico: Crear y Manejar una Promesa Simple**

1. Crear una promesa que simula una operación asíncrona:

   ```javascript
   const promesa = new Promise((resolve, reject) => {
     const exito = true; // Simula si la operación tiene éxito o no.
     setTimeout(() => {
       if (exito) {
         resolve("¡Operación exitosa!");
       } else {
         reject("Hubo un error.");
       }
     }, 2000); // Espera 2 segundos
   });

   promesa
     .then((resultado) => console.log(resultado)) // "¡Operación exitosa!"
     .catch((error) => console.error(error)) // Maneja el error
     .finally(() => console.log("Operación finalizada."));
   ```

2. **Actividad Práctica:**
   - Los estudiantes crearán una promesa que simule verificar un usuario. Si el usuario existe, la promesa debe resolverse; de lo contrario, debe rechazarse.

---

## **Bloque 2 (0:45 - 1:30) - Uso de Async/Await**

**Objetivo:** Usar la sintaxis de `async/await` para trabajar con promesas de forma más clara y estructurada.

---

### **Teoría: ¿Qué son `async` y `await`?**

1. **`async`**

   - Convierte una función en una función asíncrona, que siempre devuelve una promesa.

2. **`await`**

   - Detiene la ejecución de la función asíncrona hasta que la promesa sea resuelta o rechazada.

3. **Ventajas sobre `.then`/`.catch`**
   - Hace el código más legible y fácil de mantener, especialmente cuando se encadenan múltiples operaciones asíncronas.

---

### **Ejemplo Práctico: Convertir Promesas a `async/await`**

1. Operación con `.then`/`.catch`:

   ```javascript
   fetch("https://jsonplaceholder.typicode.com/posts/1")
     .then((response) => response.json())
     .then((data) => console.log(data))
     .catch((error) => console.error("Error:", error));
   ```

2. Conversión a `async/await`:
   ```javascript
   async function obtenerDatos() {
     try {
       const response = await fetch(
         "https://jsonplaceholder.typicode.com/posts/1"
       );
       const data = await response.json();
       console.log(data);
     } catch (error) {
       console.error("Error:", error);
     }
   }
   obtenerDatos();
   ```

---

### **Actividad Práctica:**

- Los estudiantes escribirán una función que obtenga información de una API usando `async/await`.

**Descanso (10 minutos)**

---

## **Bloque 3 (1:40 - 2:30) - Ejercicios de Promesas y Async/Await**

**Objetivo:** Practicar `async/await` para consumir APIs y manejar errores.

---

### **Ejercicio Guiado:** Consumir una API Pública

1. **Paso 1:** Consumir datos de una API.

   ```javascript
   async function mostrarPosts() {
     try {
       const response = await fetch(
         "https://jsonplaceholder.typicode.com/posts"
       );
       const posts = await response.json();
       posts.slice(0, 5).forEach((post) => {
         console.log(post.title);
       });
     } catch (error) {
       console.error("Error al obtener posts:", error);
     }
   }
   mostrarPosts();
   ```

2. **Paso 2:** Manejar errores con `try/catch`.
   - Introducir un error intencional en la URL para ver cómo se maneja con `catch`.

---

### **Actividad Práctica:**

- Crear una función que obtenga un listado de usuarios desde la API `https://jsonplaceholder.typicode.com/users` y muestre sus nombres en la consola.

---

## **Bloque 4 (2:30 - 3:00) - Múltiples Promesas con Promise.all**

**Objetivo:** Ejecutar varias promesas en paralelo y manejar sus resultados.

---

### **Teoría: ¿Qué es `Promise.all`?**

1. **Concepto**

   - Permite ejecutar varias promesas al mismo tiempo y esperar hasta que todas se resuelvan o una falle.

2. **Ventajas de `Promise.all`**
   - Es ideal para realizar múltiples solicitudes HTTP simultáneamente.
   - Devuelve un array con los resultados de todas las promesas resueltas.

---

### **Ejemplo Práctico: Llamar a Múltiples URLs con `Promise.all`**

1. Ejecutar varias solicitudes en paralelo:

   ```javascript
   const urls = [
     "https://jsonplaceholder.typicode.com/posts/1",
     "https://jsonplaceholder.typicode.com/posts/2",
     "https://jsonplaceholder.typicode.com/posts/3",
   ];

   async function obtenerMultiplesDatos() {
     try {
       const respuestas = await Promise.all(urls.map((url) => fetch(url)));
       const datos = await Promise.all(respuestas.map((res) => res.json()));
       console.log(datos);
     } catch (error) {
       console.error("Error al obtener datos:", error);
     }
   }
   obtenerMultiplesDatos();
   ```

---

### **Actividad Práctica:**

- Los estudiantes usarán `Promise.all` para realizar solicitudes a tres URLs y mostrar los datos combinados.

**Descanso (10 minutos)**

---

## **Bloque 5 (3:10 - 4:00) - Ejercicios Integrados y Revisión**

**Objetivo:** Aplicar todos los conceptos aprendidos en un ejercicio final.

---

### **Ejercicio Final: Crear una Función Completa con `Promise.all`**
