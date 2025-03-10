const Usuario = require('../models/users');

exports.get_login = (req, res, next) => {
    const mensaje = req.session.info || '';
    if(req.session.info){ req.session.info = ''}

    res.render('usuario_login', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
        isNew: false,
        info: mensaje,
    });
};

exports.get_logout = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/users/login');
    })
};

exports.post_login = (req, res, next) => {
    req.session.isLoggedIn = true;
    req.session.username = req.body.username;
    res.redirect('/persona2/agregar');
};

exports.get_signup = (req, res, next) => {
    const mensaje = req.session.info || '';
    if(req.session.info){ req.session.info = ''}

    res.render('usuario_login', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
        isNew: true,
        info: mensaje,
    });
};

exports.post_signup = (req, res, next) => {
    const usuario = new Usuario(req.body.username, req.body.password);
    usuario.save()
        .then(() => {
            req.session.info = 'Tu usuario ha sido creado'
            res.redirect('users/login');
        })
        .catch((err) => {
            console.log(err);
        });
};