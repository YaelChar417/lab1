const express = require('express');
const router = express.Router();
const persona4Controller = require('../controllers/persona4')

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/agregar', persona4Controller.get_agregar);

// app.post registra un middleware que solo responde a peticiones HTTP tipo post
router.post('/agregar', persona4Controller.post_agregar);

router.get('/', persona4Controller.get_root);

module.exports = router;