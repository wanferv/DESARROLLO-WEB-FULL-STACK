## **Día 10: Control de Versiones con Git**

### **Objetivo:** Entender los conceptos básicos de Git y aprender a gestionar repositorios en GitHub para trabajo colaborativo.

---

### **Bloque 1 (0:00 - 0:45) - Introducción a Git y Control de Versiones**

#### **Teoría**

- **Qué es Git y por qué es importante**: Explicación sobre el control de versiones y cómo Git ayuda a gestionar y rastrear cambios en proyectos.
- **Conceptos básicos**:
  - **Repositorio**: Lugar donde se almacenan los archivos y el historial del proyecto.
  - **Commit**: Registro de cambios con un mensaje que describe lo que se modificó.
  - **Branch**: Línea de desarrollo independiente.

#### **Ejemplo Práctico**

1. Crear un proyecto local con `git init`.
2. Hacer cambios en un archivo y crear el primer commit:
   ```bash
   git add .
   git commit -m "Primer commit"
   ```
3. Explicar cómo el commit registra los cambios en el repositorio local.

---

### **Bloque 2 (0:45 - 1:30) - Repositorios y Commits**

#### **Teoría**

- **Rastrear cambios en Git**: `git status` para ver el estado de los archivos, `git add` para preparar cambios, y `git commit` para confirmarlos.
- **Escribir mensajes de commit efectivos**: Breves y descriptivos para mejorar el entendimiento del historial.

#### **Ejercicio Práctico**

1. Realizar varias modificaciones en archivos (e.g., añadir un archivo `index.html`).
2. Usar `git add` y `git commit` para crear diferentes commits.
3. Ver el historial de commits con `git log`.

**Descanso (10 minutos)**

---

### **Bloque 3 (1:40 - 2:30) - Branches y Trabajo Colaborativo**

#### **Teoría**

- **Branches**: Crear ramas para trabajar en nuevas características sin afectar la principal.
- **Comandos**:
  - Crear una rama: `git branch feature-nueva`
  - Cambiar a una rama: `git checkout feature-nueva`
  - Combinar ramas (merge) y resolver conflictos.

#### **Ejemplo Práctico**

1. Crear una rama nueva para una funcionalidad.
2. Modificar un archivo y hacer commit en la rama.
3. Moverse entre ramas y revisar cambios.

---

### **Bloque 4 (2:30 - 3:00) - GitHub y Repositorios Remotos**

#### **Teoría**

- **GitHub**: Almacenamiento de repositorios en la nube para compartir código.
- **Comandos para sincronización**:
  - Subir a GitHub: `git push origin main`
  - Descargar cambios: `git pull origin main`

#### **Ejercicio Práctico**

1. Crear un repositorio en GitHub.
2. Conectar el repositorio local a GitHub:
   ```bash
   git remote add origin https://github.com/usuario/repositorio.git
   git push -u origin main
   ```
3. Hacer cambios y realizar `push` a GitHub.

**Descanso (10 minutos)**

---

### **Bloque 5 (3:10 - 4:00) - Colaboración en GitHub**

#### **Ejercicio de Colaboración**

- Crear una rama en GitHub y realizar un **Pull Request** (PR).
- Explicar revisión y fusión de PR en GitHub.

#### **Revisión y Conclusión**

- Repasar comandos principales (`add`, `commit`, `branch`, `push`).
- Resolución de dudas y discusión de buenas prácticas en commits y ramas.
