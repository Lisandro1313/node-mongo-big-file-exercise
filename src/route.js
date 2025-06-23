const express = require('express');
const multer = require('multer');
const { upload, list } = require('./controller');

const router = express.Router();

// Configuración de Multer para guardar archivos en carpeta _temp
const uploadFile = multer({ dest: './_temp' });

// Ruta para subir el archivo CSV
router.post('/upload', uploadFile.single('file'), upload);

// Ruta para obtener los últimos 10 registros insertados
router.get('/records', list);

module.exports = router;
