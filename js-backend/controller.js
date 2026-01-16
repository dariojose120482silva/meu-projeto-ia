// controller.js
const express = require('express');
const router = express.Router();
const IaService = require('./service');

// Rota principal
router.post('/api/ia', async (req, res) => {
    const textoEntrada = req.body.texto;
    try {
        const resultado = await IaService.processarTexto(textoEntrada);
        res.json({ resultado });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao processar texto.' });
    }
});

module.exports = router;
