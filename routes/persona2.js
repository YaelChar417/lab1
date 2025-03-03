const express = require('express');
const router = express.Router();
const persona2Controller = require('../controllers/persona2');

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/', persona2Controller.get);

// app.post registra un middleware que solo responde a peticiones HTTP tipo post
router.post('/agregar', persona2Controller.post_agregar);

module.exports = router;