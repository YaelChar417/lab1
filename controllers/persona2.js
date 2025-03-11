const Persona = require('../models/persona2')

exports.get_agregar = (req, res, next) => {
    console.log(req.session.username);
    res.render('agregar_persona2', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
        csrfToken: req.csrfToken(),
    });
};

exports.post_agregar = (req, res, next) => {
    console.log(req.body);
    const persona2 = new Persona(req.body.nombre);
    persona2.save()
        .then(() => {
            console.log("persona guardada");
            req.session.info = `La persona ${persona2.nombre} ha sido creada con exito`;
            res.setHeader('Set-Cookie', `ultima_sesion=${persona2.nombre}`);
            res.redirect('/persona2');
        })
        .catch((err) => {
            console.log(err);
        });
    
};

exports.get_root = (req, res, next) => {
    console.log(req.get('Cookie'));
    const mensaje = req.session.info || '';

    if(req.session.info){req.session.info = ''}

    Persona.fetch(req.params.id)
        .then(([rows, fieldData]) => {
            console.log(fieldData);
            console.log(rows);
            res.render('lista_persona2', {
                isLoggedIn: req.session.isLoggedIn || false,
                username: req.session.username || '',
                personas: rows,
                info: mensaje,
            });
        })
        .catch((err) => {
            console.log(err);
        });
};