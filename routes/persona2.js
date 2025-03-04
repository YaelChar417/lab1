const express = require('express');
const router = express.Router();
const persona2Controller = require('../controllers/persona2');

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/', persona2Controller.get_agregar)
router.get('/agregar', persona2Controller.get_agregar);

// app.post registra un middleware que solo responde a peticiones HTTP tipo post
router.post('/agregar', persona2Controller.post_agregar);

//Se debe colocar hasta abajo
router.get('/', persona2Controller.get_root);

module.exports = router;