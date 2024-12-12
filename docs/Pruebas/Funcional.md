# Plantilla para Pruebas Funcionales

## Nombre de la Prueba

**Descripción:**  

Validar que el sistema verifique diferentes credenciales al loguear al sistema, además de verificar el funcionamiento del registro de 10 usuarios y la navegación dentro del sistema

---

## Detalles de la Prueba

- **Módulo/Funcionalidad:** Login 
- **Escenario:** Probar para diferentes credenciales  
- **Autor:** Eysen Christopher Pérez Bazán 
- **Fecha:** 10/12/2024 

- **Módulo/Funcionalidad:** Register 
- **Escenario:** Probar para diferentes registro de usuario  
- **Autor:** Eysen Christopher Pérez Bazán 
- **Fecha:** 10/12/2024 

- **Módulo/Funcionalidad:** Register 
- **Escenario:** Probar la navegación dentro del sistema  
- **Autor:** Eysen Christopher Pérez Bazán 
- **Fecha:** 10/12/2024 

---

## Precondiciones

El usuario debe ingresar sus credenciales en el login para ingresar al sistema en el modulo Login
El usuario ingresa sus datos para crear sus credenciales y pertenecer al sistema
El usuario ingresa al sistema y navega dentro de la aplicación

---

## Datos de Entrada

## Login 
Dato 1
| Parámetro       | Tipo de Dato | Valor         |
|-----------------|--------------|---------------|
| username        | varchar      | user1         |
| password        | varchar      | password123   |

Dato 2
| Parámetro       | Tipo de Dato | Valor         |
|-----------------|--------------|---------------|
| username        | varchar      | user2         |
| password        | varchar      | password456   |

Dato 3
| Parámetro       | Tipo de Dato | Valor         |
|-----------------|--------------|---------------|
| username        | varchar      | carlos        |
| password        | varchar      | 2345          |

Dato 4
| Parámetro       | Tipo de Dato | Valor         |
|-----------------|--------------|---------------|
| username        | varchar      | @@3fgA        |
| password        | varchar      | $%##          |

Dato 5
| Parámetro       | Tipo de Dato | Valor         |
|-----------------|--------------|---------------|
| username        | varchar      |               |
| password        | varchar      |               |

Dato 6
| Parámetro       | Tipo de Dato | Valor         |
|-----------------|--------------|---------------|
| username        | varchar      | ana           |
| password        | varchar      |               |

Dato 7
| Parámetro       | Tipo de Dato | Valor         |
|-----------------|--------------|---------------|
| username        | varchar      |               |
| password        | varchar      | 123           |

## Register
Dato1
| Parámetro           | Tipo de Dato | Valor                 |
|---------------------|--------------|-----------------------|
| nombre_completo     | varchar      | Usuario Prueba 1      |
| usuario             | varchar      | testuser 1            | 
| correo              | varchar      | testuser1@example.com | 
| contraseña          | varchar      | Password123           | 
| confirmar_contraseña| varchar      | Password123           | 

Dato2
| Parámetro           | Tipo de Dato | Valor                 |
|---------------------|--------------|-----------------------|
| nombre_completo     | varchar      | Usuario Prueba 2      |
| usuario             | varchar      | testuser 2            | 
| correo              | varchar      | testuser2@example.com | 
| contraseña          | varchar      | Password123           | 
| confirmar_contraseña| varchar      | Password123           | 

Dato3
| Parámetro           | Tipo de Dato | Valor                 |
|---------------------|--------------|-----------------------|
| nombre_completo     | varchar      | Usuario Prueba 3      |
| usuario             | varchar      | testuser 3            | 
| correo              | varchar      | testuser3@example.com | 
| contraseña          | varchar      | Password123           | 
| confirmar_contraseña| varchar      | Password123           | 

Dato4
| Parámetro           | Tipo de Dato | Valor                 |
|---------------------|--------------|-----------------------|
| nombre_completo     | varchar      | Usuario Prueba 4      |
| usuario             | varchar      | testuser 4            | 
| correo              | varchar      | testuser4@example.com | 
| contraseña          | varchar      | Password123           | 
| confirmar_contraseña| varchar      | Password123           | 

Dato5
| Parámetro           | Tipo de Dato | Valor                 |
|---------------------|--------------|-----------------------|
| nombre_completo     | varchar      | Usuario Prueba 5      |
| usuario             | varchar      | testuser 5            | 
| correo              | varchar      | testuser5@example.com | 
| contraseña          | varchar      | Password123           | 
| confirmar_contraseña| varchar      | Password123           | 

