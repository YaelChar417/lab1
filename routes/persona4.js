const express = require('express');
const router = express.Router();


const personaPhotos = [];

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/',(req, res, next) => {
    res.render('agregar_persona4')
});

// app.post registra un middleware que solo responde a peticiones HTTP tipo post
router.post('/agregar',(req, res, next) => {
    console.log(req.body);
    personaPhotos.push(req.body.urlP4);
    res.render('lista_persona4', {
        fotos: personaPhotos,
    });
});

module.exports = router;