# Plantilla para Pruebas de Rendimiento

## Nombre de la Prueba

**Descripción:**  
Verificar el rendimiento del sistema sea conveniente en cuestion de tiempos de carga, soportar diversas solicitudes de distintos usuarios (300) http Request en simultaneo o paralelo, que no supere el limite de tiempo para llevarse a cabo cada solicitud

---

## Detalles de la Prueba

- **Módulo/Funcionalidad:** Login 
- **Tipo de Prueba de Rendimiento:** Estres
- **Autor:** Axel Felix Huayhua
- **Fecha:** 10/12/2024

- **Módulo/Funcionalidad:** Register
- **Tipo de Prueba de Rendimiento:** Estres
- **Autor:** Axel Felix Huayhua
- **Fecha:** 10/12/2024

- **Módulo/Funcionalidad:** Home
- **Tipo de Prueba de Rendimiento:** Estres
- **Autor:** Axel Felix Huayhua
- **Fecha:** 10/12/2024

- **Módulo/Funcionalidad:** Landing Page
- **Tipo de Prueba de Rendimiento:** Estres
- **Autor:** Axel Felix Huayhua
- **Fecha:** 10/12/2024

- **Módulo/Funcionalidad:** Forum
- **Tipo de Prueba de Rendimiento:** Estres
- **Autor:** Axel Felix Huayhua
- **Fecha:** 10/12/2024

- **Módulo/Funcionalidad:** Manage Books
- **Tipo de Prueba de Rendimiento:** Estres
- **Autor:** Axel Felix Huayhua
- **Fecha:** 10/12/2024

- **Módulo/Funcionalidad:** Biblioteca
- **Tipo de Prueba de Rendimiento:** Estres
- **Autor:** Axel Felix Huayhua
- **Fecha:** 10/12/2024

- **Módulo/Funcionalidad:** Manage Users
- **Tipo de Prueba de Rendimiento:** Estres
- **Autor:** Axel Felix Huayhua
- **Fecha:** 10/12/2024

---

## Precondiciones

Asegurarse de que funcionen la app web correctamente, habiendo superado exitosamente las pruebas funcionales y unitarias


---

## Escenario de Prueba

| Parámetro            | Descripción                       | Valor                     |
|----------------------|-----------------------------------|---------------------------|
| Número de Usuarios   | Número de usuarios simulados     | 300             |
| Duración             | Tiempo total de ejecución        |  30000            |
| Umbral Aceptable     | Tiempo de respuesta esperado     | <=1000    |

---

## Pasos para Ejecutar la Prueba

1. Crear el test plan, grupo de hilos, y el http request
2. Establecer las condiciones de la prueba asertions
3. Establecer listenes para recolectar los datos
4. Ejecutar la prueba 
---

## Resultados Esperados

[Descripción clara del resultado esperado de la prueba de rendimiento. Ejemplo: El tiempo de respuesta no debe exceder 2 segundos con una carga de 1000 usuarios concurrentes.]

---

## Resultados Reales

[Descripción de los resultados obtenidos durante la ejecución de la prueba. Si aún no se ha ejecutado, dejar en blanco o como "Pendiente de Ejecución".]

---

## Métricas Recolectadas

| Métrica              | Valor Obtenido   | Umbral Esperado   |
|----------------------|------------------|-------------------|
| Tiempo de Respuesta  | [Valor]          | 500  |
| Tasa de Errores      | [Porcentaje]     | 0% |
| Uso de CPU           | [Porcentaje]     | 85% |
| Uso de Memoria       | [Cantidad]       | 90%   |

---

## Estado de la Prueba

- [ ] Pendiente  
- [ ] En Proceso  
- [X] Aprobada  
- [ ] Fallida  

---

## Observaciones

Es recomendable optimizar la carga para poner un limite de dureación de carga mas bajo y sea mas adecuado 
