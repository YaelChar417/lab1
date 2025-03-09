const Album = require('../models/persona4');

exports.get_agregar = (req, res, next) => {
    res.render('agregar_persona4', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
    });
};

exports.post_agregar = (req, res, next) => {
    const foto = new Album(req.body.url);
    foto.save()
        .then((req, res, next) => {
            console.log("url de imagen guardada");
            req.session.info = `la imagen ${foto.url} ha sido guardada con exito`;
            res.redirect('/persona4')
        })
        .catch((err) => {
            console.log(err);
        });
    res.redirect('/persona4/');
};

exports.get_root = (req, res, next) => {
    res.render('lista_persona4', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
        fotos: Album.fetchAll(),
    })
};