El pipeline de CI/CD incluye las siguientes etapas principales.

1. **Construcción Automática**

   - **Herramienta**: Maven y Vite.
   - **Evidencia**: Fragmento de configuración del build.
   ```bash
   stage("Build frontend"){
            steps{
                dir("src\\platform-for-all"){
                    bat "npm install"
                    bat "npm run build"                   
                }
            }
        }
        stage("Build backend"){
            steps{
                dir("src\\platform-for-all-back"){
                    bat "mvn clean install"    
                }
            }
        }
   ```
2. **Análisis Estático**

   - **Herramienta**: SonarQube,SonartScanner.
   - **Evidencia**: Fragmento de configuración del SonarQube.

  ```bash
   stage("SonarQube Analysis Backend") {
            steps {
                dir("src\\platform-for-all-back"){
                    bat """$SCANNER_HOME/bin/sonar-scanner -Dsonar.url=http://localhost:9000/ \
                    -Dsonar.login=squ_324480fe7535a685e927cb1708c11004160ce62d \
                    -Dsonar.projectKey=jenkins-back \
                    -Dsonar.projectName=jenkins-back \
                  -Dsonar.exclusions="**/venv/**,**/node_modules/**,**/test/**,**/test_funcional/**" \
                    -Dsonar.sources=. \
                    -Dsonar.java.binaries=target """
                }                
            }
        }
   stage("SonarQube Analysis Frontend") {
            steps {
                dir("src\\platform-for-all"){
                    bat """$SCANNER_HOME/bin/sonar-scanner -Dsonar.url=http://localhost:9000/ \
                    -Dsonar.login=squ_324480fe7535a685e927cb1708c11004160ce62d \
                    -Dsonar.projectKey=jenkins-front \
                    -Dsonar.projectName=jenkins-front \
                    -Dsonar.sources=. \
                    -Dsonar.exclusions="** /venv/**,**/node_modules/**,**/test/**,**/test_funcional/**" \
                    -Dsonar.language=ts,js \
                    -Dsonar.java.binaries=target """
                }                
            }
        }
   ```
![frontend](https://github.com/MaxSaavedraLux666/test-platform-for-all/blob/e696c0ede219f86909cd99f3cb26465703dc742e/docs/images/frontissues.jpg)
![backend](https://github.com/MaxSaavedraLux666/test-platform-for-all/blob/4bb8c8f4accd90ecf8671359bf4f736bfb726600/docs/images/backissues.jpg)



![front](https://github.com/MaxSaavedraLux666/test-platform-for-all/blob/7e0b89f3eac06ae5366e476ea368ad201398f93d/docs/images/frontstatic.jpg)
![back](https://github.com/MaxSaavedraLux666/test-platform-for-all/blob/7e0b89f3eac06ae5366e476ea368ad201398f93d/docs/images/backstatic.jpg)


3. **Pruebas Unitarias**

   - **Herramienta**: JUnit, Unittest.
   - **Evidencia**: Fragmento de configuración pruebas.

 ```bash
   stage("Test backend"){
            steps{
                dir("src\\platform-for-all-back"){
                    bat "mvn test"
                }
            }
         }
        stage("Test frontend") {
            steps {
                dir("src\\platform-for-all") {
                    script{
                        catchError(buildResult: 'SUCCESS', stageResult: 'UNSTABLE'){
                            bat "npm test"                              
                        }
                    }
                }
            }
        }
```


4. **Pruebas Funcionales**

   - **Herramienta**: Selenium, Postman.
   - **Evidencia**: Fragmento de configuración prueba ejecutados.

   ```bash
      stage("Prueba Funcional Backend"){
            steps{
                dir("src\\platform-for-all-back\\testFuncional"){
                    bat "newman run PruebasFuncionales.postman_collection.json"
                }
            }
        }
        stage("Prueba Funcional Frontend") {
            steps {
                dir("tests\\Funcionales\\frontend") {
                    catchError(stageResult: 'SUCCESS', buildResult: 'UNSTABLE') {
                        bat """
                        python -m venv venv
                        call .\\venv\\Scripts\\activate
                        python -m pip install -r requirements.txt
                        python test.py
                    """
                    }
                }
            }
        }
   ```
![funcional](https://github.com/MaxSaavedraLux666/test-platform-for-all/blob/11b74e843b850e58ff5f1e3c4d1c87a03f2b2ed4/docs/images/funcional.jpg)

5. **Pruebas de Seguridad**

   - **Herramienta**: OWASP ZAP.
   - **Evidencia**: Fragmento de configuración de ZAP.

   ```bash
   stage("Prueba Seguridad"){
            steps{
                dir("seguridad"){
                    bat "java -Xmx512m -jar \"C:\\ZAP\\zap-2.15.0.jar\" -cmd -quickurl https://localhost:5173 -quickprogress -quickout reporte.html -port 8090 -config api.disablekey=true -config ssl.ignore=true"
                }
            }
        }

   ```

6. **Pruebas de Rendimiento**

   - **Herramienta**: JMeter.
   - **Evidencia**: Fragmento de configuración de Jmeter.

   ```bash
           stage("Prueba Rendimiento"){
            steps{
                dir("tests\\Rendimiento"){
                    bat "C:\\apache-jmeter-5.6.3\\bin\\jmeter.bat -n -t .\\PruebasRendimiento.jmx -l .\\Resultado.jtl"
                }
            }
        }
      ```
   ![frontend](https://github.com/MaxSaavedraLux666/test-platform-for-all/docs/images/image.png)
