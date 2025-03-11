const express = require('express');
const router = express.Router();
const persona5Controller = require('../controllers/persona5');
const isAuth = require('../util/is-auth');

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/agregar', isAuth, persona5Controller.get_agregar);

// app.post registra un middleware que solo responde a peticiones HTTP tipo post
router.post('/agregar', isAuth, persona5Controller.post_agregar);

router.get('/editar/:id', isAuth, persona5Controller.get_edit);
router.post('/editar', isAuth, persona5Controller.post_edit);

router.get('/:id', isAuth, persona5Controller.get_root)

router.get('/', isAuth, persona5Controller.get_root);

module.exports = router;