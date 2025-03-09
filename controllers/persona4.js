const Album = require('../models/persona4');

exports.get_agregar = (req, res, next) => {
    res.render('agregar_persona4', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
    });
};

exports.post_agregar = (req, res, next) => {
    console.log(req.body);
    const foto = new Album(req.body.url);
    foto.save()
        .then(() => {
            console.log("url de imagen guardada");
            req.session.info = `la imagen ${foto.url} ha sido guardada con exito`;
            res.setHeader('Set-Cookie', `ultima_sesion=${foto.url}`);
            res.redirect('/persona4')
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.get_root = (req, res, next) => {
    const mensaje = req.session.info || ''

    if(req.session.info){req.session.info = ''}

    Album.fetch(req.params.id)
        .then(([rows, fieldData]) => {
            console.log(fieldData);
            console.log(rows);
            res.render('lista_persona4', {
                isLoggedIn: req.session.isLoggedIn || false,
                username: req.session.username || '',
                fotos: rows,
                info: mensaje,
            })
        })
        .catch((err) => {
            console.log(err);
        });
    
};