Dato6
| Parámetro           | Tipo de Dato | Valor                 |
|---------------------|--------------|-----------------------|
| nombre_completo     | varchar      | Usuario Prueba 6      |
| usuario             | varchar      | testuser 6            | 
| correo              | varchar      | testuser6@example.com | 
| contraseña          | varchar      | Password123           | 
| confirmar_contraseña| varchar      | Password123           | 

Dato7
| Parámetro           | Tipo de Dato | Valor                 |
|---------------------|--------------|-----------------------|
| nombre_completo     | varchar      | Usuario Prueba 7      |
| usuario             | varchar      | testuser 7            | 
| correo              | varchar      | testuser7@example.com | 
| contraseña          | varchar      | Password123           | 
| confirmar_contraseña| varchar      | Password123           | 

Dato8
| Parámetro           | Tipo de Dato | Valor                 |
|---------------------|--------------|-----------------------|
| nombre_completo     | varchar      | Usuario Prueba 8      |
| usuario             | varchar      | testuser 8            | 
| correo              | varchar      | testuser8@example.com | 
| contraseña          | varchar      | Password123           | 
| confirmar_contraseña| varchar      | Password123           | 

Dato9
| Parámetro           | Tipo de Dato | Valor                 |
|---------------------|--------------|-----------------------|
| nombre_completo     | varchar      | Usuario Prueba 9      |
| usuario             | varchar      | testuser 9            | 
| correo              | varchar      | testuser9@example.com | 
| contraseña          | varchar      | Password123           | 
| confirmar_contraseña| varchar      | Password123           | 

Dato10
| Parámetro           | Tipo de Dato | Valor                 |
|---------------------|--------------|-----------------------|
| nombre_completo     | varchar      | Usuario Prueba 10     |
| usuario             | varchar      | testuser 10           | 
| correo              | varchar      | testuser10@example.com| 
| contraseña          | varchar      | Password123           | 
| confirmar_contraseña| varchar      | Password123           | 

---

## Pasos para Ejecutar la Prueba

## Login
1. Paso 1: Ingresar las credenciales en el login 
2. Paso 2: Ejecutar Iniciar sesión

## Register
1. Paso 1: Ingresar los datos personales al formulario
2. Paso 2: Ejecutar Registrar

## Home
1. Paso 1: Ingresar a biblioteca
2. Paso 2: Navegar en la ventana  biblioteca
3. Paso 3: Volver al home
4. Paso 4: Ingresar a managebooks
5. Paso 5: Navegar en la ventana  managebooks
6. Paso 6: Volver al home
7. Paso 7: Ingresar a manageusers
8. Paso 8: Navegar en la ventana manageusers
9. Paso 9: Volver al home
10. Paso 10: Ingresar a forum
11. Paso 11: Navegar en la ventana  forum
12. Paso 12: Volver

---

## Resultados Esperados

## Login
Después de ingresar las credenciales, el sistema permite el ingreso para las 2 primeras credenciales, el resto de credenciales el sistema muestra un mensaje de error al ingresar datos incorrectos

## Register
Después de ingresar los datos personales de 10 usuarios el sistema registro sin ninguna dificultad, lo que permitirá ingresar al sistema

## Home
Despues de ingresar al sistema el usuario navega sin dificultad al sistema y recorriendo por todos los link del sistema, esto es en la ventana de biblioteca, ventana de managebooks, ventana de manageusers y el ventana de forum

---

## Resultados Reales

Las pruebas realizadas en los modulos login, register y home se han ejecutado y pasado sin ningun problema

---

## Estado de la Prueba

- [ ] Pendiente  
- [ ] En Proceso  
- [x] Aprobada  
- [ ] Fallida  

---

## Observaciones

1. Login

Se probó exitosamente con diferentes combinaciones de credenciales válidas e inválidas. El sistema respondió correctamente mostrando mensajes de error para credenciales incorrectas o incompletas, y permitió el acceso solo para credenciales válidas.

2. Register

El registro de los 10 usuarios fue exitoso sin errores. Los datos ingresados se almacenaron correctamente y las contraseñas se verificaron de acuerdo con las reglas definidas. Se recomienda agregar validaciones adicionales para prevenir la creación de usuarios con correos repetidos o contraseñas que no cumplan con políticas de seguridad 

3. Home

La navegación entre las diferentes secciones del sistema fue fluida y sin interrupciones. Los enlaces y botones en cada módulo redirigen correctamente a sus respectivas funcionalidades. No se detectaron problemas de rendimiento al navegar entre las ventanas, incluso al alternar entre varias secciones rápidamente. Se recomienda realizar pruebas adicionales con más usuarios simultáneos para evaluar el comportamiento del sistema bajo carga.
