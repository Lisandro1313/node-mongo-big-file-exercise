const fs = require('fs');
const path = require('path');
const readline = require('readline');
const Records = require('./records.model');

/**
 * Controlador para manejar la carga y procesamiento del archivo CSV.
 * Lee línea por línea y guarda los datos en MongoDB en bloques para optimizar memoria.
 */
const upload = async (req, res) => {
    const { file } = req;

    if (!file) {
        return res.status(400).json({ error: 'Archivo no encontrado' });
    }

    const filePath = path.join(__dirname, '..', '_temp', file.filename);

    try {
        const stream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
            input: stream,
            crlfDelay: Infinity,
        });

        let isFirstLine = true;
        const buffer = [];
        const BATCH_SIZE = 1000;

        for await (const line of rl) {
            // Saltamos el encabezado del CSV
            if (isFirstLine) {
                isFirstLine = false;
                continue;
            }

            const [id, first_name, last_name, email, gender, ip_address] = line.split(',');

            // Agregamos la línea procesada al buffer
            buffer.push({
                id: Number(id),
                first_name,
                last_name,
                email,
                gender,
                ip_address,
            });

            // Insertamos por bloques para mayor eficiencia
            if (buffer.length >= BATCH_SIZE) {
                await Records.insertMany(buffer);
                buffer.length = 0;
            }
        }

        // Insertamos lo que quede en el buffer
        if (buffer.length > 0) {
            await Records.insertMany(buffer);
        }

        // Eliminamos el archivo temporal
        fs.unlinkSync(filePath);

        return res.status(200).json({ message: 'Archivo cargado y procesado con éxito' });

    } catch (err) {
        console.error('Error procesando el archivo:', err);
        return res.status(500).json({ error: 'Error al procesar el archivo' });
    }
};

/**
 * Devuelve los últimos 10 registros insertados en la base de datos.
 */
const list = async (_, res) => {
    try {
        const data = await Records
            .find({})
            .sort({ createdAt: -1 })
            .limit(10)
            .lean();

        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports = {
    upload,
    list,
};
