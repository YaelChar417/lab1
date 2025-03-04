const Persona = require('../models/persona2')

exports.get_agregar = (req, res, next) => {
    res.render('agregar_persona2');
};

exports.post_agregar = (req, res, next) => {
    console.log(req.body);
    const persona2 = new Persona(req.body.nombre);
    persona2.save();
    res.redirect('/persona2/');
};

exports.get_root = (req, res, next) => {
    res.render('lista_persona2', {
        personas: Persona.fetchAll(),
    });
};