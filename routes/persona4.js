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
    let html = html_header;
    html += `<div class="columns">`
    for(const img of personaPhotos)
    {
        html += `<div class="column"><figure class="image is-3by2"><img alt="img no soportada" src="`;
        html += img;
        html += `"/></figure></div>`;
    }
    html += `</div>`;
    html += html_footer;

    res.send(html);
});

module.exports = router;