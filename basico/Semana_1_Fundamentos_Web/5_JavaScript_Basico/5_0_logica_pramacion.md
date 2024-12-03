### Curso Básico de Lógica de Programación

**Objetivo:** Introducir conceptos fundamentales de lógica de programación para personas sin experiencia previa.

---

### **Bloque 1: Variables y Tipos de Datos**

**Objetivo:** Comprender qué son las variables, los tipos de datos y cómo se utilizan en programación.

---

#### **Teoría**

1. **¿Qué es una Variable?**

   - Es un espacio en memoria donde almacenamos un dato que puede cambiar durante la ejecución de un programa.
   - Ejemplo: Guardar la edad de una persona.

2. **Tipos de Datos**

   - **Numéricos:** Enteros (`10`) y decimales (`3.14`).
   - **Cadenas de texto (Strings):** "Hola, mundo".
   - **Booleanos:** Valores lógicos: `true` (verdadero) o `false` (falso).

3. **Declarar Variables**
   - Ejemplo en pseudocódigo:
     ```plaintext
     nombre = "Juan"
     edad = 25
     esEstudiante = true
     ```

---

#### **Ejemplo Práctico**

1. Pregunta al usuario su nombre y edad, y muéstralos:

   - Pseudocódigo:

     ```plaintext
     nombre = input("¿Cuál es tu nombre?")
     edad = input("¿Cuál es tu edad?")
     print("Hola, " + nombre + ". Tienes " + edad + " años.")

     nombreMascota= input("Digita el nombre de su mascota")
     edadMascota=input("Digite la Edad de la mascota")
     esVacunado= input("Esta vacunado?")
     print("Hola "+nombreMascota+" Edad:"+ edadMascota+" Tiene vacunas: "+estaVacunado)
     ```

2. **Actividad para los estudiantes**
   - Declara variables para almacenar:
     - Nombre de una mascota.
     - Su edad.
     - Si está vacunada (`true` o `false`).
   - Muestra esta información como una oración.

---

### **Bloque 2: Estructuras Condicionales**

**Objetivo:** Introducir las estructuras condicionales para tomar decisiones en un programa.

---

#### **Teoría**

1. **¿Qué son las Estructuras Condicionales?**

   - Permiten ejecutar diferentes bloques de código según una condición.
   - Ejemplo: Si la edad es mayor o igual a 18, se considera mayor de edad.

2. **Sintaxis Básica**

   - Pseudocódigo:
     ```plaintext
     si (edad >= 18) entonces
         print("Eres mayor de edad")
     sino
         print("Eres menor de edad")
     ```

3. **Operadores Relacionales**
   - `==`: Igual a.
   - `!=`: Diferente de.
   - `>`, `<`, `>=`, `<=`: Comparación numérica.

---

#### **Ejemplo Práctico**

1. Programa que verifica si un número es positivo, negativo o cero:

   ```plaintext
   numero = input("Escribe un número:")
   si (numero > 0) entonces
       print("El número es positivo")
   sino si (numero < 0) entonces
       print("El número es negativo")
   sino
       print("El número es cero")
   ```

2. **Actividad para los estudiantes**
   - Escribe un programa que verifique si una persona puede votar (edad >= 18).

---

### **Bloque 3: Bucles**

**Objetivo:** Aprender a repetir acciones mediante bucles.

---

#### **Teoría**

1. **¿Qué son los Bucles?**

   - Son estructuras que repiten un bloque de código mientras se cumpla una condición.

2. **Tipos de Bucles**

   - **`Mientras` (While):** Repite mientras la condición sea verdadera.
   - **`Para` (For):** Repite un número específico de veces.

3. **Ejemplo Básico de `Mientras`**
   - Pseudocódigo:
     ```plaintext
     contador = 1
     mientras (contador <= 5) hacer
         print("Número: " + contador)
         contador = contador + 1
     ```

---

#### **Ejemplo Práctico**

1. Crear una tabla de multiplicar:

   ```plaintext
   numero = input("Escribe un número:")
   contador = 1
   mientras (contador <= 10) hacer
       print(numero + " x " + contador + " = " + (numero * contador))
       contador = contador + 1
   ```

2. **Actividad para los estudiantes**
   - Escribe un programa que cuente hacia atrás desde 10 hasta 1 y luego muestre "¡Despegue!".

---

### **Bloque 4: Arreglos y Bucles**

**Objetivo:** Introducir arreglos (listas) y cómo iterar sobre ellos.

---

#### **Teoría**

1. **¿Qué son los Arreglos?**

   - Estructuras de datos que almacenan múltiples valores en una sola variable.
   - Ejemplo:
     ```plaintext
     frutas = ["manzana", "plátano", "naranja"]
     ```

2. **Iterar sobre un Arreglo**
   - Usar un bucle para recorrer cada elemento:
     ```plaintext
     para (fruta en frutas) hacer
         print(fruta)
     ```

---

#### **Ejemplo Práctico**

1. Imprimir los nombres de estudiantes:

   ```plaintext
   estudiantes = ["Ana", "Luis", "Pedro"]
   para (estudiante en estudiantes) hacer
       print("Estudiante: " + estudiante)
   ```

2. **Actividad para los estudiantes**
   - Crea un arreglo con tus tres comidas favoritas.
   - Usa un bucle para imprimir: "Me gusta [comida]".

---

### **Bloque 5: Proyecto Final**

**Objetivo:** Crear un programa completo que combine las estructuras aprendidas.

---

#### **Actividad Guiada: Crear un Juego de Adivinanza**

1. **Problema a Resolver**

   - El programa generará un número aleatorio del 1 al 10.
   - El usuario intentará adivinarlo en un máximo de 3 intentos.

2. **Solución Guiada**

   - Pseudocódigo:
     ```plaintext
     numeroSecreto = aleatorio(1, 10)
     intentos = 0
     mientras (intentos < 3) hacer
         adivinanza = input("Adivina el número (1-10):")
         si (adivinanza == numeroSecreto) entonces
             print("¡Correcto! Has ganado.")
             terminar
         sino
             print("Incorrecto. Intenta de nuevo.")
         intentos = intentos + 1
     si (intentos == 3) entonces
         print("Lo siento, el número era " + numeroSecreto)
     ```

3. **Extensión para Estudiantes**
   - Agregar una pista: Indicar si el número secreto es mayor o menor que la adivinanza.

---

Este curso está diseñado para enseñar los fundamentos de la programación de manera progresiva, con ejemplos claros y actividades prácticas que permitan a los estudiantes aplicar lo aprendido. ¿Hay algún enfoque específico que te gustaría resaltar?
