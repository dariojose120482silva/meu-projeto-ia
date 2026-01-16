// service.js
const IaModel = require('./model');

async function processarTexto(texto) {
    // Simulação de processamento IA
    return IaModel.analisar(texto);
}

module.exports = { processarTexto };
