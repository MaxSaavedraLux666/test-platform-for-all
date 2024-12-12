# Gestión de Issues

Este documento detalla cómo se gestionan los issues del proyecto utilizando GitHub Issues y Trello como herramientas principales para la organización y seguimiento de tareas.

---

## Gestión de Issues en GitHub

GitHub Issues se utiliza para registrar, clasificar y dar seguimiento a los problemas y solicitudes de nuevas funcionalidades. A continuación, se describen los detalles del flujo de trabajo:

### Categorías de Issues

1. **Bug**: Reporte de errores encontrados durante las pruebas o en producción.
2. **Improvement**: Solicitudes de mejora del código o la funcionalidad existente.
3. **New Feature**: Requerimientos de nuevas funcionalidades.

### Flujo de Trabajo

1. Crear un nuevo issue describiendo el problema o funcionalidad con los siguientes campos:

   - **Título**: Breve descripción del issue.
   - **Descripción**: Explicación detallada del problema o la solicitud.
   - **Etiquetas**: Asignar etiquetas como `bug`, `improvement`, `feature`, etc.
   - **Asignado a**: Persona o equipo responsable del issue.
2. Actualizar el estado del issue a medida que se avanza en su resolución:

   - `Open`: Issue recién creado.
   - `In Progress`: Issue en desarrollo.
   - `Closed`: Issue resuelto.

### Ejemplo de Issue

- **Título**: Error en validación de entradas.
- **Descripción**: Al introducir datos inválidos, no se muestra el mensaje de error esperado.
- **Etiquetas**: Bug.
- **Asignado a**: @usuario.

### Imágenes Relacionadas

**Ejemplo de un Issue en GitHub:**

![docs/images/github_issue.png](Github Issue)


---

## Organización de Tareas en Trello

Trello se utiliza para organizar las tareas generales del proyecto, agrupándolas en tableros con diferentes etapas del flujo de trabajo.

### Estructura del Tablero

- **To Do**: Tareas pendientes por iniciar.
- **In Progress**: Tareas en proceso.
- **Review**: Tareas completadas que necesitan revisión.
- **Done**: Tareas terminadas.

### Ejemplo de Tarjeta en Trello

- **Nombre de la tarea**: Implementación de pruebas unitarias.
- **Descripción**: Desarrollo de casos de prueba para las clases `User` y `Order`.
- **Responsable**: @miembro_equipo.
- **Etiquetas**: Testing.
- **Duración estimada**: 3 días.

### Imágenes Relacionadas

**Ejemplo de Tablero en Trello:**

![Tablero Trello Ejemplo](../imagenes/trello_tablero_ejemplo.png)

---

## Relación entre GitHub Issues y Trello

1. Cada issue creado en GitHub se refleja como una tarjeta en Trello.
2. Las actualizaciones de estado en Trello se sincronizan manualmente con los issues en GitHub para mantener la coherencia.

---

Este sistema permite un seguimiento efectivo y coordinado entre las herramientas, asegurando la resolución eficiente de problemas y el progreso del proyecto.
