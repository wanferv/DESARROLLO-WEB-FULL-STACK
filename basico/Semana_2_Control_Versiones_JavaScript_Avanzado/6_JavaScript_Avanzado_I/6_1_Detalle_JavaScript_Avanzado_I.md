Aquí tienes el contenido completo del **Día 6: JavaScript Avanzado I**, con explicaciones detalladas, ejemplos prácticos y ejercicios para cada bloque.

---

## **Día 6: JavaScript Avanzado I**

**Objetivo:** Aprender características avanzadas de ES6 (ECMAScript 2015) que mejoran la eficiencia, claridad y legibilidad del código JavaScript.

---

### **Bloque 1 (0:00 - 0:45) - Arrow Functions**

**Objetivo:** Entender la sintaxis de las funciones flecha y aprender a utilizarlas en diferentes contextos, como callbacks y métodos de arrays.

---

#### **Teoría: ¿Qué son las Arrow Functions?**

1. **Sintaxis**:

   - Las arrow functions son una forma más corta de escribir funciones en JavaScript.
     ```javascript
     const suma = (a, b) => a + b;
     ```

2. **Características principales**:

   - No tienen su propio `this`: Utilizan el `this` del contexto donde fueron definidas.
   - Más concisas, ideales para callbacks y funciones de una sola línea.

3. **Uso común en métodos de array**:
   - **`map`**: Transforma cada elemento de un array.
   - **`filter`**: Filtra elementos según una condición.
   - **`reduce`**: Reduce los valores de un array a un único resultado.

---

#### **Ejemplo Práctico: Convertir Funciones Tradicionales en Funciones Flecha**

1. Convierte esta función tradicional:

   ```javascript
   function cuadrado(num) {
     return num * num;
   }
   ```

   A una función flecha:

   ```javascript
   const cuadrado = (num) => num * num;
   ```

2. Usar `map` con funciones flecha:
   ```javascript
   const numeros = [1, 2, 3, 4];
   const cuadrados = numeros.map((num) => num * num);
   console.log(cuadrados); // [1, 4, 9, 16]
   ```

---

#### **Actividad Práctica**

- **Crear funciones flecha**: Los estudiantes escribirán una función flecha que calcule el área de un círculo dada su radio, y usarán `filter` para obtener los números mayores a 5 de un array.

Aquí tienes las implementaciones en JavaScript:

### 1. **Función flecha para calcular el área de un círculo**:

```javascript
const calcularAreaCirculo = (radio) => Math.PI * Math.pow(radio, 2);
```

### 2. **Usar `filter` para obtener números mayores a 5 de un array**:

```javascript
const filtrarMayoresA5 = (array) => array.filter((numero) => numero > 5);
```

### Ejemplo de uso:

```javascript
// Calcular el área de un círculo
const radio = 7;
console.log(
  `El área del círculo con radio ${radio} es: ${calcularAreaCirculo(radio)}`
);

// Filtrar números mayores a 5
const numeros = [1, 3, 5, 7, 9];
const mayoresA5 = filtrarMayoresA5(numeros);
console.log(`Números mayores a 5: ${mayoresA5}`);
```

### Salida esperada:

```
El área del círculo con radio 7 es: 153.93804002589985
Números mayores a 5: [7, 9]
```

---

### **Bloque 2 (0:45 - 1:30) - Template Strings**

**Objetivo:** Aprender a usar template strings para crear cadenas dinámicas de manera más clara y concisa.

---

#### **Teoría: ¿Qué son las Template Strings?**

