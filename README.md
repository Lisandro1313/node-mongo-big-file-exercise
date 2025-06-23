# Node + MongoDB Big File Uploader 📦

Este proyecto fue realizado como parte de un ejercicio técnico para CarbonBase.  
Consiste en una aplicación desarrollada en Node.js con MongoDB que permite subir un archivo `.csv` de gran tamaño (~80MB), procesarlo línea por línea y almacenar cada registro como un documento en la base de datos.

---

## 🚀 Tecnologías usadas

- Node.js
- Express.js
- MongoDB con Mongoose
- Multer (para la carga de archivos)
- Readline (para procesamiento eficiente del archivo)
- Dotenv, Nodemon y otras utilidades para el entorno de desarrollo

---

## 📸 Capturas de prueba

### POST `/upload`
Carga del archivo CSV usando Postman:

![POST /upload](https://i.ibb.co/Xx3xQY0v/Prueba1.png)

---

### GET `/records`
Consulta de los últimos 10 registros insertados:

![GET /records](https://i.ibb.co/SXxjszVN/Prueba2.png)

---

## 📄 Endpoints

### POST `/upload`

- Recibe un archivo `.csv` mediante `form-data` (campo `file`)
- Procesa el contenido línea por línea
- Guarda cada registro como documento en MongoDB
- Elimina el archivo del sistema una vez finalizado

### GET `/records`

- Devuelve los últimos 10 registros insertados
- Ideal para verificar rápidamente que los datos se guardaron correctamente

---

## 🔧 Instalación y ejecución

Clonar este repositorio:

```bash
git clone https://github.com/tuusuario/node-mongo-big-file-exercise.git
cd node-mongo-big-file-exercise
Instalar las dependencias:

bash
Copiar
Editar
npm install
Configurar las variables de entorno en el archivo .env:

env
Copiar
Editar
PORT=3000
MONGO_URI=mongodb://localhost:27017/bigfile
Iniciar el servidor en modo desarrollo:

bash
Copiar
Editar
npm run dev
🧪 Prueba con Postman
POST /upload

Tipo de body: form-data

Campo: file

Valor: archivo CSV

Respuesta esperada:

json
Copiar
Editar
{
  "message": "Archivo cargado y procesado con éxito"
}
GET /records

Retorna un array con los últimos 10 registros insertados

⚙️ Consideraciones técnicas
Procesamiento eficiente con readline, ideal para archivos grandes

Eliminación automática del archivo una vez procesado

Uso controlado de memoria

Código modularizado, comentado y fácil de escalar

Validaciones básicas de campos antes de guardar

✅ Objetivos del ejercicio
 Crear endpoint para subir archivos .csv

 Procesar archivos grandes sin consumir mucha memoria

 Guardar datos en MongoDB

 Consultar los últimos registros insertados

 Eliminar archivo luego del procesamiento

 Cumplir con buenas prácticas de código y documentación

🙋 Sobre mí
Soy Lisandro Etcheverry Carmona, desarrollador Fullstack Jr. con interés en seguir creciendo profesionalmente, aprendiendo en equipo y enfrentando desafíos reales de desarrollo.




