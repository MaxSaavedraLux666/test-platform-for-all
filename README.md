# Plataforma de Gestión y Automatización

Este repositorio contiene la documentación y el desarrollo de una plataforma de gestión y automatización que incluye funcionalidades de CI/CD, pruebas automatizadas y gestión de issues.

## Índice de Documentación

### General

- [Integrantes](docs/equipo.md)
- [Introducción](docs/introduccion.md)
- [Propósito del Proyecto](docs/proposito.md)
- [Objetivos](docs/objetivos.md)
- [Funcionalidades Principales](docs/funcionalidades.md)

### Pruebas

- [Pruebas Unitarias](docs/Pruebas/Unitaria/Unitaria.md)
- [Pruebas Funcionales](docs/Pruebas/Funcionales/Funcional.md)
- [Pruebas de Seguridad](docs/Pruebas/Seguridad/Seguridad.md)
- [Pruebas de Performance](docs/Pruebas/Rendimiento/Rendimiento.md)
- [Pruebas Estaticas](docs/Pruebas/Estatica)

### Pipeline

- [Pipeline de CI/CD](docs/pipeline.md)

### Gestión de Issues

- [Gestión de Issues](docs/gestion_issues.md)

## Estructura del Repositorio

```plaintext
├── docs/
│   ├── images/
│   ├── Pruebas/
│   ├── introduccion.md
│   ├── pipeline.md
│   ├── construccion_automatica.md
│   ├── gestion_proyecto.md
│   └── equipo.md
├── src/
│   ├── backend/
│   ├── frontend/
├── tests/
│   ├── Estatica/
│   ├── unitarias/
│   ├── funcionales/
│   ├── seguridad/
│   └── rendimiento/
├── README.md
└── .github/
    ├── workflows/
    │   ├── ci.yml
    │   └── cd.yml
    └── ISSUE_TEMPLATE.md
```

## Cómo Clonar el Repositorio

```bash
git clone https://github.com/MaxSaavedraLux666/test-platform-for-all.git
cd test-platform-for-all
```

## Cómo Ejecutar el Proyecto

### Frontend

```bash
cd platform-for-all
npm install
npm run dev
```

### Backend

```bash
cd platform-for-all-back
mvn clean compile
java -jar target/platform-for-all-back-0.0.1-SNAPSHOT.jar --httpPort=8080
```

## Cómo Contribuir

1. Realiza un fork del repositorio.
2. Crea una rama con el nombre de tu feature: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza los cambios necesarios y haz commit: `git commit -m "Agregada nueva funcionalidad"`.
4. Sube los cambios a tu fork: `git push origin feature/nueva-funcionalidad`.
5. Crea un Pull Request explicando los cambios realizados.

---

Este proyecto es mantenido por el equipo de desarrollo y está abierto a contribuciones de la comunidad.
