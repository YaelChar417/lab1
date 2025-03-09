const express = require('express');
const router = express.Router();
const persona5Controller = require('../controllers/persona5');

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/agregar', persona5Controller.get_agregar);

// app.post registra un middleware que solo responde a peticiones HTTP tipo post
router.post('/agregar', persona5Controller.post_agregar);

router.get('/editar/:id', persona5Controller.get_edit);
router.post('/editar', persona5Controller.post_edit);


router.get('/:id', persona5Controller.get_root)

router.get('/', persona5Controller.get_root);

module.exports = router;