1. **Sintaxis**:

   - Usan comillas invertidas (`` ` ``) en lugar de comillas simples o dobles.
   - Permiten insertar variables y expresiones con `${}`.
     ```javascript
     const nombre = "Juan";
     const saludo = `Hola, ${nombre}!`;
     console.log(saludo); // Hola, Juan!
     ```

2. **Ventajas**:
   - Más fáciles de leer cuando se combinan variables y texto.
   - Ideales para construir cadenas largas, como HTML dinámico.

---

#### **Ejemplo Práctico: Crear Mensajes con Template Strings**

1. Crear un saludo personalizado:

   ```javascript
   const nombre = "María";
   const edad = 30;
   const mensaje = `Hola, ${nombre}. Tienes ${edad} años.`;
   console.log(mensaje);
   ```

2. Generar HTML dinámico:
   ```javascript
   const producto = "Laptop";
   const precio = 1500;
   const html = `<div>
       <h2>Producto: ${producto}</h2>
       <p>Precio: $${precio}</p>
   </div>`;
   console.log(html);
   ```

---

#### **Actividad Práctica**

- Los estudiantes crearán mensajes de bienvenida personalizados usando template strings con variables dinámicas como nombre y ciudad.

Aquí tienes las soluciones para la actividad práctica:

---

### **1. Solución para ejecutar en la consola**

Los estudiantes deben usar `template strings` para crear mensajes personalizados:

#### Código:

```javascript
// Solicitar datos del usuario
const nombre = "Juan";
const ciudad = "Cali";

// Crear mensaje personalizado
const mensaje = `¡Bienvenido, ${nombre}! Nos alegra que estés visitando nuestra hermosa ciudad de ${ciudad}.`;

// Mostrar el mensaje en la consola
console.log(mensaje);
```

#### Explicación:

Los estudiantes pueden modificar las variables `nombre` y `ciudad` para generar mensajes diferentes y probar cómo funcionan las _template strings_.

---

### **2. Solución implementada con HTML, CSS y JS**

Crea un archivo HTML que incluya un formulario para ingresar el nombre y la ciudad, un botón para generar el mensaje, y un contenedor para mostrar el resultado.

#### **Archivo HTML**:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bienvenida Personalizada</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>Generador de Mensajes de Bienvenida</h1>
      <form id="formulario">
        <label for="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          placeholder="Escribe tu nombre"
          required
        />
        <label for="ciudad">Ciudad:</label>
        <input
          type="text"
          id="ciudad"
          placeholder="Escribe tu ciudad"
          required
        />
        <button type="submit">Generar Mensaje</button>
      </form>
      <div id="mensaje" class="mensaje"></div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

#### **Archivo CSS (`styles.css`)**:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  text-align: center;
}

h1 {
  color: #333;
}

label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
  color: #555;
}

input {
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.mensaje {
  margin-top: 20px;
  font-size: 18px;
  color: #333;
}
```

#### **Archivo JavaScript (`script.js`)**:

```javascript
// Obtener elementos del DOM
const formulario = document.getElementById("formulario");
const mensajeDiv = document.getElementById("mensaje");

// Agregar evento al formulario
formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar recargar la página

  // Obtener valores ingresados por el usuario
  const nombre = document.getElementById("nombre").value;
  const ciudad = document.getElementById("ciudad").value;

  // Crear mensaje personalizado
  const mensaje = `¡Bienvenido, ${nombre}! Nos alegra que estés visitando nuestra hermosa ciudad de ${ciudad}.`;

  // Mostrar el mensaje en el contenedor
  mensajeDiv.innerHTML = `<p>${mensaje}</p>`;
});
```

---

### **Instrucciones para probar la solución HTML:**

1. Crea una carpeta en tu computadora.
2. Guarda los archivos `index.html`, `styles.css`, y `script.js` en la misma carpeta.
3. Abre el archivo `index.html` en un navegador (puedes hacer doble clic en el archivo o usar una extensión como Live Server en VS Code para verlo dinámicamente).

Al completar el formulario y hacer clic en "Generar Mensaje", el mensaje de bienvenida personalizado aparecerá en pantalla con un diseño atractivo.

---

Este enfoque enseña a los estudiantes conceptos clave como:

- Uso de _template strings_.
- Manipulación del DOM con JavaScript.
- Estructuración y estilo de una página web.

---

**Descanso (10 minutos)**

---

### **Bloque 3 (1:40 - 2:30) - Destructuring**

**Objetivo:** Aprender destructuración para acceder a valores de objetos y arrays de forma directa y concisa.

---

#### **Teoría: ¿Qué es Destructuring?**

1. **Destructuring de Objetos**:

   - Permite extraer propiedades de un objeto en variables individuales.
     ```javascript
     const persona = { nombre: "Luis", edad: 28 };
     const { nombre, edad } = persona;
     console.log(nombre, edad); // Luis 28
     ```

2. **Destructuring de Arrays**:
   - Extrae elementos de un array en variables.
     ```javascript
     const numeros = [10, 20, 30];
     const [primero, segundo] = numeros;
     console.log(primero, segundo); // 10 20
     ```

---

#### **Ejemplo Práctico: Usar Destructuring**

1. **Destructuración de un objeto**:

   ```javascript
   const producto = { nombre: "Tablet", precio: 300, disponible: true };
   const { nombre, precio } = producto;
   console.log(`Producto: ${nombre}, Precio: $${precio}`);
   ```

2. **Destructuración con arrays**:
   ```javascript
   const colores = ["rojo", "verde", "azul"];
   const [primero, , tercero] = colores;
   console.log(primero, tercero); // rojo azul
   ```

---

#### **Actividad Práctica**

- Los estudiantes usarán destructuring para extraer valores de un objeto `persona` y un array de números.

---

### **Bloque 4 (2:30 - 3:00) - Spread y Rest**

**Objetivo:** Aprender a usar los operadores **spread** y **rest** para combinar, copiar y manipular arrays y objetos.

---

#### **Teoría: Spread y Rest**

1. **Spread Operator (`...`)**:

   - Expande elementos de un array u objeto.
     ```javascript
     const numeros = [1, 2, 3];
     const nuevosNumeros = [...numeros, 4, 5];
     console.log(nuevosNumeros); // [1, 2, 3, 4, 5]
     ```

2. **Rest Parameter (`...`)**:
   - Agrupa múltiples valores en un único array o parámetro.
     ```javascript
     function sumar(...numeros) {
       return numeros.reduce((acc, num) => acc + num, 0);
     }
     console.log(sumar(1, 2, 3, 4)); // 10
     ```

---

#### **Ejemplo Práctico**

1. Combinar objetos con spread:

   ```javascript
   const persona = { nombre: "Ana", edad: 25 };
   const direccion = { ciudad: "Lima", pais: "Perú" };
   const perfil = { ...persona, ...direccion };
   console.log(perfil);
   ```

2. Usar rest en una función:
   ```javascript
   function mostrarNumeros(...numeros) {
     console.log("Números:", numeros);
   }
   mostrarNumeros(1, 2, 3, 4);
   ```

---

#### **Actividad Práctica**

- Combinar arrays y objetos usando spread y crear funciones que reciban varios argumentos con rest.

### **1. Solución para ejecutar en la consola**

En esta solución, los estudiantes combinarán arrays y objetos con el operador _spread_ y usarán _rest_ para crear funciones que acepten múltiples argumentos.

#### Código:

```javascript
// Combinar arrays con spread
const frutas = ["manzana", "plátano", "naranja"];
const verduras = ["zanahoria", "brócoli", "espinaca"];
const alimentos = [...frutas, ...verduras];
console.log("Alimentos combinados:", alimentos);

// Combinar objetos con spread
const persona = { nombre: "Carlos", edad: 28 };
const trabajo = { puesto: "Desarrollador", empresa: "TechCorp" };
const perfil = { ...persona, ...trabajo };
console.log("Perfil combinado:", perfil);

// Usar rest en una función
function sumarNumeros(...numeros) {
  const suma = numeros.reduce((total, num) => total + num, 0);
  console.log("Suma de los números:", suma);
}

// Probar la función con diferentes argumentos
sumarNumeros(1, 2, 3, 4, 5);
```

#### Salida esperada:

```
Alimentos combinados: [ 'manzana', 'plátano', 'naranja', 'zanahoria', 'brócoli', 'espinaca' ]
Perfil combinado: { nombre: 'Carlos', edad: 28, puesto: 'Desarrollador', empresa: 'TechCorp' }
Suma de los números: 15
```

---

### **2. Solución implementada con HTML, CSS y JS**

Esta implementación incluye un formulario para que los estudiantes ingresen valores y combinen arrays y objetos dinámicamente, además de calcular la suma de varios números.

#### **Archivo HTML**:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Actividad Spread y Rest</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>Actividad: Spread y Rest</h1>

      <!-- Combinar arrays -->
      <div>
        <h2>Combinar Arrays</h2>
        <input
          type="text"
          id="array1"
          placeholder="Array 1 (ej: manzana, plátano)"
        />
        <input
          type="text"
          id="array2"
          placeholder="Array 2 (ej: zanahoria, espinaca)"
        />
        <button id="combinarArrays">Combinar Arrays</button>
        <p id="resultadoArrays"></p>
      </div>

      <!-- Combinar objetos -->
      <div>
        <h2>Combinar Objetos</h2>
        <input type="text" id="nombre" placeholder="Nombre" />
        <input type="number" id="edad" placeholder="Edad" />
        <input type="text" id="trabajo" placeholder="Trabajo" />
        <button id="combinarObjetos">Combinar Objetos</button>
        <p id="resultadoObjetos"></p>
      </div>

      <!-- Sumar números -->
      <div>
        <h2>Sumar Números</h2>
        <input
          type="text"
          id="numeros"
          placeholder="Números separados por comas (ej: 1,2,3)"
        />
        <button id="sumarNumeros">Sumar</button>
        <p id="resultadoSuma"></p>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

---

#### **Archivo CSS (`styles.css`)**:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1,
h2 {
  color: #333;
  text-align: center;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin-top: 10px;
  font-size: 16px;
  color: #555;
}
```

---

#### **Archivo JavaScript (`script.js`)**:

```javascript
// Combinar arrays con spread
document.getElementById("combinarArrays").addEventListener("click", () => {
  const array1 = document.getElementById("array1").value.split(",");
  const array2 = document.getElementById("array2").value.split(",");
  const combinado = [...array1, ...array2];
  document.getElementById(
    "resultadoArrays"
  ).innerText = `Array combinado: ${combinado.join(", ")}`;
});

// Combinar objetos con spread
document.getElementById("combinarObjetos").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const trabajo = document.getElementById("trabajo").value;

  const persona = { nombre, edad: parseInt(edad) };
  const empleo = { trabajo };
  const perfil = { ...persona, ...empleo };

  document.getElementById(
    "resultadoObjetos"
  ).innerText = `Perfil combinado: ${JSON.stringify(perfil)}`;
});

