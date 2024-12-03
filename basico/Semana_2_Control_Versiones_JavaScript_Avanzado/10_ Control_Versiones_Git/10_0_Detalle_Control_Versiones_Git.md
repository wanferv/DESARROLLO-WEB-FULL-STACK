Aquí tienes el contenido completo para el **Día 6: Control de Versiones con Git**, diseñado para introducir a los estudiantes al control de versiones, la gestión de repositorios locales y en GitHub, y el trabajo colaborativo.

---

### **Día 10: Control de Versiones con Git**

**Objetivo:** Comprender los conceptos básicos de Git, gestionar repositorios y trabajar colaborativamente usando GitHub.

---

### **Bloque 1 (0:00 - 0:45) - Introducción a Git y Control de Versiones**

**Objetivo:** Entender qué es Git, cómo funciona el control de versiones y realizar el primer commit en un repositorio local.

---

#### **Teoría: Introducción a Git y el Control de Versiones**

1. **¿Qué es Git?**

   - Git es un sistema de control de versiones distribuido que permite rastrear cambios en el código y colaborar con otros desarrolladores.
   - Beneficios:
     - Rastrear el historial de cambios en los proyectos.
     - Colaborar con múltiples personas en el mismo proyecto.
     - Revertir a versiones anteriores del proyecto si es necesario.

2. **Conceptos Básicos**
   - **Repositorio**: El lugar donde se almacena todo el código y el historial de cambios.
   - **Commit**: Un registro de cambios realizado en el repositorio.
   - **Branch**: Una rama de desarrollo independiente.

---

#### **Ejemplo Práctico: Crear un Proyecto Local y Realizar el Primer Commit**

1. **Paso 1**: Inicializar un repositorio local.

   - Abre la terminal y navega a una carpeta de tu proyecto:
     ```bash
     git init
     ```
   - Esto crea un repositorio Git en la carpeta actual.

2. **Paso 2**: Crear un archivo y realizar el primer commit.

   - Crea un archivo `index.html` y añade contenido básico.
   - Usa los siguientes comandos para registrar los cambios:
     ```bash
     git add .
     git commit -m "Primer commit"
     ```

3. **Paso 3**: Explica el flujo.
   - **`git add`**: Prepara los archivos para el commit.
   - **`git commit`**: Registra los cambios en el historial del repositorio local.

---

#### **Actividad Práctica**

- **Crear un Proyecto Local**: Los estudiantes inicializarán un repositorio local, añadirán un archivo y realizarán el primer commit.

---

### **Bloque 2 (0:45 - 1:30) - Repositorios y Commits**

**Objetivo:** Aprender a rastrear cambios en Git, realizar commits efectivos y gestionar el historial del proyecto.

---

#### **Teoría: Gestión de Cambios y Commits**

1. **Rastrear Cambios en Git**

   - **`git status`**: Muestra el estado actual del repositorio (archivos modificados, sin seguimiento, etc.).
   - **`git add`**: Añade los cambios al área de preparación.
   - **`git commit`**: Registra los cambios preparados.

2. **Mensajes de Commit Efectivos**

   - Un mensaje de commit debe ser breve y descriptivo:
     - Mal: `Update`
     - Bien: `Añade el título principal al index.html`

3. **Historial de Commits**
   - Usa `git log` para ver un historial de los commits realizados.

---

#### **Ejemplo Práctico: Rastrear Cambios y Crear Commits**

1. **Paso 1**: Modificar y añadir archivos.

   - Crea un nuevo archivo `style.css` y enlázalo en el `index.html`.
   - Usa los siguientes comandos:
     ```bash
     git add .
     git commit -m "Añade archivo de estilos y enlaza en el HTML"
     ```

2. **Paso 2**: Ver el historial de commits.
   - Ejecuta:
     ```bash
     git log
     ```

---

#### **Actividad Práctica**

- **Gestionar Cambios**: Los estudiantes realizarán varias modificaciones en su proyecto, usarán `git status` y crearán commits con mensajes descriptivos.

---

**Descanso (10 minutos)**

---

### **Bloque 3 (1:40 - 2:30) - Branches y Trabajo Colaborativo**

