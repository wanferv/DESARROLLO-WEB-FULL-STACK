## **Día 6: JavaScript Avanzado I**

### **Objetivo:** Aprender características avanzadas de ES6 para mejorar la eficiencia y claridad del código.

---

### **Bloque 1 (0:00 - 0:45) - Arrow Functions**

#### **Teoría**

- **Arrow functions**: Sintaxis y diferencias con funciones tradicionales.
- **Uso de arrow functions en callbacks y métodos de array (`map`, `filter`)**.

#### **Ejemplo Práctico**

1. Convertir funciones tradicionales en funciones flecha:
   ```javascript
   const suma = (a, b) => a + b;
   ```
2. Uso de arrow functions en un `map` para transformar arrays.

---

### **Bloque 2 (0:45 - 1:30) - Template Strings**

#### **Teoría**

- **Template strings**: Sintaxis con comillas invertidas (`` ` ``) y uso de `${}` para incrustar expresiones.

#### **Ejemplo Práctico**

1. Crear una cadena compleja usando template strings:
   ```javascript
   const nombre = "Maria";
   const saludo = `Hola, ${nombre}!`;
   ```
2. Ejercicio: Crear mensajes personalizados con template strings.

**Descanso (10 minutos)**

---

### **Bloque 3 (1:40 - 2:30) - Destructuring**

#### **Teoría**

- **Destructuring** de objetos y arrays: Acceso directo a valores de estructuras complejas.
- **Sintaxis**:
  ```javascript
  const { nombre, edad } = persona;
  ```

#### **Ejercicio Práctico**

1. Destructuración en objetos y arrays.
2. Ejercicio: Crear una función que reciba un objeto y devuelva valores usando destructuring.

---

### **Bloque 4 (2:30 - 3:00) - Spread y Rest**

#### **Teoría**

- **Spread operator** (`...`): Expande elementos de un array u objeto.
- **Rest parameter**: Agrupa múltiples argumentos en uno solo.

#### **Ejemplo Práctico**

1. Usar spread para combinar arrays y objetos.
2. Ejemplo de rest parameter en una función:
   ```javascript
   function sumar(...numeros) {
     return numeros.reduce((acc, num) => acc + num);
   }
   ```

**Descanso (10 minutos)**

---

### **Bloque 5 (3:10 - 4:00) - Ejercicios Integrados y Revisión**

#### **Ejercicio Práctico**

- Crear una función que combine varios objetos usando spread y luego extraiga valores con destructuring.

#### **Revisión y Conclusión**

- Repasar ES6: arrow functions, template strings, destructuring, spread/rest.
- Resolución de dudas y comentarios finales.
