const express = require('express');
const router = express.Router();
const preguntaControllers = require('../controllers/pregunta');

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/', preguntaControllers.get_preguntas);

module.exports = router;