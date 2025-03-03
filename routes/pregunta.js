const express = require('express');
const router = express.Router();

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/',(req, res, next) => {
    res.render('ver_preguntas')
});

module.exports = router;