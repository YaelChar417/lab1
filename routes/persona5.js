const express = require('express');
const router = express.Router();
const fs = require('fs');

const html_aprovado = `<div class=card><div class="card-content">Dirección guardada exitosamente</div></div>`
const html_rechazado = `<div class=card><div class="card-content">Ocurrió un error al mandar la dirección</div></div>`

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/',(req, res, next) => {
    res.render('agregar_persona5')
});

// app.post registra un middleware que solo responde a peticiones HTTP tipo post
router.post('/agregar',(req, res, next) => {
    console.log(req.body);
    const address = req.body.addrP5;
    fs.appendFile('datos.txt', address + '\n', (err) => {
        if(err)
        {
            return res.send(html_header + html_form + html_rechazado + html_footer);
        }else
        {
            res.send(html_header + html_form + html_aprovado + html_footer);
        }
    });
});

module.exports = router;