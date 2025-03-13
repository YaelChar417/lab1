const express = require('express');
const router = express.Router();
const persona5Controller = require('../controllers/persona5');
const isAuth = require('../util/is-auth');
const canCreate = require('../util/canCreatePersona');
const canView = require('../util/canViewPersona');

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/agregar', isAuth, canView, persona5Controller.get_agregar);

// app.post registra un middleware que solo responde a peticiones HTTP tipo post
router.post('/agregar', isAuth, canCreate, persona5Controller.post_agregar);

router.get('/editar/:id', isAuth, canCreate, persona5Controller.get_edit);
router.post('/editar', isAuth, canView, persona5Controller.post_edit);

router.get('/:id', isAuth, canView, persona5Controller.get_root);

router.get('/', isAuth, canView, persona5Controller.get_root);

module.exports = router;