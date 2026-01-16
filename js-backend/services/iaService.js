// iaService.js
const IaModel = require('../models/iaModel');

async function processarTexto(texto) {
    return IaModel.analisar(texto);
}

module.exports = { processarTexto };