**Objetivo:** Aprender a crear ramas para trabajar en funcionalidades independientes y fusionarlas en el repositorio principal.

---

#### **Teoría: Ramas en Git**

1. **¿Qué son las Ramas?**

   - Una rama (branch) es una línea de desarrollo independiente.
   - La rama principal se llama `main` (o `master` en proyectos antiguos).
   - Usar ramas permite trabajar en nuevas características sin afectar el código estable.

2. **Comandos Básicos**
   - Crear una nueva rama:
     ```bash
     git branch feature-nueva
     ```
   - Cambiar a una rama:
     ```bash
     git checkout feature-nueva
     ```
   - Fusionar ramas (merge):
     ```bash
     git checkout main
     git merge feature-nueva
     ```

---

#### **Ejemplo Práctico: Crear y Fusionar Ramas**

1. **Paso 1**: Crear una rama para una nueva funcionalidad.

   ```bash
   git branch feature-cambiar-color
   git checkout feature-cambiar-color
   ```

   - Modifica el archivo `style.css` para añadir un color de fondo.

2. **Paso 2**: Hacer commit en la nueva rama.

   ```bash
   git add .
   git commit -m "Añade fondo azul en el estilo"
   ```

3. **Paso 3**: Fusionar la rama en `main`.
   ```bash
   git checkout main
   git merge feature-cambiar-color
   ```

---

#### **Actividad Práctica**

- **Ramas y Fusionar Cambios**: Los estudiantes crearán una rama para añadir una funcionalidad, harán commits y la fusionarán en la rama principal.

---

### **Bloque 4 (2:30 - 3:00) - GitHub y Repositorios Remotos**

**Objetivo:** Conectar un repositorio local con GitHub y realizar operaciones básicas de sincronización.

---

#### **Teoría: ¿Qué es GitHub?**

1. **GitHub**

   - GitHub es una plataforma que permite almacenar y colaborar en repositorios Git en la nube.

2. **Comandos Básicos para Repositorios Remotos**
   - **`git remote add origin`**: Conecta el repositorio local con un repositorio remoto.
   - **`git push`**: Sube cambios al repositorio remoto.
   - **`git pull`**: Descarga cambios del repositorio remoto.

---

#### **Ejemplo Práctico: Subir un Repositorio a GitHub**

1. **Paso 1**: Crear un repositorio en GitHub.

   - Accede a GitHub y crea un repositorio vacío.

2. **Paso 2**: Conectar el repositorio local.

   ```bash
   git remote add origin https://github.com/usuario/repositorio.git
   git branch -M main
   git push -u origin main
   ```

3. **Paso 3**: Hacer un cambio y subirlo a GitHub.
   ```bash
   git add .
   git commit -m "Actualiza el archivo de estilos"
   git push
   ```

---

#### **Actividad Práctica**

- **Subir un Proyecto a GitHub**: Los estudiantes conectarán su repositorio local y realizarán un `push` para sincronizarlo.

---

**Descanso (10 minutos)**

---

### **Bloque 5 (3:10 - 4:00) - Colaboración en GitHub**

**Objetivo:** Aprender a colaborar en proyectos compartidos en GitHub usando ramas y Pull Requests.

---

#### **Ejercicio de Colaboración**

1. **Paso 1**: Crear una rama en GitHub.

   - En GitHub, crea una nueva rama llamada `feature-mejorar-diseno`.

2. **Paso 2**: Realizar un cambio y enviar un Pull Request (PR).

   - Haz cambios en la nueva rama y súbelos a GitHub.
   - Crea un PR en la interfaz de GitHub y escribe un mensaje claro sobre los cambios.

3. **Paso 3**: Revisar y Fusionar un PR.
   - Explica cómo revisar los cambios y resolver conflictos antes de fusionar.

---

#### **Revisión Final**

- **Repaso de Comandos**:
  - `git init`, `git add`, `git commit`, `git branch`, `git push`, `git pull`.
- **Discusión**:
  - Buenas prácticas para mensajes de commit y uso de ramas.
  - Resolución de dudas.

Este contenido asegura que los estudiantes comprendan los fundamentos de Git y GitHub, incluyendo trabajo colaborativo con Pull Requests.
