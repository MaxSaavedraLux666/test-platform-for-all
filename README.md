
# Gestión de Cambios y CI/CD con Jenkins

## Integrantes

- Fabricio Vidal Chuquispuma Merino
- Max Bruno Saavedra Monterrey
- Geomar Willy Fernandez Camacho
- Eysen Christopher Pérez Bazán
- Axel Patrick Félix Huayhua

## Propósito del Proyecto

El proyecto tiene como objetivo implementar una solución completa de gestión de cambios para solicitudes de requisitos, mejoras, errores y code smells. Además, se establece un pipeline de CI/CD utilizando Jenkins para garantizar calidad y eficiencia en todas las etapas del ciclo de desarrollo de software.

## Objetivo

- Automatizar el proceso de construcción, pruebas y despliegue del proyecto.
- Facilitar la colaboración mediante la gestión de issues y tareas en GitHub.
- Garantizar la calidad del código con pruebas estáticas, unitarias, funcionales, de seguridad y de performance.

---

## Funcionalidades principales

A continuación, se presentan las funcionalidades clave del proyecto:

### Interfaz de Gestión
![Interfaz de Gestión](imagenes/interfaz_gestion.png)

### Pipeline de CI/CD
![Pipeline Jenkins](imagenes/pipeline_jenkins.png)

---

## Pipeline de CI/CD

El pipeline de CI/CD implementado en Jenkins incluye las siguientes etapas. Cada etapa está integrada con herramientas específicas, con evidencia y fragmentos de código relevantes.

### 1. Construcción Automática

**Herramienta/Framework:**  
- Maven para construir el proyecto Java.
- Vite para construir el proyecto React

**Evidencia (fragmento de código):**
```groovy
stage("Build frontend"){
    steps{
        dir("platform-for-all"){
            bat "npm install"
            bat "npm run build"                   
        }
    }
}
stage("Build backend"){
    steps{
        dir("platform-for-all-back"){
            bat "mvn clean compile"    
        }
    }
}
```

### 2. Análisis Estático

**Herramienta/Framework:**  
- SonarQube para análisis de calidad del código.

**Evidencia (fragmento de código):**
```groovy
stage("SonarQube Analysis Backend") {
            steps {
                dir("platform-for-all-back"){
                    bat "$SCANNER_HOME/bin/sonar-scanner -Dsonar.url=http://localhost:9000/ \
                    -Dsonar.login=squ_324480fe7535a685e927cb1708c11004160ce62d \
                    -Dsonar.projectKey=jenkins-back \
                    -Dsonar.projectName=jenkins-back \
                    -Dsonar.sources=. \
                    -Dsonar.java.binaries=target "
                }                
            }
        }
        stage("SonarQube Analysis Frontend") {
            steps {
                dir("platform-for-all-all"){
                    bat "$SCANNER_HOME/bin/sonar-scanner -Dsonar.url=http://localhost:9000/ \
                    -Dsonar.login=squ_324480fe7535a685e927cb1708c11004160ce62d \
                    -Dsonar.projectKey=jenkins-front \
                    -Dsonar.projectName=jenkins-front \
                    -Dsonar.sources=. \
                    -Dsonar.java.binaries=target "
                }                
            }
        }
```

**Integración con Jenkins:**
- Conexión con el servidor SonarQube configurado en Jenkins.

---

### 3. Pruebas Unitarias

**Herramienta/Framework:**  
- JUnit para pruebas unitarias en el backend.
- 

**Evidencia (fragmento de código):**
```groovy
stage("Test backend"){
    steps{
        dir("platform-for-all-back"){
            bat "mvn test"
        }
    }
}
stage("Test frontend") {
    steps {
        dir("platform-for-all") {
                    script{
                        catchError(buildResult: 'SUCCESS', stageResult: 'UNSTABLE'){
                            bat "npm test"                               
                        }
                    }
        }
    }
}
```

**Integración con Jenkins:**
- Publicación de resultados de pruebas en el panel de Jenkins.

---

### 4. Pruebas Funcionales

**Herramienta/Framework:**  
- Selenium para pruebas funcionales automatizadas.

**Evidencia (fragmento de código):**
```groovy
stage('Functional Tests') {
    steps {
        sh 'mvn -Dtest=FunctionalTests test'
    }
}
```

**Integración con Jenkins:**
- Ejecución de pruebas en un entorno de integración continua.

---

### 5. Pruebas de Seguridad

**Herramienta/Framework:**  
- OWASP Dependency-Check para detectar vulnerabilidades en dependencias.

**Evidencia (fragmento de código):**
```groovy
stage('Security Tests') {
    steps {
        sh 'dependency-check --project my-project'
    }
}
```

**Integración con Jenkins:**
- Informes generados automáticamente después de la etapa de prueba.

---

### 6. Pruebas de Performance

**Herramienta/Framework:**  
- Apache JMeter para pruebas de carga.

**Evidencia (fragmento de código):**
```groovy
stage('Performance Tests') {
    steps {
        sh 'jmeter -n -t tests/PerformanceTest.jmx'
    }
}
```

**Integración con Jenkins:**
- Resultados de rendimiento publicados como artefactos.

---

### 7. Gestión de Issues

#### GitHub Issues
- Registro de defectos clasificados en categorías como:
  - **Bug:** Errores encontrados durante las pruebas.
  - **Improvement:** Mejora del código.
  - **New Requirement:** Nuevas funcionalidades solicitadas.

#### Ejemplo de Issue:
- **Título:** Error en validación de entrada  
- **Etiqueta:** Bug  
- **Asignado a:** @usuario  

#### GitHub Projects
- Creación de un tablero del proyecto para la división de tareas del equipo:
  - **Nombre de la tarea:** Implementación de pruebas unitarias.
  - **Descripción:** Desarrollo de casos de prueba para las clases `User` y `Order`.
  - **Responsable:** @miembro_equipo.
  - **Etiqueta:** Testing.
  - **Duración estimada:** 3 días.

---