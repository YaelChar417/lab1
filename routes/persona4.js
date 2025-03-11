const express = require('express');
const router = express.Router();
const persona4Controller = require('../controllers/persona4');
const isAuth = require('../util/is-auth');

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/agregar', isAuth, persona4Controller.get_agregar);

// app.post registra un middleware que solo responde a peticiones HTTP tipo post
router.post('/agregar', isAuth, persona4Controller.post_agregar);

router.get('/:id', isAuth, persona4Controller.get_root);

router.get('/', isAuth, persona4Controller.get_root);

module.exports = router;