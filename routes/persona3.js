const express = require('express');
const router = express.Router();
const persona3Crontroller = require('../controllers/persona3');

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/', persona3Crontroller.get);

module.exports = router;