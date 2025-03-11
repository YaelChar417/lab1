const { response, request } = require('express'); 
const express = require('express');
const router = express.Router();
const persona2Controller = require('../controllers/persona2');
const isAuth = require('../util/is-auth');

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/agregar', isAuth, persona2Controller.get_agregar);

// app.post registra un middleware que solo responde a peticiones HTTP tipo post
router.post('/agregar', isAuth, persona2Controller.post_agregar);

router.get('/:id', isAuth, persona2Controller.get_root);

//Se debe colocar hasta abajo
router.get('/', isAuth, persona2Controller.get_root);

module.exports = router;