// Usar rest en una función
document.getElementById("sumarNumeros").addEventListener("click", () => {
  const numeros = document
    .getElementById("numeros")
    .value.split(",")
    .map(Number);
  const suma = numeros.reduce((total, num) => total + num, 0);
  document.getElementById("resultadoSuma").innerText = `Suma total: ${suma}`;
});
```

---

### **Instrucciones para probar la solución HTML:**

1. Crea una carpeta y guarda los archivos `index.html`, `styles.css`, y `script.js` en ella.
2. Abre el archivo `index.html` en tu navegador (usa una herramienta como Live Server si usas VS Code para verlo dinámicamente).
3. Ingresa datos en los formularios y observa cómo se combinan arrays, objetos y se suman números.

---

Este enfoque práctico ayuda a los estudiantes a aplicar _spread_ y _rest_ en diferentes contextos mientras experimentan con HTML y CSS para hacer su aprendizaje más interactivo y visual.

---

**Descanso (10 minutos)**

---

### **Bloque 5 (3:10 - 4:00) - Ejercicios Integrados y Revisión**

**Objetivo:** Aplicar todos los conceptos aprendidos en ejercicios prácticos y revisar los temas clave.

---

#### **Ejercicio Práctico Integrado**

1. **Tarea**: Combinar spread y destructuring para crear un perfil completo de usuario.

   ```javascript
   const usuario = { nombre: "Carlos", edad: 30 };
   const trabajo = { empresa: "TechCorp", puesto: "Developer" };
   const perfilCompleto = { ...usuario, ...trabajo };

   const { nombre, empresa } = perfilCompleto;
   console.log(`${nombre} trabaja en ${empresa}.`);
   ```

---

#### **Revisión Final y Resolución de Dudas**

- Repasar:
  - Arrow functions.
  - Template strings.
  - Destructuring.
  - Spread y Rest.
- Responder preguntas y discutir cómo aplicar estas herramientas en proyectos reales.

Este enfoque asegura una comprensión práctica y profunda de las características avanzadas de ES6.
