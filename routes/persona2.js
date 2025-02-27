const express = require('express');
const router = express.Router();

const html_header = ``;

const html_footer = ``;

const personaNames = [];

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/',(req, res, next) => {
    res.render('agregar_persona2');
});

// app.post registra un middleware que solo responde a peticiones HTTP tipo post
router.post('/',(req, res, next) => {
    console.log(req.body);

    personaNames.push(req.body.nombreP2);

    res.render('lista_persona', {
        personas: personaNames,
    });
});

module.exports = router;