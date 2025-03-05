const Place = require('../models/persona5');

exports.get_agregar = (req, res, next) => {
    res.render('agregar_persona5', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
    });
};

exports.get_lugares = (req, res, next) => {
    const datos = Place.getLugares();

    res.render('ver_persona5', { 
        datos: datos,
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
    });
};

exports.post_agregar = (req, res, next) => {
    const address = req.body.addrP5;
    const resultado = Place.agregarLugar(address);

    if (resultado) {
        res.redirect('/persona5/agregar');
    } else {
        console.log('Error en controllers');
        res.send('Ocurrió un error al guardar los datos :(');
    }
};