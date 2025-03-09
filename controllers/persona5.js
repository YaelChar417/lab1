const Place = require('../models/persona5');

exports.get_agregar = (req, res, next) => {
    console.log(req.session.username)
    res.render('agregar_persona5', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
    });
};

exports.post_agregar = (req, res, next) => {
    console.log(req.body);
    const lugar = new Place(req.body.addrP5)
    lugar.save()
        .then(() => {
            console.log("direccion guardada");
            req.session.info = `La direccion ${lugar.nombre} ha sido guardada con exito`;
            res.redirect('/persona5');
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.get_root = (req, res, next) => {
    const mensaje = req.session.info || '';

    if(req.session.info){req.session.info = ''}

    Place.fecth(req.params.id)
        .then(([rows, fieldData]) => {
            console.log(fieldData);
            console.log(rows);
            res.render('ver_persona5', {
                isLoggedIn: req.session.isLoggedIn || false,
                username: req.session.username || '',
                lugares: rows,
                info: mensaje,
            })
        })
        .catch((err) => {
            console.log(err);
        });
};