# Plantilla para Pruebas de Seguridad

## Nombre de la Prueba

**Descripción:**  

Verificar que el sistema sea resilente a ataques de tipo Inyección SQL - Oracle - Time Based y SQLite, Cabecera Content Security Policy (CSP) no configurada, Configuración Incorrecta Cross-Domain, Falta de cabecera Anti-Clickjacking, Divulgación de Marcas de Tiempo - Unix, Falta encabezado X-Content-Type-Options, Revelación de IP privada, Aplicación Web Moderna y Divulgación de información - Comentarios sospechosos
---

## Detalles de la Prueba

- **Módulo/Funcionalidad:** Login 
- **Tipo de Amenaza:** Inyección SQL, CSP, Cross-Domain, Anti-Clickjacking, X-Content-Type-Options, IP privada, Comentarios sospechosos
- **Autor:** Eysen Christopher Pérez Bazán 
- **Fecha:** 10/12/2024 

- **Módulo/Funcionalidad:** Register 
- **Tipo de Amenaza:** Inyección SQL, CSP, Cross-Domain, Anti-Clickjacking, X-Content-Type-Options, IP privada, Comentarios sospechosos
- **Autor:** Eysen Christopher Pérez Bazán  
- **Fecha:** 10/12/2024

- **Módulo/Funcionalidad:** Home 
- **Tipo de Amenaza:** Inyección SQL, CSP, Cross-Domain, Anti-Clickjacking, X-Content-Type-Options, IP privada, Comentarios sospechosos
- **Autor:** Eysen Christopher Pérez Bazán  
- **Fecha:** 10/12/2024  

---

## Precondiciones

El sistema debe estar desplegado en un entorno de prueba o desarrollo con acceso habilitado a la base de datos de pruebas, que contenga usuarios y datos relevantes. Los módulos Login, Register y Home deben estar funcionales y accesibles. Se deben tener credenciales válidas, herramientas de prueba como Burp Suite o OWASP ZAP disponibles, y configuración del navegador ajustada para inspeccionar encabezados HTTP. Además, los probadores deben contar con acceso a los registros del servidor para analizar posibles vulnerabilidades, y no debe haber errores previos ni saturación del sistema.

---

## Datos de Entrada

| Parámetro         | Tipo de Dato | Valor                                     |
|-------------------|--------------|-------------------------------------------|
| Usuario           | varchar      | Correo electrónico o nombre de usuario    |
| Contraseña        | varchar      | Contraseña alfanumérica                   |
| Consulta SQL      | varchar      | Inyección SQL simulada para pruebas       |
| Encabezados HTTP  | JSON         | Configuración esperada de CSP y otros     |
| IP Privada        | Dirección IP | IP simulada para detectar divulgación     |
| Comentarios       | varchar      | Comentarios de prueba sospechosos         |

---

## Pasos para Ejecutar la Prueba

1. Paso 1: Preparar el entorno  
2. Paso 2: Realizar pruebas de inyección SQL 
3. Paso 3: Validar encabezados de seguridad HTTP
4. Paso 4: Evaluar divulgación de información
5. Paso 5: Simular escenarios Cross-Domain
6. Paso 6: Registrar resultados

---

## Resultados Esperados

El sistema debe rechazar cualquier intento de inyección SQL, mostrando un mensaje de error genérico sin exponer detalles técnicos o datos sensibles. Los encabezados de seguridad HTTP (CSP, X-Content-Type-Options y Anti-Clickjacking) deben estar correctamente configurados, previniendo ataques como el clickjacking y protegiendo los datos enviados y recibidos. No debe permitirse la divulgación de marcas de tiempo, IP privadas ni comentarios sospechosos que puedan contener información confidencial. Ante intentos de acceso Cross-Domain, el sistema debe negar solicitudes no autorizadas. En general, la aplicación debe mantenerse segura y resiliente ante las vulnerabilidades identificadas en el reporte ZAP.

---

## Resultados Reales

1. Inyección SQL: Vulnerabilidades confirmadas en los endpoints que utilizan Oracle (Time-Based) y SQLite, con un nivel de riesgo alto y confianza media.
2. Falta de configuración de CSP: La cabecera Content Security Policy (CSP) no está configurada, lo que incrementa el riesgo de ataques XSS y la carga de recursos maliciosos, con un riesgo medio y confianza alta.
3. Configuración Incorrecta Cross-Domain: Se detectaron errores graves en la configuración de políticas de Cross-Domain, lo que puede permitir el acceso no autorizado entre dominios, con riesgo medio y confianza media.
4. Falta de cabecera Anti-Clickjacking: Ausencia de la cabecera X-Frame-Options, exponiendo la aplicación a ataques de clickjacking, con un nivel de riesgo medio y confianza media.
5. Revelación de Información Sensible: Vulnerabilidades menores, como divulgación de marcas de tiempo (Unix) y direcciones IP privadas, clasificadas con un riesgo bajo y confianza media.
6. Comentarios Sospechosos: Se detectaron comentarios en el código fuente que contienen información potencialmente sensible o confidencial, con un nivel de riesgo informativo y confianza baja.

---

## Estado de la Prueba

- [ ] Pendiente  
- [ ] En Proceso  
- [ ] Aprobada  
- [x] Fallida  

---

## Observaciones

Se detectaron vulnerabilidades críticas de inyección SQL en endpoints clave utilizando Oracle (Time-Based) y SQLite, lo que podría permitir a un atacante ejecutar consultas maliciosas en la base de datos.

La cabecera Content Security Policy (CSP) no está configurada, incrementando la exposición a ataques como XSS y la carga de recursos no autorizados.

La falta de la cabecera X-Frame-Options deja la aplicación vulnerable a ataques de clickjacking, comprometiendo la experiencia y seguridad del usuario.

Se observó una configuración incorrecta en políticas de Cross-Domain, permitiendo potencialmente el acceso no autorizado entre dominios.

Se encontraron marcas de tiempo (Unix) y direcciones IP privadas expuestas en las respuestas del sistema, lo cual podría facilitar el reconocimiento del entorno por parte de atacantes.

Se identificaron comentarios sospechosos en el código fuente, que podrían contener información sensible o confidencial relevante para el sistema.

La aplicación no cumple con varias de las mejores prácticas recomendadas por OWASP para la seguridad de aplicaciones web, evidenciando áreas críticas que requieren atención inmediata.