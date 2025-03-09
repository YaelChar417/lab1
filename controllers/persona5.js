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

    Place.fetch(req.params.id)
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

exports.get_edit = (req, res, next) => {
    const id = req.params.id;
    Place.fetchOne(id)
        .then(([rows, fieldData]) => {
            if (rows.length > 0) {
                res.render('editar_persona5', {
                    place: rows[0],
                    isLoggedIn: req.session.isLoggedIn || false,
                    username: req.session.username || '',
                });
            } else {
                res.redirect('/persona5');
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

// Procesa la actualización del registro
exports.post_edit = (req, res, next) => {
    const id = req.body.id;
    const newName = req.body.nombre;
    Place.updateOne(id, newName)
        .then(() => {
            req.session.info = `La dirección se ha actualizado correctamente`;
            res.redirect('/persona5');
        })
        .catch((err) => {
            console.log(err);
        });
};