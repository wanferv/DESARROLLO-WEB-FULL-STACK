Aquí tienes el contenido completo del **Día 7: JavaScript Avanzado I**, con explicaciones detalladas, ejemplos prácticos y ejercicios para cada bloque.

---

## **Día 7: JavaScript Avanzado I**

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
