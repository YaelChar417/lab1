const Persona = require('../models/persona2')

exports.get_agregar = (req, res, next) => {
    console.log(req.session.username);
    res.render('agregar_persona2', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
    });
};

exports.post_agregar = (req, res, next) => {
    console.log(req.body);
    const persona2 = new Persona(req.body.nombre);
    persona2.save();
    res.setHeader('Set-Cookie', `ultima_sesion=${persona2.nombre}`);
    res.redirect('/persona2/');
};

exports.get_root = (req, res, next) => {
    console.log(req.get('Cookie'))
    res.render('lista_persona2', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
        personas: Persona.fetchAll(),
    });
};