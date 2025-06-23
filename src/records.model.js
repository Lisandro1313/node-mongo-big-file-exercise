/* eslint-disable max-len */
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Esquema del registro basado en las columnas del archivo CSV
const schema = new Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    ip_address: String,
}, { timestamps: true });

module.exports = mongoose.model('records', schema);

