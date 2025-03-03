const express = require('express');
const router = express.Router();
const fs = require('fs');

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/',(req, res, next) => {
    res.render('agregar_persona5')
});

router.get('/lugares', (req,res,next) => {
    fs.readFile('datos.txt', 'utf8', (err, data) => {
        if (err) 
        {
            res.send('Error al leer el archivo.');
        }
        const datos = data.split('\n').filter(linea => linea.trim() !== '');
        res.render('ver_persona5', { datos: datos });
    });
});

// app.post registra un middleware que solo responde a peticiones HTTP tipo post
router.post('/agregar',(req, res, next) => {
    console.log(req.body);
    const address = req.body.addrP5;
    fs.appendFile('datos.txt', address + '\n', (err) => {
        if(err)
        {
            res.send('Ocurrio un error al guardar datos :(');
        }else
        {
            res.render('agregar_persona5');
        }
    });
});

module.exports = router;