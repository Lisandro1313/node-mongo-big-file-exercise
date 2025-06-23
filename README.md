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


