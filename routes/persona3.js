const express = require('express');
const router = express.Router();
const persona3Crontroller = require('../controllers/persona3');
const isAuth = require('../util/is-auth');
const canView = require('../util/canViewPersona');

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/', isAuth, canView, persona3Crontroller.get);

module.exports = router;