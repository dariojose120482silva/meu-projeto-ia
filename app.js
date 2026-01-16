// app.js
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./js-backend/config/config');
const iaController = require('./js-backend/controllers/iaController');

const app = express();
app.use(bodyParser.json());
app.use(iaController);

app.listen(config.porta, () => {
    console.log(`Servidor rodando na porta ${config.porta}`);
});
