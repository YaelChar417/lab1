const express = require('express');
const router = express.Router();
const persona5Controller = require('../controllers/persona5');

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/agregar', persona5Controller.get_agregar);

router.get('/lugares', persona5Controller.get_lugares);

// app.post registra un middleware que solo responde a peticiones HTTP tipo post
router.post('/agregar', persona5Controller.post_agregar);

module.exports = router;